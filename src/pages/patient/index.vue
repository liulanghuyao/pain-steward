<template>
  <div class="wrap">
    <mo-content>
      <router-view class="content" @setIndex="setIndex"></router-view>
    </mo-content>
    <van-tabbar v-model="active" active-color="#0CD5A9" inactive-color="#000">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">咨询</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
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
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .wrap {
    .content{
      padding-bottom: 50px;
    }
  }
</style>
