package org.baizhi.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class BulletChatServer {

    /**
     * Server instance
     */

    @Value("${netty.websocket.port}")
    private int port;
    @Autowired
    private BulletChatInitializer bulletChatInitializer;

//    private BulletChatServer(){
//        EventLoopGroup mainGroup = new NioEventLoopGroup();
//        EventLoopGroup subGroup  = new NioEventLoopGroup();
//        ServerBootstrap server = new ServerBootstrap();
//        server.group(mainGroup,subGroup)
//                .channel(NioServerSocketChannel.class)
//                .childHandler(bulletChatInitializer);
//        ChannelFuture future = server.bind(port);
//    }

    public void start(){
        EventLoopGroup mainGroup = new NioEventLoopGroup();
        EventLoopGroup subGroup  = new NioEventLoopGroup();
        ServerBootstrap server = new ServerBootstrap();
        server.group(mainGroup,subGroup)
                .channel(NioServerSocketChannel.class)
                .childHandler(bulletChatInitializer);
        ChannelFuture future = server.bind(port);
    }
}

