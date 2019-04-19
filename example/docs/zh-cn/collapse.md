## Collapse
> Collapse 是基于element Collapse组件进行二次封装, 可支持树形菜单

:::demo
```html
<template>
  <div>
    <collapse :data="data" :defaultProps="defaultProps" style="width:300px" v-model="value"></collapse>
  </div>
</template>
<script>
import Collapse from 'seemmo/collapse/index.vue'
export default {
  components: {
    Collapse
  },
  data() {
    return {
        value:{},
        defaultProps:{
            name:'label',
            children: 'children',
            id: 'id',
            icon:'icon'
        },
        data:[
            {
                id:'1',
                label:'基础人像库',
                icon:'iconfont icon--jiegoufuwuqiicon-21',
                children:[
                    {
                        id:'13531',
                        label:'警察',
                        icon:'iconfont icon--jiegoufuwuqiicon-21',
                        children:[
                        {
                            id:'111',
                            label:'警察',
                            children:[]
                            },
                            {
                                id:'1111111',
                                label:'外来人口',
                                children:[]
                            }
                        ]
                    },
                    {
                        id:'112',
                        label:'外来人口',
                        children:[]
                    }
                ]
            },
            {
                id:'2',
                label:'黑名单',
                icon:'iconfont icon--jiegoufuwuqiicon-21',
                children:[
                    {
                        id:'211',
                        label:'警察',
                        children:[]
                    },
                    {
                        id:'2112',
                        label:'外来人口',
                        children:[]
                    }
                ]
            }
        ]
    }
  }
}
</script>
```

:::

### Table 参数说明
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| data | 显示数据源 | Array | —— | —— |
| value | 用户选中的值支持双向绑定 | Object | —— | —— |
| defaultProps |用户可自定义树形菜单id，name，children所对应键值  | Object | —— | —— |

