<template>
    <div class="nav-container">
        <div v-for="menu in data" :key="menu.id">
            <router-link
                class="menu-weight"
                :class="activeName === menu.name && 'active'"
                :to="`/${language}${menu.path}`"
            >{{menu.name}}</router-link>
            <div class="submenu-item" v-if="menu.children">
                <div
                    v-for="item in menu.children"
                    :key="item.id"
                >
                <router-link
                    :class="activeName === item.name && 'active'"
                    :to="`/${language}${menu.path}${item.path}`"
                    class="menu-item"
                >{{item.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navs from '../../../router/nav.config';

export default {
    data() {
        return {
            data: [],
            language: 'zh-cn',
            activeName: ''
        }
    },
    created() {
        this.data = navs[this.language]
        this.activeName = this.$route.name
    },
    watch: {
        '$route': function (value) {
            this.activeName = value.name
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-container {
    width: 300px;
    padding: 20px 50px;
    overflow-y: auto;
    border-right: 1px solid #e1e1e1;
    .menu-weight {
        font-size: 16px;
        color: #333;
        font-weight: bold;
        line-height: 36px;
        margin-top: 20px;
        display: inline-block;
        &.active {
            color: #409EFF;
        }
    }
    .submenu-item {
        .menu-item {
            font-size: 14px;
            color: #444;
            line-height: 36px;
            &.active {
                color: #409EFF;
            }
        }
    }
}
</style>
