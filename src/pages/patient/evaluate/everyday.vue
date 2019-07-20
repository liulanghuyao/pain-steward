<template>
  <div class="wrap">
    <mo-content>
      <ll-box class="padding-0">
        <ll-cell class="pd-lr" title="历史评估数据" value="请选择周期" valueClass="c-green" icon="down"></ll-cell>
      </ll-box>
      <ll-box title="疼痛VAS评分">
        <div class="show-box"></div>
      </ll-box>
      <ll-box title="爆发痛次数">
        <div class="show-box"></div>
      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="fill()">填写今日评估</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import llCell from '@/components/llCell.vue'

  export default {
    components: {
      llCell,
    },
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      fill() {
        this.$router.push('/patient/evaluate/today');
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .show-box {
      height: 192px;
      background: #EDF9F7;
      border: 1px solid #E8E8E8;
      border-radius: 6px;
    }

    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
