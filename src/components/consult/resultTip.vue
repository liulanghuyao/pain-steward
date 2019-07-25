<template>
  <div class="result-tip" :class="colorClass">
    <div class="circle"></div>
    <div class="detail">
      <div class="title-time clearfix">
        <div class="title fl">{{statusText[order.orderStatus]}}</div>
        <div class="time fr">{{order.payTime || order.createdTime}}</div>
      </div>
      <div class="msg" v-if="order.orderStatus==1||order.orderStatus==3">您可以先发送您想咨询的问题给医生
        ，医生将会在24小时内回复您的咨询</div>
      <div class="msg" v-if="order.orderStatus==2">您支付的金额已自动原路返回到您的支付账户。</div>
      <div class="msg" v-if="order.orderStatus==4">您已完成了本次的咨询服务。</div>
      <div class="msg" v-if="order.orderStatus==5">您申请了主动退款，您支付的金额已返回您的账户。</div>
      <div class="msg" v-if="order.orderStatus==6">您申请的主动退款失败。</div>
      <div class="msg" v-if="order.orderStatus==7">因医生未在24小时内回复您，系统已自动退回该笔交易金额。请重新选择医生咨询。</div>
      <div class="msg" v-if="order.orderStatus==8">自动退款失败，请及时联系客服。</div>
      <div class="msg" v-if="order.orderStatus==9">医生已接受您的咨询，开始您的咨询。</div>
      <div class="msg" v-if="order.orderStatus==10">未及时支付，您的订单已经关闭。</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      order: {
        type: Object,
        default: function() {
          return {};
        }
      },
    },
    data() {
      return {
        colorClass: {
          'b-orange': this.order.orderStatus == 2 || this.order.orderStatus == 6 || this.order.orderStatus == 8 || this
            .order.orderStatus == 10,
          'b-blue': this.order.orderStatus == 4 || this.order.orderStatus == 5 || this.order.orderStatus == 7,
        },
        statusText: ['待支付', '缴费成功', '缴费失败,已退款', '服务中', '服务结束', '主动退款', '主动退款失败', '自动退款', '自动退款失败', '医生应答', '关闭']
      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .result-tip {
    display: flex;
    align-items: flex-start;
    padding: 16px;
    background: #0CD5A9;
    color: #fff;

    .circle {
      width: 30px;
      height: 30px;
      margin-right: 12px;
      background: #fff;
      border-radius: 50%;
    }

    .detail {
      flex: 1;

      .title-time {
        margin-bottom: 14px;
        line-height: 28px;

        .title {
          font-size: 19px;
        }

        .time {
          font-size: 13px;
        }
      }

      .msg {
        font-size: 14px;
      }
    }
  }
</style>
