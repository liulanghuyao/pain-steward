<template>
  <div class="wrap">
    <mo-content>
      <van-notice-bar text="请在30分内完成支付" left-icon="volume-o" />
      <consult-detail :order="order" :doctor="doctor"></consult-detail>
      <ll-cell title="支付金额" class="pd-lr" valueClass="c-orange money" :value="`${order.payMoney}元`"></ll-cell>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="pay()" :disabled="btnDisabled">确认支付</van-button>
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
      return {
        btnDisabled: true,
        order: {},
        doctor: {},
        wxPay: {}
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
      pay() {
        this.$http.post('wx/auth/order/confirm', {
          orderId: this.order.uuid
        }).then(data => {
          if (data.data) {
            this.wxPay = data.data;
            this.wxPay.package = this.wxPay.packageValue;
            WeixinJSBridge.invoke('getBrandWCPayRequest', this.wxPay, (res) => {
              alert(res.err_msg);
              WeixinJSBridge.log(res.err_msg);
              if (res.err_msg == 'get_brand_wcpay_request:ok') {
                alert('success');
              } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
                alert('cancel');
              } else {
                alert('fail');
                alert(res.err_msg);
              }
            });
          }
        });
        /* this.$router.push({
          path: '/patient/consult/payResultConsult'
        }) */
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
