<template>
  <div class="wrap">
    <van-swipe :autoplay="3000" indicator-color="white" :height="128">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <ll-box>
      <div class="rect-box">
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">疼痛咨询</div>
          <div class="msg c-gray">专家在线解答</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">每日评估</div>
          <div class="msg c-gray">疼痛状况记录</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">健康档案</div>
          <div class="msg c-gray">基本病史管理</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">我的报告</div>
          <div class="msg c-gray">检查报告管理</div>
        </div>
      </div>
    </ll-box>
    <ll-box>
      <div class="rect-box long">
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">疼痛咨询</div>
          <div class="msg c-gray">专家在线解答</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">每日评估</div>
          <div class="msg c-gray">疼痛状况记录</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">健康档案</div>
          <div class="msg c-gray">基本病史管理</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">我的报告</div>
          <div class="msg c-gray">检查报告管理</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">我的报告</div>
          <div class="msg c-gray">检查报告管理</div>
        </div>
        <div class="rect">
          <img src="@/assets/img/timg.gif" alt="">
          <div class="title">我的报告</div>
          <div class="msg c-gray">检查报告管理</div>
        </div>
      </div>
    </ll-box>
  </div>
</template>

<script>
  import llBox from '@/components/llBox'

  export default {
    components: {
      llBox
    },
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
  .wrap {
    .lunbo {
      height: 128px;
    }

    .rect-box {
      display: flex;

      .rect {
        flex: 1;
        text-align: center;

        img {
          width: 44px;
          height: 44px;
          vertical-align: top;
        }

        .title {
          margin: 8px 0 4px;
          font-size: 13px;
        }

        .msg {
          font-size: 11px;
        }
      }

      &.long {
        img {
          width: 68px;
          height: 90px;
        }
      }
    }
  }
</style>
