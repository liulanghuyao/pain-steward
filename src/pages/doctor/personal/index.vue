<template>
  <div class="wrap">
    <ll-box>
      <div class="header" v-if="this.$store.getters['login/isLogin']">
        <img src="@/assets/img/timg.gif" alt="">
        <div class="msg">
          <div class="name">{{user.name}}</div>
          <div class="tel c-gray">{{user.phone && `手机：${user.phone}`}}</div>
        </div>
        <van-button plain type="primary" class="btn" @click="$router.push('/set-password')">修改密码</van-button>
      </div>
      <div class="header" v-if="!this.$store.getters['login/isLogin']">
        <div class="login-box t-a-c">
          <van-button type="primary" class="btn login-btn" @click="$router.push('/login')">登 录</van-button>
        </div>
      </div>
    </ll-box>
    <ll-box :style="{padding:0}">
      <ll-cell title="执业认证" value="请尽快完善提交审核" valueClass="c-orange f-13" icon class="pd-lr" @click.native="$router.push('/doctor/personal/kill')"></ll-cell>
      <ll-cell title="服务设置" icon class="pd-lr" @click.native="$router.push('/patient/order/mineList')"></ll-cell>
      <ll-cell title="收益管理" icon class="pd-lr" @click.native="$router.push('')"></ll-cell>
      <ll-cell title="账户设置" icon class="pd-lr" @click.native="$router.push('')"></ll-cell>
    </ll-box>
    <div class="btn-box" v-if="this.$store.getters['login/isLogin']">
      <van-button plain type="warning" class="btn btn-block" @click="logout()">退出登录</van-button>
    </div>
  </div>
</template>

<script>
  import llCell from '@/components/llCell.vue'

  export default {
    components: {
      llCell,
    },
    data() {
      return {
        user: this.$store.getters['login/getUserInfo']
      }
    },
    activated() {
      this.$emit('setIndex', 2);
    },
    created() {

    },
    methods: {
      logout() {
        this.$store.dispatch('login/logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .header {
      display: flex;
      align-items: center;
      margin: 8px 0;

      .login-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;

        .login-btn {
          width: 140px;
          height: 42px;

          &.van-button--normal {
            font-size: 17px;
          }
        }
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
        border-radius: 50%;
      }

      .msg {
        flex: 1;
        line-height: 22px;

        .name {
          height: 22px;
          margin-bottom: 6px;
          font-size: 16px;
        }

        .tel {
          height: 22px;
          font-size: 15px;
        }
      }

      .btn.van-button--plain {
        height: 30px;
        line-height: 30px;
      }
    }

    .btn-box {
      margin: 48px 24px 28px;
    }
    
    .f-13 {
      font-size: 13px;
    }
  }
</style>
