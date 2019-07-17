<template>
  <div class="wrap">
    <mo-content>
      <van-tabs v-model="active" title-active-color="#0CD5A9" title-inactive-color="#0F1F3A" color="#0CD5A9">
        <van-tab title="图文咨询">
          <div class="content">
            <ll-order @click.native="$router.push('/patient/consult/imageText')"></ll-order>
          </div>
        </van-tab>
        <van-tab title="电话咨询">
          <div class="content">
            <ll-order></ll-order>
            <ll-order></ll-order>
          </div>
        </van-tab>
      </van-tabs>
    </mo-content>
  </div>
</template>

<script>
  import llOrder from '@/components/llOrder'

  export default {
    components: {
      llOrder
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
