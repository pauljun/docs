<style lang="less">
    .selet {
        i {
            color: #8cb5ff;
        }
        span {
            font-weight: bold;
        }
    }
    .navmenu/deep/ .el-collapse-item__header,.navmenu/deep/ .el-collapse-item__wrap, .navmenu {
        border: none;
    }
</style>
<template>
    <el-collapse class="navmenu" v-model="activeNames" @change="handleChange">
        <collapse-item :defaultProps="defaultProps" :id="value.id" v-on:childByValue="childByValue" :data="data" :activeNames="activeNames"></collapse-item>
    </el-collapse>
</template>

<script>
    import CollapseItem from "./CollapseItem.vue"
    export default {
        props: {
            data: {
                type: Array
            },
            defaultProps: {
                type: Object,
                default: () => {
                    return {
                        children: 'children',
                        name: 'name',
                        id: 'id',
                        icon:''
                    }
                }
            },
        },
        components: {
            CollapseItem
        },
        computed: {},
        data() {
            return {
                activeNames: [],
                value: {}
            };
        },
        mounted() {},
        methods: {
            handleChange(val) {
            },
            childByValue(val) {
                this.value = val
                this.$emit('input', this.value);
            }
        }
    };
</script>




