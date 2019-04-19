<template>
    <div class="login">
        <div class="container">
            <div class="content">
                <div class="login-view">
                    <div class="login-title">
                        <img :src="logo" class="login-icon-sm">
                        <span
                            id="title"
                            style="margin-left:10px"
                            class="system-title"
                        >{{systemName}}</span>
                    </div>
                    <div class="login-hr">
                        <div class="login_line"></div>
                        <img src="../../assets/images/login/login_line.png">
                    </div>
                    <el-form
                        :model="accountForm"
                        status-icon
                        :rules="rules"
                        ref="accountForm"
                        class="demo-ruleForm"
                    >
                        <div class="input-view input-view-top">
                            <img src="../../assets/images/login/icon_login_name.png">
                            <el-form-item prop="userAccount" class="input">
                                <el-input
                                    type="text"
                                    v-model="accountForm.userAccount"
                                    auto-complete="off"
                                    placeholder="请输入用户名"
                                    width="470"
                                ></el-input>
                            </el-form-item>
                        </div>

                        <div class="input-view">
                            <img src="../../assets/images/login/icon_login_pass.png">
                            <el-form-item prop="userPassword" class="input">
                                <el-input
                                    type="password"
                                    v-model="accountForm.userPassword"
                                    auto-complete="off"
                                    @keyup.enter.native="checkpwd"
                                    placeholder="请输入密码"
                                ></el-input>
                            </el-form-item>
                        </div>

                        <div class="login-btn-view">
                            <el-form-item>
                                <el-button @click="checkpwd" class="login-btn" style>登录</el-button>
                            </el-form-item>
                        </div>
                        <div class="login-info">{{errowInfo}}</div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/images/logo.png'

export default {
    data() {
        return {
            logo,
            loginViewLeft: 'calc(100% - 500px)',
            errowInfo: '',
            systemName: '视频结构化平台',
            version: window.SEEMMO_VERSION || '',
            accountForm: {
                userAccount: '',
                userPassword: ''
            },
            rules: {
                userAccount: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        min: 5,
                        max: 12,
                        message: '长度为 5 到 12 位'
                    },
                    // {
                    //     pattern: /^[a-zA-Z0-9]+$/,
                    //     message: '用户名只能数字和字母'
                    // }
                ],
                userPassword: [
                    {
                        required: true,
                        message: '请输密码',
                        trigger: 'blur'
                    },
                    {
                        min: 5,
                        max: 15,
                        message: '长度为 5 到 15 位'
                    },
                    // {
                    //     pattern: /^[0-9a-zA-Z]+$/,
                    //     message: '只能包含数字和字母'
                    // }
                ]
            }
        };
    },
    methods: {
        checkpwd() {
            let { userAccount, userPassword } = this.accountForm;

            this.$refs.accountForm.validate(valid => {
                if (valid) {
                    this._services.businessService('userlogic',
                        {
                            type: 'login',
                            userAccount: userAccount,
                            userPassword: userPassword
                        },
                        {
                            method: 'GET',
                            loading: {
                                msg: '登录中...'
                            }
                        }
                    ).then(
                        res => {
                            if (res.code === 0) {
                                this.$router.push('/index');
                            }
                        }
                    );
                }
            });
        }
    },
    beforeDestroy() {
        window.onresize = null;
    }
};
</script>


<style lang='scss'>
// @import './index.scss';
</style>
