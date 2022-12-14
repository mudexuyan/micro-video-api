package com.baizhi.controller;

import com.baizhi.annotations.RequiredToken;
import com.baizhi.constants.Constants;
import com.baizhi.entity.Favorite;
import com.baizhi.entity.Played;
import com.baizhi.entity.User;
import com.baizhi.entity.Video;
import com.baizhi.feignclients.VideosClient;
import com.baizhi.service.FavoriteService;
import com.baizhi.service.PlayedService;
import com.baizhi.service.UserService;
import com.baizhi.utils.*;
import com.baizhi.vo.MsgVO;
import com.baizhi.vo.VideoVO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.TimeUnit;

@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);


    private StringRedisTemplate stringRedisTemplate;
    private RedisTemplate redisTemplate;

    private UserService userService;

    private VideosClient videosClient;

    private PlayedService playedService;

    private FavoriteService favoriteService;


    @Autowired
    public UserController(StringRedisTemplate stringRedisTemplate, RedisTemplate redisTemplate, UserService userService, VideosClient videosClient, PlayedService playedService, FavoriteService favoriteService) {
        this.stringRedisTemplate = stringRedisTemplate;
        this.redisTemplate = redisTemplate;
        this.userService = userService;
        this.videosClient = videosClient;
        this.playedService = playedService;
        this.favoriteService = favoriteService;
    }

    /**
     * ????????????????????????
     */
    @GetMapping("/user/played")
    @RequiredToken
    public List<VideoVO> played(HttpServletRequest request, @RequestParam(value = "page", defaultValue = "1") Integer page, @RequestParam(value = "per_page", defaultValue = "5") Integer rows) {
        log.info("?????????: {} ??????????????????: {}", page, rows);
        User user = (User) request.getAttribute("user");
        List<VideoVO> videoVOS = playedService.queryByUserId(user.getId(), page, rows);
        log.info("????????????????????????????????????: {}", JSONUtils.writeValueAsString(videoVOS));
        return videoVOS;
    }

    /**
     * ??????????????????
     */
    @GetMapping("/user/favorites")
    @RequiredToken
    public List<VideoVO> favorites(HttpServletRequest request) {
        User user = (User) request.getAttribute("user");
        List<VideoVO> videoVOS = favoriteService.findFavoritesByUserId(user.getId());
        log.info("??????????????????????????????: {}", JSONUtils.writeValueAsString(videoVOS));
        return videoVOS;
    }

    /**
     * ????????????????????????
     */
    @DeleteMapping("/user/favorites/{id}")
    @RequiredToken
    public void cancelFavorites(@PathVariable("id") Integer videoId, HttpServletRequest request) {
        User user = (User) request.getAttribute("user");
        log.info("?????????????????????id: {}", videoId);
        int i = favoriteService.deleteByVideoIdAndUserId(videoId, user.getId());
        log.info("????????????????????????:, {}", i > 0);

    }

    /**
     * ??????????????????
     */
    @PutMapping("/user/favorites/{id}")
    @RequiredToken
    public void createFavorites(@PathVariable("id") Integer videoId, HttpServletRequest request) {
        log.info("???????????????id: {}", videoId);
        //1.??????????????????????????????
        User user = (User) request.getAttribute("user");
        //2.???????????????????????????
        Favorite favorite = favoriteService.queryByVideoIdAndUserId(videoId, user.getId());
        if (ObjectUtils.isEmpty(favorite)) {
            favorite = new Favorite();
            favorite.setVideoId(videoId);
            favorite.setUid(user.getId());
            favorite = favoriteService.insert(favorite);
            log.info("??????????????????: {}", JSONUtils.writeValueAsString(favorite));
        }
    }


    /**
     * ?????????????????????
     * Favorite favorite = userClient.favorite(uid,videoId);
     * if(!ObjectUtils.isEmpty(favorite))detail.setFavorite(true)
     */
    @DeleteMapping("/user/disliked/{id}")
    @RequiredToken
    public void cancelDisliked(@PathVariable("id") String videoId, HttpServletRequest request) {
        //1.????????????????????????
        User user = (User) request.getAttribute("user");
        //2.??????????????????????????????????????????????????????
        if (stringRedisTemplate.opsForSet().isMember(RedisPrefix.USER_DISLIKE_PREFIX + user.getId(), videoId)) {
            stringRedisTemplate.opsForSet().remove(RedisPrefix.USER_DISLIKE_PREFIX + user.getId(), videoId);
        }
    }

    /**
     * ?????????????????????
     */
    @PutMapping("/user/disliked/{id}")
    @RequiredToken
    public void disliked(@PathVariable("id") String videoId, HttpServletRequest request) {
        // 1.?????????????????????????????????
        User user = (User) request.getAttribute("user");

        //2.????????????????????????????????????
        stringRedisTemplate.opsForSet().add(RedisPrefix.USER_DISLIKE_PREFIX + user.getId(), videoId);

        //3.??????????????????????????????????????????
        if (stringRedisTemplate.opsForSet().isMember(RedisPrefix.USER_LIKE_PREFIX + user.getId(), videoId)) {
            stringRedisTemplate.opsForSet().remove(RedisPrefix.USER_LIKE_PREFIX + user.getId(), videoId);//???????????????????????????
            stringRedisTemplate.opsForValue().decrement(RedisPrefix.VIDEO_LIKE_COUNT_PREFIX + videoId);//????????????????????????-1
        }

    }


    /**
     * ????????????
     */
    @PutMapping("/user/played/{id}")
    public void played(@PathVariable("id") String videoId, HttpServletRequest request) {
        //redis???????????????+1
        stringRedisTemplate.opsForValue().increment(RedisPrefix.VIDEO_PLAYED_COUNT_PREFIX + videoId);

        //1.??????????????????
        User user = getUser(request);
        if (!ObjectUtils.isEmpty(user)) {
            //???????????????????????????
            Played played = new Played();
            played.setUid(user.getId());
            played.setVideoId(Integer.valueOf(videoId));
            played = playedService.insert(played);
            log.info("???????????????????????????????????????,?????????: {}", JSONUtils.writeValueAsString(played));
        }
    }

    /**
     * ????????????????????????
     */
    @DeleteMapping("/user/liked/{id}")
    @RequiredToken
    public void cancelLiked(@PathVariable("id") Integer videoId, HttpServletRequest request) {
        //1.??????????????????
        User user = (User) request.getAttribute("user");
        log.info("??????????????????id: {}", videoId);

        //2.???????????????????????????????????????????????????
        stringRedisTemplate.opsForSet().remove(RedisPrefix.USER_LIKE_PREFIX + user.getId(), videoId.toString());

        //3.?????????????????????-1
        stringRedisTemplate.opsForValue().decrement(RedisPrefix.VIDEO_LIKE_COUNT_PREFIX + videoId);
    }


    /**
     * ??????????????????
     */
    @PutMapping("/user/liked/{id}")
    @RequiredToken
    public void liked(@PathVariable("id") String videoId, HttpServletRequest request) {
        //1.??????????????????????????????
        User user = (User) request.getAttribute("user");
        log.info("??????????????????id: {}", videoId);

        //2.?????????????????????+1
        stringRedisTemplate.opsForValue().increment(RedisPrefix.VIDEO_LIKE_COUNT_PREFIX + videoId);

        //3.???????????????????????????????????????redis???
        stringRedisTemplate.opsForSet().add(RedisPrefix.USER_LIKE_PREFIX + user.getId(), videoId);

        //4.?????????????????????????????????
        if (stringRedisTemplate.opsForSet().isMember(RedisPrefix.USER_DISLIKE_PREFIX + user.getId(), videoId)) {
            stringRedisTemplate.opsForSet().remove(RedisPrefix.USER_DISLIKE_PREFIX + user.getId(), videoId);
        }


    }


    /**
     * ??????????????????
     */
    @PostMapping("/user/videos")
    //MultipartFile file:??????????????????????????????
    //??????video???????????? ????????????  ????????????  video{title,intro}
    //category_id ????????????????????????id
    //request:    ??????????????????????????????????????????
    @RequiredToken
    public Video publishVideos(MultipartFile file, Video video, Integer category_id, HttpServletRequest request) throws IOException {

        //1.????????????????????????
        String originalFilename = file.getOriginalFilename();
        log.info("??????????????????: {}", originalFilename);
        log.info("?????????????????????: " + new ObjectMapper().writeValueAsString(video));
        log.info("??????id: {}", category_id);
        log.info("???????????????: {}", file.getSize());

        //2.?????????????????? mp4 avi ....
        String ext = FilenameUtils.getExtension(originalFilename);

        //3.??????uuid
        String uuidFileName = UUID.randomUUID().toString().replace("-", "");

        //4.??????uuid???????????????
        String newFileName = uuidFileName + "." + ext;

        //5.???????????????oss ???????????????oss??????
        String url = QiniuOssUtil.upload(file.getInputStream(), Constants.OSS_VIDEO, newFileName);
        log.info("???????????????????????????: {}", url);

        //?????????oss????????????????????????????????????
//        String cover = url + "?x-oss-process=video/snapshot,t_2000,f_jpg,w_0,h_0,m_fast,ar_auto";
        String cover = url + "?vframe/jpg/offset/15";

        log.info("?????????oss??????url??????????????????: {}", cover);

        //6.??????????????????
        video.setCover(cover);//??????????????????
        video.setLink(url);//??????????????????
        video.setCategoryId(category_id);//????????????id

        //??????????????????
        User user = (User) request.getAttribute("user");
        video.setUid(user.getId());//??????????????????id

        //??????????????????
        Video videoResult = videosClient.publish(video);
        log.info("?????????????????????????????????????????????: {}", JSONUtils.writeValueAsString(videoResult));
        return videoResult;
    }


    /**
     * ????????????
     */
    @DeleteMapping("tokens")
    public void logout(String token) {
        log.info("??????????????????token??????: {}", token);
        //1.????????????token????????????TokenKey
        String tokenKey = "session_" + token;
        //2.??????TokenKey???redis?????????
        stringRedisTemplate.delete(tokenKey);
    }

    /**
     * ??????????????????
     */
    @PatchMapping("user")
    @RequiredToken
    public User user(@RequestBody User user, HttpServletRequest request) {
        //1.??????token??????
        String token = (String) request.getAttribute("token");
        //2.????????????????????????
        User userOld = (User) request.getAttribute("user");
        //3.?????????????????????
        if (!StringUtils.isEmpty(user.getPhone())) {
            //???????????????
            String phoneKey = "phone_" + user.getPhone();
            if (!stringRedisTemplate.hasKey(phoneKey)) throw new RuntimeException("??????:??????????????????!");
            String redisCaptcha = stringRedisTemplate.opsForValue().get(phoneKey);//??????redis?????????
            if (!StringUtils.equals(redisCaptcha, user.getCaptcha())) throw new RuntimeException("??????:?????????????????????!");
            userOld.setPhone(user.getPhone());
        }
        //4.??????????????????
        if (!StringUtils.isEmpty(user.getName())) userOld.setName(user.getName());
        if (!StringUtils.isEmpty(user.getIntro())) userOld.setIntro(user.getIntro());
        //5.??????????????????
        userService.update(userOld);
        //6.??????redis?????????????????????
        redisTemplate.opsForValue().set("session_" + token, userOld, 7, TimeUnit.DAYS);
        return userOld;
    }


    /**
     * ????????????????????????
     */
    @GetMapping("user")
    @RequiredToken
    public User user(HttpServletRequest request) throws JsonProcessingException {
        User user = (User) request.getAttribute("user");
        log.info("????????????????????????: {}", new ObjectMapper().writeValueAsString(user));
        return user;
    }

    /**
     * ????????????
     */
    @PostMapping("tokens")
    public Map<String, Object> tokens(@RequestBody MsgVO msgVO, HttpServletRequest request) {
        Map<String, Object> result = new HashMap<>();
        //1.?????????????????????
        String phone = msgVO.getPhone();
        //2.?????????????????????
        String captcha = msgVO.getCaptcha();
        log.info("?????????: {},?????????:{}", phone, captcha);

        String phoneKey = "phone_" + phone;
        //3.?????????????????????redis???????????????????????????????????????,??????????????????????????????????????????!
//        if (!stringRedisTemplate.hasKey(phoneKey)) throw new RuntimeException("??????:?????????????????????!");
//
//        //4.?????????????????????redis????????????
//        String redisCaptcha = stringRedisTemplate.opsForValue().get(phoneKey);
//
//        //5.?????????????????????????????????redis????????????????????????
//        if (!StringUtils.equals(captcha, redisCaptcha)) throw new RuntimeException("??????:?????????????????????!");

        //6.???????????????????????????  //????????????????????????????????????
        User user = userService.findByPhone(phone);
        if (ObjectUtils.isEmpty(user)) {
            user = new User();//????????????????????????
            user.setCreatedAt(new Date());//??????????????????
            user.setUpdatedAt(new Date());//??????????????????
            user.setPhone(phone); //????????????????????????
            user.setIntro("");//??????????????????
            //?????????????????????
            user.setAvatar(ImageUtils.getPhoto());//?????????????????????
            user.setPhoneLinked(1);//??????????????????
            user.setWechatLinked(0);//??????????????????
            user.setFollowersCount(0);//???????????????
            user.setFollowingCount(0);//???????????????
            user = userService.insert(user);//??????????????????
        }

        //7.????????????????????????
        String token = request.getSession().getId(); //????????????sessionid  ?????????
        String tokenKey = "session_" + token; //session_xxxxx  session_132...
        log.info("??????token: {}", token);
        //redisTemplate ????????????  key:??????  value:??????  ??????:?????????????????????????????????  jdk???????????????
        //redisTemplate??????????????????????????????????????????: key:String???????????????   value:json?????????
        redisTemplate.opsForValue().set(tokenKey, user, 7, TimeUnit.DAYS);

        //8.??????token
        result.put("token", token);
        return result;
    }

    //?????????????????????token??????????????????
    private User getUser(HttpServletRequest request) {
        String token = request.getParameter("token");
        log.info("token???: {}", token);
        String tokenKey = "session_" + token;
        return (User) redisTemplate.opsForValue().get(tokenKey);
    }
}
