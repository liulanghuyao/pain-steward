<template>
  <div class="wrap">
    <mo-content>
      <van-notice-bar text="请在13分20秒内完成支付" left-icon="volume-o" />
      <consult-detail></consult-detail>
      <ll-cell title="支付金额" class="pd-lr" valueClass="c-orange money" value="50元"></ll-cell>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="pay()">确认支付</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import llTip from '@/components/llTip'
  import consultDetail from '@/components/consult/consultDetail'

  export default {
    components: {
      llTip,
      consultDetail
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {
      pay() {
        this.$router.push({path:'/patient/consult/payResultConsult'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .money {
      font-size: 18px !important;
    }

    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
