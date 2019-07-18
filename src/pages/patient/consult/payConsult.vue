<template>
  <div class="wrap">
    <mo-content>
      <consult-detail></consult-detail>
      <ll-cell title="支付金额" class="pd-lr" valueClass="c-orange money" value="50元"></ll-cell>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="pay()">确认支付</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import llTip from '@/components/llTip.vue'
  import consultDetail from '@/components/consult/consultDetail'
  import llCell from '@/components/llCell.vue'

  export default {
    components: {
      llTip,
      llCell,
      consultDetail
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {
      pay() {

      }
    }
  }
</script>

<style lang="scss">
  .wrap {
    .money {
      font-size: 18px !important;
    }

    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
