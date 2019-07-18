<template>
  <div class="wrap">
    <mo-content class="white mo-content">
      <div class="inp-box border-b">
        <div class="label">账号</div>
        <div class="inp">
          <input type="text" v-model="dataForm.mobilephone" class="input" placeholder="请输入您的登录手机号码">
          <van-button plain type="primary" class="btn">发送验证码</van-button>
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">验证码</div>
        <div class="inp">
          <input type="number" maxlength="6" v-model="dataForm.yzm" class="input" placeholder="请输入短信验证码">
        </div>
      </div>
      <div class="link-box clearfix">
      </div>
      <van-button type="primary" class="btn btn-block" @click="verify()" :disabled="btnDisabled">验证</van-button>
    </mo-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {
          mobilephone: '18175156251',
          yzm: '123456',
        },
        btnDisabled: false
      }
    },
    created() {

    },
    methods: {
      verify() {
        this.$router.push('/set-password');
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
