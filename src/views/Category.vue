<template>
    <div>
        <div id="page">
            <div class="content">
                <div class="category">
                    <div class="title">云原生</div>
                    <button @click="push('/article/云原生/Docker', 'article')">Docker</button>
                    <button @click="push('/article/云原生/Kubernetes', 'article')">Kubernetes</button>
                    <button @click="push('/article/云原生/Istio', 'article')">Istio</button>
                    <button @click="push('/article/云原生/gRPC', 'article')">gRPC</button>
                    <button @click="push('/article/云原生/Prometheus', 'article')">Prometheus</button>
                    <button @click="push('/article/云原生/Grafana', 'article')">Grafana</button>
                    <button @click="push('/article/云原生/Jaeger', 'article')">Jaeger</button>
                    <button @click="push('/article/云原生/Helm', 'article')">Helm</button>
                </div>
                <div class="category">
                    <div class="title">大数据</div>
                    <button @click="push('/article/大数据/HDFS', 'article')">HDFS</button>
                    <button @click="push('/article/大数据/HBase', 'article')">HBase</button>
                    <button @click="push('/article/大数据/Hive', 'article')">Hive</button>
                    <button @click="push('/article/大数据/Kafka', 'article')">Kafka</button>
                    <button @click="push('/article/大数据/Hue', 'article')">Hue</button>
                    <button @click="push('/article/大数据/Impala', 'article')">Impala</button>
                    <button @click="push('/article/大数据/Oozie', 'article')">Oozie</button>
                    <button @click="push('/article/大数据/Solr', 'article')">Solr</button>
                    <button @click="push('/article/大数据/Spark', 'article')">Spark</button>
                    <button @click="push('/article/大数据/YARN', 'article')">YARN</button>
                    <button @click="push('/article/大数据/ZooKeeper', 'article')">ZooKeeper</button>
                </div>
                <div class="category">
                    <div class="title">前端</div>
                    <button @click="push('/article/前端/Vue.js', 'article')">Vue.js</button>
                    <button @click="push('/article/前端/Node.js', 'article')">Node.js</button>
                    <button @click="push('/article/前端/TypeScript', 'article')">TypeScript</button>
                    <button @click="push('/article/前端/D3.js', 'article')">D3.js</button>
                    <button @click="push('/article/前端/HTML5&CSS3', 'article')">HTML5&CSS3</button>
                    <button @click="push('/article/前端/Nuxt.js', 'article')">Nuxt.js</button>
                    <button @click="push('/article/前端/Less&Sass', 'article')">Less&Sass</button>
                    <button @click="push('/article/前端/WebAssembly', 'article')">WebAssembly</button>
                    <button @click="push('/article/前端/Flutter', 'article')">Flutter</button>
                    <button @click="push('/article/前端/Swift', 'article')">Swift</button>
                    <button @click="push('/article/前端/Kotlin', 'article')">Kotlin</button>
                </div>
                <div class="category">
                    <div class="title">数据存储</div>
                    <button @click="push('/article/数据存储/MySQL', 'article')">MySQL</button>
                    <button @click="push('/article/数据存储/PostgreSQL', 'article')">PostgreSQL</button>
                    <button @click="push('/article/数据存储/Redis', 'article')">Redis</button>
                    <button @click="push('/article/数据存储/MongoDB', 'article')">MongoDB</button>
                    <button @click="push('/article/数据存储/Neo4j', 'article')">Neo4j</button>
                    <button @click="push('/article/数据存储/Elasticsearch', 'article')">Elasticsearch</button>
                    <button @click="push('/article/数据存储/Ceph', 'article')">Ceph</button>
                </div>
                <div class="category">
                    <div class="title">Java</div>
                    <button @click="push('/article/Java/JVM', 'article')">JVM</button>
                    <button @click="push('/article/Java/Spring', 'article')">Spring</button>
                    <button @click="push('/article/Java/Netty', 'article')">Netty</button>
                    <button @click="push('/article/Java/Maven', 'article')">Maven</button>
                    <button @click="push('/article/Java/Gradle', 'article')">Gradle</button>
                </div>
                <div class="category">
                    <div class="title">编程语言</div>
                    <button @click="push('/article/Java/JVM', 'article')">Dart</button>
                    <button @click="push('/article/Java/Spring', 'article')">Golang</button>
                    <button @click="push('/article/Java/Netty', 'article')">JavaScript</button>
                    <button @click="push('/article/Java/Maven', 'article')">Python</button>
                    <button @click="push('/article/Java/Gradle', 'article')">Rust</button>
                    <button @click="push('/article/编程语言/Scala', 'article')">Scala</button>
                    <button @click="push('/article/Java/Gradle', 'article')">Swift</button>
                    <button @click="push('/article/Java/Gradle', 'article')">TypeScript</button>
                </div>
                <div class="category">
                    <div class="title">DevOps</div>
                    <button @click="push('/article/Java/JVM', 'article')">Gitlab</button>
                    <button @click="push('/article/Java/Spring', 'article')">Jenkins</button>
                    <button @click="push('/article/Java/Netty', 'article')">SlatStack</button>
                </div>
                <div class="category">
                    <div class="title">Linux</div>
                    <button @click="push('/article/Java/JVM', 'article')">Sed</button>
                    <button @click="push('/article/Java/Spring', 'article')">Awk</button>
                </div>
                <div class="category">
                    <div class="title">其他</div>
                    <button @click="push('/article/Java/JVM', 'article')">设计模式</button>
                    <button @click="push('/article/Java/Spring', 'article')">计算机网络</button>
                    <button @click="push('/article/Java/Netty', 'article')">数据结构与算法</button>
                    <button @click="push('/article/Java/Netty', 'article')">区块链</button>
                    <button @click="push('/article/Java/Netty', 'article')">TensorFlow</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class Category extends Vue {

        push (value, name) {
            this.$router.push(value);
        }
    }
</script>

<style scoped>
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
        padding-left: 100px;
        padding-right: 100px;
    }

    .category {
        display: inline-block;
        vertical-align: top;
        width: 23%;
        margin-bottom: 20px;
        margin-left: 1%;
        margin-right: 1%;
    }

    .title {
        text-align: left;
        font-weight: bold;
        font-size: 20px;
        width: 100%;
        padding-bottom: 12px;
        margin-bottom: 20px;
        border-bottom: 1px solid #f8f8f8;
    }

    button {
        box-shadow: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px 4px 12px;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        color: #fff;
        height: 38px;
        margin-right: 12px;
        margin-bottom: 10px;
    }

    button:hover {
        animation: button-bg-color 600ms 1;
        animation-fill-mode : forwards
    }

    @keyframes button-bg-color {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: #fff;
            color: #2c3e50;
        }
    }
</style>
