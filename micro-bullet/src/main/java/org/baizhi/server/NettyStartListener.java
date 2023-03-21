package org.baizhi.server;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class NettyStartListener implements ApplicationRunner {
    @Resource
    private BulletChatServer bulletChatServer;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        this.bulletChatServer.start();
    }



}