<template>
  <div class="ll-order">
    <div class="ll-order-header c-gray border-b clearfix">
      <span class="fl ll-order-time">2019-06-19 12:23:05</span>
      <span class="fr ll-order-status">图文咨询</span>
    </div>
    <div class="ll-order-center">
      <img src="@/assets/img/doctor.png" alt="">
      <div class="ll-order-detail">
        <div class="ll-order-name">唐易迅</div>
        <div class="ll-order-duty c-gray">主任医生</div>
        <div class="ll-order-hospital c-gray">中南大学湘雅二医院 疼痛专科</div>
      </div>
    </div>
    <div class="ll-order-footer border-t clearfix">
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
  .ll-order {
    margin: 8px 0;
    padding: 0 16px;
    background: #fff;
    border-radius: 6px;

    .ll-order-header {
      padding: 14px 0;
      line-height: 22px;

      .ll-order-time {
        font-size: 13px;
      }

      .ll-order-status {
        font-size: 15px;
      }
    }

    .ll-order-center {
      padding: 16px 0;

      img {
        float: left;
        width: 60px;
        height: 79px;
        margin-right: 16px;
        vertical-align: top;
        border-radius: 6px;
      }

      .ll-order-detail {
        font-size: 15px;

        .ll-order-name {
          font-size: 16px;
        }

        .ll-order-duty {
          margin: 7px 0;
        }
      }
    }

    .ll-order-footer {
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
