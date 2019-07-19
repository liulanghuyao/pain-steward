<template>
  <div class="wrap">
    <mo-content>
      <ll-box class="pd-lr">
        <ll-cell title="历史评估数据" value="请选择周期" valueClass="c-green" icon="down"></ll-cell>
      </ll-box>
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

    }
  }
</script>

<style scoped lang="scss">
  .wrap {}
</style>
