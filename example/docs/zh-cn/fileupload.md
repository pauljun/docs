## fileUpload
> fileUpload 是基于element组件进行二次封装,多用户提交表单时上传文件

:::demo
```html
<template>
  <div>
    <file-upload url="http://192.168.1.15:18088/common/upload.php" :uploadParam="uploadParam"></file-upload>
  </div>
</template>
<script>
import fileUpload from 'seemmo/fileupload/index.vue'
export default {
  components: {
    fileUpload
  },
  data() {
    return {
        uploadParam:{
            type:"uploadFile"
        }
    }
  }
}
</script>
```

:::

### Table 参数说明
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| url | 上传文件地址 | Srting | —— | —— |
| placeholder | 输入框提示 | String | —— | —— |
| accept | 接受上传的文件类型（thumbnail-mode 模式下此参数无效）  | string | —— | —— |
| autoUpload | 是否在选取文件后立即进行上传 | Boolean | —— | —— |
| fileName | 上传的文件字段名 | Srting | —— | —— |

