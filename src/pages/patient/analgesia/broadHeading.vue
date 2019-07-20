<template>
  <div class="wrap">
    <mo-content>
      <ll-box title="微创镇痛技术" titleClass="t-a-c">
        <div class="text c-gray">对于部分难治性疼痛患者，由于镇痛药物效果不佳或难以耐受严重的药物副反应，可以及时选择相应的微创外科或神经介入镇痛技术直接高效的阻断疼痛信号的传导，从而到达长期良好的镇痛目的。</div>
      </ll-box>
      <ll-box class="box-rect padding-0" @click.native="$router.push('/patient/analgesia/explainDetail')">
        <ll-cell class="pd-lr" title="自控镇痛技术" titleClass="c-green" icon></ll-cell>
      </ll-box>
      <ll-box class="box-rect padding-0" @click.native="$router.push('/patient/analgesia/explainDetail')">
        <ll-cell class="pd-lr" title="中枢吗啡泵镇痛技术" titleClass="c-green" icon></ll-cell>
      </ll-box>
      <ll-box class="box-rect padding-0" @click.native="$router.push('/patient/analgesia/explainDetail')">
        <ll-cell class="pd-lr" title="神经毁损镇痛技术" titleClass="c-green" icon></ll-cell>
      </ll-box>
      <ll-box class="box-rect padding-0" @click.native="$router.push('/patient/analgesia/explainDetail')">
        <ll-cell class="pd-lr" title="骨水泥椎体成形术" titleClass="c-green" icon></ll-cell>
      </ll-box>
    </mo-content>
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
  .wrap {
    .text {
      padding: 0 16px;
      line-height: 25px;
    }

    .box-rect {
      margin: 0 16px 8px;
      border-radius: 6px;
    }
  }
</style>
