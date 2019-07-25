<template>
  <div class="wrap">
    <mo-content>
      <result-tip :order="order"></result-tip>
      <consult-detail :order="order" :doctor="doctor"></consult-detail>
      <ll-box title="缴费详情" :style="{'padding-bottom':0}">
        <ll-cell title="支付金额" titleClass="c-gray" valueClass="c-orange" :value="`${order.payMoney}元`"></ll-cell>
        <ll-cell title="平台单号" titleClass="c-gray" :value="order.orderNo"></ll-cell>
        <ll-cell title="微信单号" titleClass="c-gray" :value="order.payNo" v-if="order.payNo"></ll-cell>
        <ll-cell title="支付状态" titleClass="c-gray" valueClass="c-green" :value="statusText[order.orderStatus]"></ll-cell>
        <ll-cell title="支付时间" titleClass="c-gray" :value="order.payTime" v-if="order.payTime"></ll-cell>
      </ll-box>
      <div class="btn-box" v-if="order.orderStatus==1||order.orderStatus==3||order.orderStatus==9">
        <van-button type="primary" class="btn btn-block" @click="start()">发起咨询</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import resultTip from '@/components/consult/resultTip'
  import consultDetail from '@/components/consult/consultDetail'
  import llCell from '@/components/llCell.vue'

  export default {
    components: {
      resultTip,
      llCell,
      consultDetail
    },
    data() {
      return {
        order: {},
        doctor: {},
        statusText: ['待支付', '已支付', '支付失败', '服务中', '服务结束', '主动退款', '主动退款失败', '自动退款', '自动退款失败', '医生应答', '关闭']
      }
    },
    created() {
      this.getOrder();
    },
    methods: {
      getOrder() {
        this.$http.get(`wx/auth/order/get/${this.$route.query.id}`).then(data => {
          if (data.data) {
            this.order = data.data;
            this.btnDisabled = false;
            this.getDoctor();
          }
        })
      },
      getDoctor() {
        this.$http.get(`wx/doctor/getDoctor/${this.order.doctorUuid}`).then(data => {
          if (data.data) {
            this.doctor = data.data;
          }
        })
      },
      start() {
        this.$router.push({
          path: '/patient/consult/imageText',
          query: {
            orderUuid: this.order.uuid
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
