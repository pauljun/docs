<template>
    <div class="index-container"><index-md></index-md></div>
</template>

<script>
import IndexMd from '@/docs/index.md'
export default {
    data() {
        return {
            input: '# hello `java` '
        }
    },
    components: {
        IndexMd
    }
}
</script>

<style lang="scss">
.index-container{
    width: 1000px;
    margin: 0 auto;
}
</style>
