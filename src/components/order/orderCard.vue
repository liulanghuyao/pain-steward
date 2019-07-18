<template>
  <div class="order-card">
    <div class="order-card-header c-gray border-b clearfix">
      <span class="fl order-card-time">2019-06-19 12:23:05</span>
      <span class="fr order-card-status">图文咨询</span>
    </div>
    <div class="order-card-center">
      <img src="@/assets/img/doctor.png" alt="">
      <div class="order-card-detail">
        <div class="order-card-name">唐易迅</div>
        <div class="order-card-duty c-gray">主任医生</div>
        <div class="order-card-hospital c-gray">中南大学湘雅二医院 疼痛专科</div>
      </div>
    </div>
    <div class="order-card-footer border-t clearfix">
      <span class="fl c-green">缴费成功</span>
      <span class="fr c-orange">￥50</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
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
