<template>
  <div class="wrap">
    <mo-content>
      <ll-box>
        <doctor-header></doctor-header>
      </ll-box>
      <van-tabs v-model="active" title-active-color="#0CD5A9" title-inactive-color="#0F1F3A" color="#0CD5A9">
        <van-tab title="服务">
          <ll-box class="padding-0">
            <div class="serve border-b">
              <div class="circle bg-blue"></div>
              <div class="detail">
                <div class="top">
                  <span class="name">图文咨询</span>
                  <span class="c-orange">￥50/次</span>
                </div>
                <div class="bottom c-gray">使用图文、语音与医生沟通</div>
              </div>
              <van-button type="primary" class="btn" @click="$router.push('/patient/consult/buyConsult')">去问诊</van-button>
            </div>
            <div class="serve">
              <div class="circle bg-blue"></div>
              <div class="detail">
                <div class="top">
                  <span class="name">电话咨询</span>
                  <span class="c-orange">￥50/次</span>
                </div>
                <div class="bottom c-gray">快速问诊，下单后24小时内医生回电</div>
              </div>
              <van-button type="primary" class="btn" @click="$router.push('/patient/consult/buyConsult')">去问诊</van-button>
            </div>
          </ll-box>
          <ll-text-box title="患者评价">
            <div class="evaluate" :class="{'border-b':index<evaluates.length-1}" v-for="(item, index) in evaluates"
              :key="index">
              <div class="top c-gray">
                <span>名称名称</span>
                <span class="fr time">2019-08-29</span>
              </div>
              <div class="bottom">医生很好很棒，超级赞！</div>
            </div>
          </ll-text-box>
        </van-tab>
        <van-tab title="介绍">
          <ll-box class="mb-0 border-b" title="专业特长">
            <div class="c-gray">脊髓炎、帕金森、头痛、头晕、多发性硬化</div>
          </ll-box>
          <ll-box class="mb-0 border-b" title="职业简介">
            <div class="c-gray">医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</div>
          </ll-box>
          <ll-box class="mb-0 border-b" title="主要学术成就">
            <div class="c-gray">主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就主要学术成就</div>
          </ll-box>
          <ll-box class="mb-0" title="掌握微创镇痛技术">
            <div class="c-gray">长沙市十大杰出青年医生]长沙市十大杰出青年医生长沙市十大杰出青年医生............</div>
          </ll-box>
        </van-tab>
      </van-tabs>
    </mo-content>
  </div>
</template>

<script>
  import doctorHeader from '@/components/doctor/doctorHeader'
  import llTextBox from '@/components/llTextBox'

  export default {
    components: {
      doctorHeader,
      llTextBox
    },
    data() {
      return {
        active: 0,
        evaluates: [{}, {}, {}, {}]
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
    .serve {
      display: flex;
      align-items: center;
      padding: 32px 16px;
      background: #fff;

      .circle {
        width: 32px;
        height: 32px;
        margin: 0 16px;
        border-radius: 50%;
      }

      .detail {
        flex: 1;
        margin-right: 16px;

        .top {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 23px;

          .name {
            margin-right: 16px;
          }
        }

        .bottom {
          font-size: 15px;
          line-height: 19px;
        }
      }
    }

    .evaluate {
      padding: 16px 16px 16px 0;
      line-height: 19px;

      .top {
        margin-bottom: 8px;

        .time {
          font-size: 13px;
        }
      }

      .bottom {
        font-size: 15px;
      }
    }

    .mb-0 {
      margin-bottom: 0;
    }
  }
</style>
