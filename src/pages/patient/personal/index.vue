<template>
  <div class="wrap">
    <ll-box>
      <div class="header">
        <img src="@/assets/img/timg.gif" alt="">
        <div class="msg">
          <div class="name">李时珍</div>
          <div class="tel c-gray">手机：15874940105</div>
        </div>
        <van-button plain type="primary" class="btn" @click="$router.push('/set-password')">修改密码</van-button>
      </div>
    </ll-box>
    <ll-box :style="{padding:0}">
      <ll-cell title="基本信息" icon class="pd-lr" @click.native="$router.push('/patient/personal/message')"></ll-cell>
      <ll-cell title="订单记录" icon class="pd-lr" @click.native="$router.push('/patient/order/mineList')"></ll-cell>
      <ll-cell title="平台介绍" icon class="pd-lr" @click.native="$router.push('')"></ll-cell>
    </ll-box>
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

      }
    },
    activated() {
      this.$emit('setIndex', 2);
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .header {
      display: flex;
      align-items: center;
      margin: 8px 0;

      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
        border-radius: 50%;
      }

      .msg {
        flex: 1;

        .name {
          margin-bottom: 6px;
          font-size: 16px;
        }

        .tel {
          font-size: 15px;
        }
      }

      .btn.van-button--plain {
        height: 30px;
        line-height: 30px;
      }
    }
  }
</style>
