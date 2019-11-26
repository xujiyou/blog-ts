<template>
    <div id="app">
        <canvas id="canvas"></canvas>
        <router-view id="router-view" v-transition></router-view>
    </div>
</template>

<script lang="ts">
    import animation from './canvas/animation';
    import { Component, Vue } from "vue-property-decorator";
    import { State, Action } from 'vuex-class';

    @Component({})
    export default class App extends Vue {

        mounted () {
            let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
            animation.canvasAnimation(canvas);
        }
    }
</script>

<style lang="scss">
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
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
