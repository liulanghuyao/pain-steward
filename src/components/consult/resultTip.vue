<template>
  <div class="result-tip">
    <div class="circle"></div>
    <div class="detail">
      <div class="title-time clearfix">
        <div class="title fl">缴费成功</div>
        <div class="time fr">2019-04-23 12:33</div>
      </div>
      <div class="msg">您可以先发送您想咨询的问题给医生 ，医生将会在24小时内回复您的咨询</div>
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
          font-size: 20px;
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
