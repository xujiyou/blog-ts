<template>
    <div id="app">
        <canvas id="canvas"></canvas>
        <router-view id="router-view" v-transition></router-view>
        <div id="nav" :class="{'is-scroll': scrollTop >= 100}">
            <div class="first">
                <img src="../public/xu.jpeg" class="logo-img" alt="xu">
                <div class="title" v-on:click="$router.push('/')">
                    <div class="small">受命于天</div>
                    <div class="big">既寿永昌</div>
                </div>
            </div>
            <router-link to="/">首页</router-link>
            <router-link to="/category">分类</router-link>
            <router-link to="/article">文章</router-link>
            <router-link to="/project">项目</router-link>
            <router-link to="/time">时间轴</router-link>
            <div class="footer">
                <button>关于</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import animation from './canvas/animation';
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class App extends Vue {

        scrollTop = 0.0;

        mounted () {
            let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
            animation.canvasAnimation(canvas);
            window.addEventListener('scroll', (e) => {
                if (e["srcElement"] === null) return;
                this.scrollTop = e["srcElement"]["scrollTop"] as number;
            }, true);
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border: 0;

        position: relative;
        overflow: hidden;
    }

    #canvas {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    }

    #router-view {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 20;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    #nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;

        height: 76px;
        line-height: 76px;
        text-align: left;
        padding: 0;

        background-color: transparent;
        color: #fff;
    }

    a {
        height: 32px;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        margin-left: 16px;
        margin-right: 16px;
        color: white;
        text-decoration: none;

        &.router-link-exact-active {
            color: #17b5d2;
        }
    }

    a::after {
        content:'';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
        transition:all 0.3s ease-in-out;
        transform: scale3d(0,1,1);
        transform-origin: 50% 0;
    }

    a:hover::after {
        transform: scale3d(1,1,1);
    }

    .first {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        padding-left: 32px;
    }

    .logo-img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        vertical-align: middle;
    }

    .title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        margin-right: 40px;
        text-align: center;
    }

    .small {
        font-size: 12px;
        line-height: 20px;
    }

    .big {
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
    }

    .footer {
        display: inline-block;
        float: right;
        padding-right: 32px;
    }

    .footer button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: #fff ;
        border-radius: 4px;
        color: #fff;
    }

    .footer button:hover {
        animation: button-bg-color 600ms 1;
        animation-fill-mode : forwards
    }

    .is-scroll {
        animation: bg-change 600ms 1;
        animation-fill-mode : forwards;
        color: #2c3e50;

        button {
            color: #2c3e50;
            border-color: #2c3e50;
        }

        a {
            color: #2c3e50;

            &.router-link-exact-active {
                color: #17b5d2;
            }
        }

        a::after {
            background-color: #2c3e50;
        }

        .footer button:hover {
            animation: new-button-bg-color 600ms 1;
            animation-fill-mode : forwards
        }
    }

    @keyframes button-bg-color {
        0% {
            background-color: transparent;
            color: #fff;
        }
        100% {
            background-color: #fff;
            color: #2c3e50;
        }
    }

    @keyframes new-button-bg-color {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: #2c3e50;
            color: #fff;
        }
    }

    @keyframes bg-change {
        0% {
            background-color: transparent;
            color: #fff;
        }
        100% {
            background-color: rgba(255, 255, 255, 0.96);
            color: #2c3e50;
        }
    }
</style>
