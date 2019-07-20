<template>
  <div class="wrap">
    <van-tabs v-model="active" title-active-color="#0CD5A9" title-inactive-color="#0F1F3A" color="#0CD5A9">
      <van-tab title="图文咨询">
        <div class="content">
          <order-card @click.native="$router.push('/patient/consult/imageText')"></order-card>
        </div>
      </van-tab>
      <van-tab title="电话咨询">
        <div class="content">
          <order-card></order-card>
          <order-card></order-card>
          <order-card></order-card>
        </div>
      </van-tab>
    </van-tabs>
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
        active: 0
      }
    },
    activated() {
      this.$emit('setIndex', 1);
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .content {
      margin: 0 16px;
    }
  }
</style>
