## tableBase
> tablebase 是基于element table组件进行二次封装, 此版本已经基于原来组件做了优化, 将selectType 和 hasNumber 进行合并

:::demo
```html
<template>
  <div>
    <div style="marginBottom: 20px;">
      <el-checkbox v-model="checked">是否支持checkbox</el-checkbox>
      <el-checkbox v-model="hasNumber">是否支持序列号</el-checkbox>
      <el-checkbox v-model="hasExpand">是否可展开</el-checkbox>
      <el-checkbox v-model="loading">是否显示加载状态</el-checkbox>
    </div>
    <table-base
        :columns="columns"
        :data="data"
        :hasNumber="hasNumber"
        :hasChecked="checked"
        :hasExpand="hasExpand"
        v-loading="loading"
        height="100%"
        :event="events"
    >
    </table-base>
  </div>
</template>
<script>
import TableBase from 'seemmo/tablebase/index.vue'
export default {
  components: {
    TableBase
  },
  data() {
    return {
      loading: false,
      hdLoading: false,
      checkedData: [],
      checked: false,
      hasNumber: false,
      hasExpand: false,
      events: {
        select: function(e){
          console.log(e);
        },
        selectAll: function(e){
          console.log(e);
        }
      },
      columns: [
        { key: 'name', name: '姓名'},
        { key: 'date', name: '时间'},
        {
          key: 'status', name: '状态', formatter: value => {
            if(value.status){
              return <el-button type="primary">已完成</el-button>
            }else{
              return <el-button>未完成</el-button>
            }
          }
        },
        {
          key: 'ctrl',
          name: '操作',
          operations: [
            {
              styleFn: function (row) { return 'primary' },
              label: '删除',
              func: function(data){
                console.log(data);
              }
            }
          ]
        }
      ],
      data: [{
        id: Math.random(),
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: true
      }, {
        id: Math.random(),
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        status: true
      }, {
        id: Math.random(),
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        status: false
      }, {
        id: Math.random(),
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        status: false
      }]
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
| loading | 是否开启加载动画 | Boolean | —— | —— |
| thClassName | 表头的className | String | —— | —— |
| rowClassName | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的className。 | Function({row, rowIndex})/String | —— | —— |
| hasChecked | 是否显示checkbox | Boolean | —— | false |
| hasExpand | 是否显示可展开按钮 | Boolean | —— | false |
| hasNumber | 是否显示序列号 | Boolean | —— | false |
| height | 表单高度 | String,Number | —— | 572 |
| event | 实践 | Boolean | —— | —— |

### Table event
| 时间名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| selectAll | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selectionChange | 当选择项发生变化时会触发该事件 | selection |
| rowClick | 当某一行被点击时会触发该事件 | row, column, event |
| sortChange | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |