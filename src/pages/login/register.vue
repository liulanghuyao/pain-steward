<template>
  <div class="wrap">
    <mo-content class="white" :style="{padding:'0 20px'}">
      <div class="inp-box border-b">
        <div class="label">账号</div>
        <div class="inp">
          <input type="text" v-model="dataForm.mobilephone" class="input" placeholder="请输入手机号">
          <van-button plain type="primary" class="btn">发送验证码</van-button>
        </div>
      </div>
      <div class="inp-box border-b">
        <div class="label">验证码</div>
        <div class="inp">
          <input type="number" v-model="dataForm.yzm" class="input" placeholder="请输入短信验证码">
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
          mobilephone: '18175156251',
          password: '123456',
        },
        btnDisabled: false
      }
    },
    created() {

    },
    methods: {
      register() {
        this.$router.push({
          path: '/set-password',
          query: {
            from: 1
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
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
