<template>
  <div class="wrap">
    <mo-content class="mo-content">
      <order-card></order-card>
      <order-card></order-card>
      <order-card></order-card>
      <order-card></order-card>
    </mo-content>
  </div>
</template>

<script>
  import orderCard from '@/components/order/orderCard'

  export default {
    components: {
      orderCard
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
    .mo-content {
      padding: 0 16px;
    }
  }
</style>
