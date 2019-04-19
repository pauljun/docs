<template>
    <header>
        <span class="fl">
            <img src="~@/assets/images/logo.png" />
        </span>
        <span class="title">
            Seemmo前端文档
        </span>
    </header>
</template>

<script>
export default {
    name: 'common',
}
</script>
<style lang="scss" scope>
header{
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    .fl {
        img{
            margin-top: 12px;
        }
    }
    .title{
        font-weight: bold;
        font-size: 16px;
        line-height: 60px;
        margin-left: 20px;
    }
}
</style>
