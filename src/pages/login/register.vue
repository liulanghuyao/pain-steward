<template>
  <div class="wrap">
    <mo-content class="white mo-content">
      <div class="inp-box border-b">
        <div class="label">账号</div>
        <div class="inp">
          <input type="text" v-model="dataForm.mobilephone" class="input" placeholder="请输入手机号">
          <van-button plain type="primary" class="btn" :disabled="smsDisabled" @click="sendSms()">{{smsBtn}}</van-button>
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">验证码</div>
        <div class="inp">
          <input type="number" v-model="dataForm.smsCode" class="input" placeholder="请输入短信验证码">
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">设置登录密码</div>
        <div class="inp">
          <input type="password" v-model="dataForm.password" class="input" placeholder="请输入密码">
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">确认登录密码</div>
        <div class="inp">
          <input type="password" v-model="dataForm.rePassword" class="input" placeholder="请再次输入密码">
        </div>
      </div>
      <div class="link-box clearfix">
        <span class="blue">《疼痛e管家在线服务协议》</span>
      </div>
      <van-button type="primary" class="btn btn-block" @click="register()" :disabled="btnDisabled">注册</van-button>
    </mo-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {
          mobilephone: '',
          smsCode: '',
          password: '',
          rePassword: '',
          type: this.$storage.getItem('loginType')
        },
        btnDisabled: false,
        smsDisabled: false,
        smsBtn: '发送验证码'
      }
    },
    created() {

    },
    methods: {
      validate(type) {
        let flag = true;
        if (type == 1) {
          if (!this.$utils.regPhone(this.dataForm.mobilephone)) {
            this.$toast('请填写正确的手机号码！');
            flag = false;
          }
        } else if (type == 2) {
          if (!this.$utils.regPhone(this.dataForm.mobilephone)) {
            this.$toast('请填写正确的手机号码！');
            flag = false;
          } else if (this.$utils.isEmpty(this.dataForm.smsCode)) {
            this.$toast('请输入6位数的验证码！');
            flag = false;
          } else if (this.$utils.isEmpty(this.dataForm.password)) {
            this.$toast('请设置密码');
            flag = false;
          } else if (this.dataForm.rePassword != this.dataForm.password) {
            this.$toast('两次输入的密码不一致！');
            flag = false;
          }
        }
        return flag;
      },
      sendSms() {
        if (!this.validate(1)) {
          return;
        }
        let s = 60;
        this.smsBtn = s + ' S';
        this.smsDisabled = true;
        this.interval = setInterval(() => {
          this.smsBtn = s + ' S';
          s--;
          if (!s) {
            clearInterval(this.interval);
            this.smsBtn = '发送验证码';
            this.smsDisabled = false;
          }
        }, 1000);
        this.$http.get(`wx/api/sendSms/${this.dataForm.mobilephone}/REGISTER`).then(data => {}).catch(err => {});
      },
      register() {
        if (!this.validate(2)) {
          return;
        }
        this.$http.post('wx/api/register', this.dataForm).then(data => {
          this.$dialog.alert({
            title: '注册成功',
            message: '立即登录去完善基本信息'
          }).then(() => {
            this.$router.go(-2);
          });
        }).catch(err => {
          this.$toast(err.msg);
        })
      },
    },
    beforeDetroyed() {
      clearInterval(this.interval);
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .mo-content {
      padding: 0 20px;
    }

    .inp-box {
      position: relative;
      padding: 24px 0;
      background: #FFFFFF;

      .label {
        margin-bottom: 16px;
        line-height: 23px;
        font-size: 15px;
      }

      .inp {
        position: relative;

        .input {
          display: block;
          border: 0;
          height: 23px;
        }

        .btn {
          min-width: 82px;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -20px;
        }
      }
    }

    .link-box {
      margin-top: 24px;

      .blue {
        color: #83ADF9;
      }

      .green {
        color: #1AD48E;
      }
    }

    .btn-block {
      margin-top: 60px;
    }
  }
</style>
