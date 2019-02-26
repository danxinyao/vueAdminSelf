<template>
    <el-container class="main">
        <el-header style="height: 60px; line-height: 60px; text-align: left; background-color: #323a45; color: #fff; position: relative;">
            <el-row :gutter="20">
                <el-col :span="6">
                    <strong class="web_title"> 
                        <pg-icon style="vertical-align: top; color: #fff;font-size:24px;" icon="dianshangzhongxin"></pg-icon>
                        {{sysName}}
                    </strong>
                </el-col>
                <el-col :span="12">
                 <el-menu 
                    :default-active="$route.path" 
                    router
                    background-color="rgb(50, 58, 69)"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    mode="horizontal"
                    style="height: 100%; border: none;margin:0 auto;">
                    <el-submenu :index="'index' + (menuIndex + 1)" v-for="(menu, menuIndex) in menuList" :key="menuIndex">
                        <template slot="title">
                            <pg-icon style="vertical-align: top; color: #d7b791;" :icon="menu.iconCls"></pg-icon>
                            {{ menu.name }}
                        </template>
                    </el-submenu>
                </el-menu>                   
                </el-col>
                <el-col :span="6">
                    <div class="logout">
                        <pg-icon style="vertical-align: top; color: #fff;font-size:18px;" icon="morentouxiang"></pg-icon>
                        {{userName}}
                        <span>欢迎回来!</span>
                        <pg-icon @click="exit()" style="vertical-align: top; color: #fff;font-size:18px;" icon="shishixiaoshou"></pg-icon>
                        <span @click="exit()">退出</span>
                    </div>                    
                </el-col>
            </el-row>
        </el-header>
        <el-container style="height: 100%;">
            <el-aside width="250px" style="background-color: #333; box-sizing: border-box;">
                <el-menu 
                    :default-active="$route.path" 
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    style="height: 100%; border: none;">
                    <el-submenu :index="'index' + (menuIndex + 1)" v-for="(menu, menuIndex) in menuList" :key="menuIndex">
                        <template slot="title">
                            <pg-icon style="vertical-align: top; color: #d7b791;" :icon="menu.iconCls"></pg-icon>
                            {{ menu.name }}
                        </template>
                        <el-menu-item :index="child.path" v-for="child in menu.children" :key="child.name">
                            {{ child.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main style="background-color: #fff; padding: 10px 20px;">
                <div class="title">
                    <el-breadcrumb separator="/" class="breadcrumb-inner">
                        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                            {{ item.name }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <transition name="el-fade-in-linear" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .main {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .web_title {
        font-size: 24px;
        float: left;
    }
    .parent_menus {
        position: absolute;
        left: 200px;
        top: 0px;
        right: 50px;
        height: 60px;
        line-height: 60px;
        .menu {
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            display: inline-block;
            color: #fff;
            padding: 0px 20px;
            position: relative;
            i {
                color: #d7b791;
                opacity: 1;
            }
            &.active, &:hover {
                background: #474e58;
                i {
                    opacity: 0.8;
                }
            }
        }
    }
    .logout {
        text-align: right;
        span {
            color: #fff;
            padding:0 5px;
            font-size: 16px;
        }
    }
    .title {
        display: block;
        // color: #657385;
        // font-size: 20px;
        margin-bottom: 10px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>