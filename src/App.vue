<template>
    <div id="components-layout-demo-top">
        <v-layout class="layout">
            <v-header class="header">
                <v-row class="head-menu">
                    <v-col span="2" class="logo">
                        <img src="./assets/img/vue.png" width="45px" height="45px"/>vue.js
                    </v-col>
                    <v-col span="5" class="search">
                        <v-icon type="search"></v-icon> 
                        <v-input placeholder="" />
                    </v-col>
                    <v-col span="7"></v-col>
                    <v-col span="10">
                        <v-menu class="menu" mode="horizontal" :data="menuData" :style="{ lineHeight: '52px' }"></v-menu>
                    </v-col>
                </v-row>
            </v-header>
            <v-content :style="{ padding: '0 50px' }">
                <div style="background: #fff; padding: 24px; min-height: 280px">Content</div>
            </v-content>
            <v-footer :style="{ textAlign: 'center'}">
                Ant Design ©2016 Created by Ant UED
            </v-footer>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                menuData: [{
                    name: "首页",
                    selected: true
                },{
                    name: "微信公众号"
                },{
                    name: "VUE 2.0"
                },{
                    name: "参考资料"
                },{
                    name: "API"
                },{
                    name: "关于"
                },{
                    name: "注册"
                },{
                    name: "登录"
                }]
            };
        },
        computed: {
            
        },
        methods: {
           
        }
    }   
</script>

<style>
    html, body{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-size: 16px;
    }
    #components-layout-demo-top .ant-layout-header{
        background: #1C6132;
        color: #fff;
    }
    #components-layout-demo-top .header{
        height: 55px;
        line-height: 55px;
    }
    #components-layout-demo-top .logo{
        font-size: 20px;
        font-weight: 200;
        text-align: right;
    }
    #components-layout-demo-top .logo>img{
        vertical-align: middle;
    }
    #components-layout-demo-top .search{
        text-align: center;
    }
    #components-layout-demo-top i{
        padding: 5px 6px 7px 5px;
        margin-right: -6px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        color: darkgrey;
        background: #fff;
        z-index: 3px;
        border:none;
    }
    #components-layout-demo-top input{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        width: 70%;
        border: none;
    }
    #components-layout-demo-top .menu{
        background: #1C6132;
        color: #eee;
        font-size: 13px;
        margin-right: -20px;
    }
    #components-layout-demo-top .ant-menu-item.ant-menu-item-selected,
    #components-layout-demo-top .ant-menu-item:hover{
        border: none;
        color: #eee;
    }
    #components-layout-demo-top .ant-menu-item{
        
    }
    .content{
        background: #fff; 
        padding: 24px; 
        min-height: 280px;
        margin: 12px 0;
    }
    .ant-menu-horizontal{
        border: none;
    }
</style>
