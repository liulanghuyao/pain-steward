<template>
  <div class="wrap">
    <mo-content :style="{padding:'0 16px'}">
      <ll-order></ll-order>
      <ll-order></ll-order>
      <ll-order></ll-order>
    </mo-content>
  </div>
</template>

<script>
  import llOrder from '@/components/llOrder'
  
  export default {
    components:{
      llOrder
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
