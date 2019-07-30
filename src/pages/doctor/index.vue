<template>
  <div class="wrap">
    <mo-content>
      <keep-alive>
        <router-view class="router-view-content" @setIndex="setIndex"></router-view>
      </keep-alive>
    </mo-content>
    <van-tabbar v-model="active" active-color="#0CD5A9" inactive-color="#98A0A0">
      <van-tabbar-item icon="chat" @click="goTo('/doctor')">咨询</van-tabbar-item>
      <van-tabbar-item icon="home-o" @click="goTo('/order/mineList')">订单</van-tabbar-item>
      <van-tabbar-item icon="manager" @click="goTo('/doctor/personal')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    created() {
      this.$store.dispatch('login/setLoginType', 'doctors');
    },
    methods: {
      setIndex(active) {
        this.active = active;
      },
      goTo(url) {
        this.$router.replace(url);
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .wrap {
    .router-view-content {
      padding-bottom: 50px;
    }
  }
</style>
