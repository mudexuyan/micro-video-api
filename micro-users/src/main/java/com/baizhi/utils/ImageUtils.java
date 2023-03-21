package com.baizhi.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * 初始化随机头像工具类
 */
public class ImageUtils {

    private static List<String> photos;

    static {
        photos = new ArrayList<>();
        photos.add("https://i.328888.xyz/2023/03/14/95naE.th.png");
        photos.add("https://i.328888.xyz/2023/03/14/95UeQ.th.png");
        photos.add("https://i.328888.xyz/2023/03/14/95W0C.th.png");
        photos.add("https://i.328888.xyz/2023/03/14/95kBP.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/950JX.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/95lDt.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/95wrJ.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/9525c.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/95OiA.th.jpeg");
        photos.add("https://i.328888.xyz/2023/03/14/95bOo.th.jpeg");



    }

    /**
     * 随机选择list中一个头像路径
     *
     * @return
     */
    public static String getPhoto() {
        //-2147483648  2147483647
        int i = new Random().nextInt(photos.size());
        return photos.get(i);
    }

}
