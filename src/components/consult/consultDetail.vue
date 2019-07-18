<template>
  <div class="consult-detail">
    <ll-box title="咨询信息" :style="{'padding-bottom':0}">
      <ll-cell title="咨询用户" titleClass="c-gray" value="张三丰"></ll-cell>
      <ll-cell title="咨询医生" titleClass="c-gray" value="王五"></ll-cell>
      <ll-cell title="问诊方式" titleClass="c-gray" valueClass="c-orange" value="电话咨询"></ll-cell>
      <ll-cell title="接诊时间" titleClass="c-gray" value="医生24小时内回复"></ll-cell>
    </ll-box>
    <ll-box title="病情描述">
      <div class="c-gray">请您详细提交需解决的关键问题，简要提供相关病史资料及主要检查结果，以便医生更加准确分析您的病情。</div>
    </ll-box>
    <ll-box title="病情图片">
    </ll-box>
    <ll-box title="联系电话">
      <div class="c-orange">15874940105</div>
    </ll-box>
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

    }
  }
</script>

<style scoped lang="scss">
  .consult-detail {}
</style>
