<template>
  <div class="order-card">
    <div class="order-card-header c-gray border-b clearfix">
      <span class="fl order-card-time">{{order.createdTime}}</span>
      <span class="fr order-card-status">{{order.serviceType == 'image'?'图文咨询':'电话咨询'}}</span>
    </div>
    <div class="order-card-center">
      <img src="@/assets/img/doctor.png" alt="">
      <div class="order-card-detail">
        <div class="order-card-name">{{order.doctorName}}</div>
        <div class="order-card-duty c-gray">{{order.doctorJobTitle}}</div>
        <div class="order-card-hospital c-gray">{{order.doctorHospital}} 疼痛专科</div>
      </div>
    </div>
    <div class="order-card-footer border-t clearfix" :class="statusClass">
      <span class="fl">{{statusText[order.orderStatus]}}</span>
      <span class="fr">￥{{order.payMoney}}</span>
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
        statusClass: {
          'c-orange': this.order.orderStatus == 0 || this.order.orderStatus == 4 || this.order.orderStatus == 6,
          'c-green': this.order.orderStatus == 1 || this.order.orderStatus == 2 || this.order.orderStatus == 3,
          'c-red': this.order.orderStatus == 5,
        },
        statusText: ['待支付', '已支付', '服务中', '服务结束', '支付失败', '自动结束', '取消']
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
