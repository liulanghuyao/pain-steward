<template>
  <div class="wrap">
    <mo-content class="white mo-content">
      <div class="inp-box border-b">
        <div class="label">账号</div>
        <div class="inp">
          <input type="text" v-model="dataForm.mobilephone" class="input" placeholder="请输入您的登录手机号码">
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">密码</div>
        <div class="inp">
          <input type="password" v-model="dataForm.password" class="input" placeholder="请输入短信验证码">
        </div>
      </div>
      <div class="link-box clearfix">
        <span class="fl blue" @click="$router.push('/find-password')">忘记密码？找回</span>
        <span class="fr green" @click="$router.push('/register')">新用户注册</span>
      </div>
      <van-button type="primary" class="btn btn-block" @click="login()" :disabled="btnDisabled">登录</van-button>
    </mo-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {
          mobilephone: '15874940105',
          password: '123456',
          openid: 'oDnsC1TKe9mSQ50IhZt77o_5yhE0'
        },
        btnDisabled: false
      }
    },
    created() {

    },
    methods: {
      login() {
        this.$http.post('wx/api/login', this.dataForm).then(data => {
          this.$store.dispatch('login/login', data.Authorization);
          this.$store.dispatch('login/setUser', data.user);
          if (data.user.type == 'patient') {
            this.$http.get('wx/auth/patient/patientInfo').then(data => {
              if (data.data) {
                this.$store.dispatch('login/setUserInfo', data.data);
                this.$router.go(-1);
              } else {
                this.$router.replace('/fill-message');
              }
            });
          } else if (data.user.type == 'doctors') {
            this.$http.get('wx/auth/doctor/doctorInfo').then(data => {
              if (data.data) {
                this.$store.dispatch('login/setUserInfo', data.data);
                this.$router.go(-1);
              } else {}
            });
          }
        }).catch(err => {
          this.$toast(err.msg);
        });
      }
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
