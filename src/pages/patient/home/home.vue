<template>
  <div class="wrap">
    <van-swipe :autoplay="3000" indicator-color="#1BD286">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <ll-box>
      <div class="rect-box">
        <div class="rect" @click="$router.push('/patient/doctor/doctorList');">
          <img src="@/assets/img/people.png" alt="">
          <div class="title">疼痛咨询</div>
          <div class="msg c-gray">专家在线解答</div>
        </div>
        <div class="rect" @click="$router.push('/patient/evaluate/everyday')">
          <img src="@/assets/img/people.png" alt="">
          <div class="title">每日评估</div>
          <div class="msg c-gray">疼痛状况记录</div>
        </div>
        <div class="rect" @click="$router.push('/patient/archives/healthy')">
          <img src="@/assets/img/people.png" alt="">
          <div class="title">健康档案</div>
          <div class="msg c-gray">基本病史管理</div>
        </div>
        <div class="rect" @click="$router.push('/patient/report/mineList')">
          <img src="@/assets/img/people.png" alt="">
          <div class="title">我的报告</div>
          <div class="msg c-gray">检查报告管理</div>
        </div>
      </div>
    </ll-box>
    <ll-box title="专家团队" moreLink="/patient/doctor/doctorList">
      <ll-drag>
        <div class="doctor" v-for="(doc, index) in doctors" :key="index" @click="$router.push({path:'/patient/doctor/doctorDetail',query:{id:doc.userUuid}})">
          <img src="@/assets/img/doctor.png" alt="">
          <div class="title">{{doc.doctorName}}</div>
          <div class="msg c-gray">{{doc.hospital}}</div>
        </div>
      </ll-drag>
    </ll-box>
    <ll-box>
      <div class="adver">
        <div class="adver-msg">
          <div class="title">微创镇痛技术</div>
          <div class="msg">难治性疼痛的最新手术方案</div>
        </div>
        <div class="span-btn-box">
          <span class="span-btn" @click="$router.push('/patient/analgesia/broadHeading')">去了解</span>
        </div>
      </div>
    </ll-box>
    <ll-box title="疼痛治疗科普" moreLink="/patient/doctor/doctorList" :style="{'padding-bottom':0}">
      <div class="img-text border-b" v-for="item in news" :key="item.id">
        <div class="img">
          <img src="@/assets/img/hand.png" alt="">
        </div>
        <div class="text">
          <div class="title ellipsis">{{item.title}}</div>
          <div class="msg ellipsis-2 c-gray">{{$utils.removeHtml(item.content)}}</div>
        </div>
      </div>
    </ll-box>
  </div>
</template>

<script>
  import llDrag from '@/components/llDrag'

  export default {
    components: {
      llDrag
    },
    data() {
      return {
        doctors: [],
        news: []
      }
    },
    activated() {
      this.$emit('setIndex', 0);
    },
    created() {
      this.getDoctors();
      this.getNews();
    },
    methods: {
      getDoctors() {
        this.$http.get('/wx/index/queryFamousDoctors').then(data => {
          this.doctors = data.data;
        })
      },
      getNews() {
        this.$http.get('/wx/index/queryNews', {
          offset: 0,
          limit: 3
        }).then(data => {
          this.news = data.data.slice(0, 3);
        })
      }
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
    }

    .doctor {
      width: 68px;
      margin-right: 16px;
      text-align: center;

      img {
        width: 68px;
        height: 90px;
        vertical-align: top;
        border-radius: 6px;
      }

      .title {
        margin: 6px 0 2px;
        font-size: 13px;
      }

      .msg {
        font-size: 11px;
      }
    }

    .adver {
      display: flex;

      .adver-msg {
        flex: 1;

        .title {
          margin-bottom: 6px;
          font-size: 17px;
          color: #0CD5A9;
        }

        .msg {
          font-size: 13px;
          color: #98A0A0;
        }
      }

      .span-btn-box {
        display: flex;
        align-items: center;

        .span-btn {
          display: inline-block;
          padding: 2px 11px;
          background: #0CD5A9;
          color: #fff;
          font-size: 13px;
          border-radius: 12px;
          border-radius: 12px;
        }
      }
    }

    .img-text {
      padding: 12px 0;

      &:last-child {
        box-shadow: none;
      }

      .img {
        float: left;
        width: 88px;
        height: 68px;
        margin-right: 16px;
        overflow: hidden;
        border-radius: 6px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .text {
        .title {
          margin-bottom: 6px;
          font-size: 16px;
        }

        .msg {
          height: 40px;
          font-size: 13px;
          letter-spacing: 1px;
          line-height: 20px;
        }
      }
    }
  }
</style>
