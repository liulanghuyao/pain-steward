<template>
  <div class="wrap">
    <mo-content :style="{padding:0}">
      <router-view class="content" @setIndex="setIndex"></router-view>
    </mo-content>
    <van-tabbar v-model="active" active-color="#0CD5A9" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="goTo('/patient/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="search" @click="goTo('/patient/home')">咨询</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="goTo('/patient/home')">我的</van-tabbar-item>
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
    .content {
      padding-bottom: 50px;
    }
  }
</style>
