<template>
    <div class="file-upload-box">
        <el-input :placeholder="placeholder" v-model="inputText" class="upload-reset" disabled>
        </el-input>
        <el-upload class="upload-demo" ref="upload" :auto-upload="autoUpload" :accept="accept" :name="fileName" :data="uploadParam" :action="url" :before-upload="handleBefore" :limit="1" :show-file-list=false :on-exceed="handleExceed" :on-change="handleChange" :on-error="handleError">
            <el-button slot="trigger" size="small" type="primary" class="upload-text">上传</el-button>
        </el-upload>
    </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'fileUpload',
  props: {
    url: { type: String, require: true },
    placeholder: { type: String, default: '' },
    accept: { type: String, default: '' },
    uploadParam: { type: Object, default: {} },
    autoUpload: { type: Boolean, default: true },
    fileName: { type: String, default: 'upfile' }
  },
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    handleBefore(file) {
      this.$emit('closeLoading', true)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    handleError(err, file) {
      this.$emit('closeLoading', false)
      this.$message.error(err)
    },
    handleSuccess(res, file) {
      this.$emit('closeLoading', false)
      this.$refs.upload.clearFiles()
      if (res.errorCode != 0) {
        this.$message.error(res.message)
      } else {
        this.inputText = file.name
        this.$emit('uploadSuccess', res, file)
      }
    },
    handleChange(file) {
      this.inputText = file.name
    },
    submitUpload() {
      this.$refs.upload.submit()
      this.$emit('closeLoading', false)
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style lang="less">
.file-upload-box {
  display: inline-block;
  overflow: hidden;
  .upload-reset {
    float: left;
    width: 230px;
    input {
      border-right: none;
      height: 35px;
      line-height: 35px;
    }
    .el-input-group__append {
      background: #f5f7fa;
    }
  }
  .upload-demo {
    float: left;
  }
  .upload-text {
    height: 33px;
    margin-top: 1px;
    margin-left: 9px;
    background: #18a5d6;
    border-color: #3da9c5;
  }
}
</style>
