<template>
    <div>
        <div id="page">
            <div class="content">
                <LeftList class="left-list"></LeftList>
                <ArticleList class="article-title"></ArticleList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import LeftList from "@/components/article/LeftList.vue";
    import ArticleList from "@/components/article/ArticleList.vue";
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: { LeftList, ArticleList }
    })
    export default class Article extends Vue {

    }
</script>

<style scoped lang="scss">
    #page {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
        z-index: 100;
    }

    .content {
        padding-top: 120px;
        color: #fff;
        text-align: left;
        width: 100%;
    }

    .left-list {
        display: inline-block;
        vertical-align: top;
        padding-left: 100px;
        width: 200px;
        height: 100%;
    }

    .article-title {
        display: inline-block;
        vertical-align: top;
        padding-right: 100px;
        width: calc(100% - 400px);
        height: 100%;
    }
</style>
