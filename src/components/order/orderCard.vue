<template>
  <div class="order-card">
    <div class="order-card-header c-gray border-b clearfix">
      <span class="fl order-card-time">{{order.createdTime}}</span>
      <span class="fr order-card-status" v-if="type==1">{{order.serviceType == 'image'?'图文咨询':'电话咨询'}}</span>
      <span class="fr order-card-status" :class="statusClass" v-if="type==2">{{statusText1[order.orderStatus]}}</span>
    </div>
    <div class="order-card-center">
      <img src="@/assets/img/doctor.png" alt="">
      <div class="order-card-detail">
        <div class="order-card-name">{{order.doctorName}}</div>
        <div class="order-card-duty c-gray">{{order.doctorJobTitle}}</div>
        <div class="order-card-hospital c-gray">{{order.doctorHospital}} 疼痛专科</div>
      </div>
    </div>
    <div class="order-card-footer border-t clearfix" :class="statusClass" v-if="type==1">
      <span class="fl">{{statusText[order.orderStatus]}}</span>
      <span class="fr">￥{{order.payMoney}}</span>
    </div>
    <div class="order-card-footer border-t clearfix" :class="statusClass" v-if="type==2 && order.serviceType=='phone'">
      <ll-tip circle msg="医生将在24小时内回电，请保持手机畅通"></ll-tip>
    </div>
  </div>
</template>

<script>
  import llTip from '@/components/llTip.vue'
  export default {
    components: {
      llTip
    },
    props: {
      order: {
        type: Object,
        default: function() {
          return {};
        }
      },
      type: {
        type: Number,
        default: 1
      },
    },
    data() {
      return {
        statusClass: {
          'c-orange': this.order.orderStatus == 0 || this.order.orderStatus == 2 || this.order.orderStatus == 6 || this
            .order.orderStatus == 8 || this.order.orderStatus == 10,
          'c-green': this.order.orderStatus == 1 || this.order.orderStatus == 3 || this.order.orderStatus == 9,
          'c-blue': this.order.orderStatus == 4 || this.order.orderStatus == 5 || this.order.orderStatus == 7,
        },
        statusText: ['待支付', '已支付', '支付失败', '服务中', '服务结束', '主动退款', '主动退款失败', '自动退款', '自动退款失败', '医生应答', '关闭'],
        statusText1: ['待支付', '待咨询', '支付失败', '服务中', '已结束', '已退款', '退款失败', '已退款', '退款失败', '服务中', '已关闭']
      }
    },
    created() {

    },
    methods: {

    },
    computed: {},
  }
</script>

<style scoped lang="scss">
  .order-card {
    margin: 8px 0;
    padding: 0 16px;
    background: #fff;
    border-radius: 6px;

    .order-card-header {
      padding: 14px 0;
      line-height: 22px;

      .order-card-time {
        font-size: 13px;
      }

      .order-card-status {
        font-size: 15px;
      }
    }

    .order-card-center {
      padding: 16px 0;

      img {
        float: left;
        width: 60px;
        height: 79px;
        margin-right: 16px;
        vertical-align: top;
        border-radius: 6px;
      }

      .order-card-detail {
        font-size: 15px;

        .order-card-name {
          font-size: 16px;
        }

        .order-card-duty {
          margin: 7px 0;
        }
      }
    }

    .order-card-footer {
      padding: 11px 0;
      line-height: 22px;

      .fl {
        font-size: 16px;
      }

      .fr {
        font-size: 15px;
      }
    }
  }
</style>
