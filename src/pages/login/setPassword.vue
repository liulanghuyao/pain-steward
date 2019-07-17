<template>
  <div class="wrap">
    <mo-content class="white" :style="{padding:'0 20px'}">
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
      </div>
      <van-button type="primary" class="btn btn-block" @click="submit()" :disabled="btnDisabled">{{$route.query.from==1?'下一步':'完成'}}</van-button>
    </mo-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {
          password: '18175156251',
          rePassword: '123456',
        },
        btnDisabled: false
      }
    },
    created() {

    },
    methods: {
      submit() {
        if (this.$route.query.from == 1) {
          this.$router.push('/fill-message');
        } else {

        }
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
