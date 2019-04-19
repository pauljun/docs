<template>
    <div class="layout-wrapper">
        <header-view></header-view>
        <div class="wrapper">
            <nav-view></nav-view>
            <div class="container" ref="container">
                <div class="main">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerView from './components/header'
import navView from './components/nav'

export default {
    name: 'index',
    data() {
        return {
            scorllHeight: 0
        }
    },
    components: {
        headerView,
        navView
    },
    methods: {
        renderAnchorHref() {
            if (/changelog/g.test(location.href)) return;
            const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
            const basePath = location.href.split('#').splice(0, 2).join('#');

            [].slice.call(anchors).forEach(a => {
                const href = a.getAttribute('href');
                a.href = basePath + href;
            });
        },
        goAnchor() {
            if (location.href.match(/#/g).length > 1) {
                const anchor = location.href.match(/#[^#]+$/g);
                if (!anchor) return;
                const elm = document.querySelector(anchor[0]);
                if (!elm) return;

                setTimeout(_ => {
                    this.$refs.container.scrollTop = this.scorllHeight - 100;
                }, 50);
            }
        }
    },
    mounted() {
        console.log(this.$route);
        const scorll = this.$route.hash.split('#')[1];
        if (scorll) {
            this.scorllHeight = document.getElementById(scorll).offsetTop;
        }
        this.renderAnchorHref();
        this.goAnchor();
    },
    beforeRouteUpdate(to, from, next) {
        next();
        setTimeout(() => {
            if (location.href.match(/#/g).length < 2) {
                this.renderAnchorHref();
            } else {
                const scorll = this.$route.hash.split('#')[1];
                if (scorll) {
                    this.scorllHeight = document.getElementById(scorll).offsetTop;
                }
                this.goAnchor();
            }
        }, 100);
    }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
    height: 100%;
    overflow: hidden;
}
.wrapper {
    display: flex;
    height: calc(100% - 60px);
    .container {
        flex: 1;
        height: 100%;
        // padding: 0 300px 50px 30px;
        overflow-y: auto;
        .main {
            width: 1000px;
            margin: 0 auto;
        }
    }
}
</style>

