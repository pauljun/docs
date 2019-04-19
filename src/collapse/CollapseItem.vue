<style lang="less" >
.selet{
     color: #8cb5ff;
}

</style>
<template>
    <div>
        <div v-for="(item,index) in data" :key="index">
            <el-collapse-item  :name="item[defaultProps.id]"  v-if="item[defaultProps.children].length>0" > 
                <template slot="title">
                    <i :class="item[defaultProps.icon]"></i> 
                    <span style="margin-left:10px">{{item[defaultProps.name]}}{{item.children.length}}</span>
                </template>
                <collapse-item style="margin-left:20px" :defaultProps="defaultProps"  :id="id" v-on:childByValue="childByValue"   v-if="item.children.length>0" :data="item[defaultProps.children]"></collapse-item>
            </el-collapse-item>
            <div v-else :class="item[defaultProps.id]===id?'selet':''" style="margin-left:20px;cursor: pointer;" @click="choosemenu(item)">{{item[defaultProps.name]}}</div>
        </div>
    </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    name: 'collapse-item',
    props: {
        data: { type: Array }, // 表格数据
        id: { type: String }, // 表格数据
        defaultProps:{
            children:{
                type:String,
                default: 'children'
            },
            name:{
                type:String,
                default: 'name'
            } ,
            id:{
                type:String,
                default: 'id'
            } 
        },
    },
    data() {
        return {
        
        };
    },
    computed: {
       
    },
    mounted() {
       
    },
    methods: {
        handleChange(){

        },
        childByValue(val){
            this.$emit('childByValue', val)
        },
        choosemenu(item){
            this.$emit('childByValue', item)
            console.log(item)
        }
     
    }
};
</script>




