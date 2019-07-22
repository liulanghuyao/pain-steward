<template>
  <div id="app" :class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
    <ll-loading></ll-loading>
  </div>
</template>

<script>
  import back from './sdk/back.js';
  import update from './sdk/update.js';
  import getui from './sdk/getui.js';
  import llLoading from '@/components/loading.vue';

  export default {
    name: 'App',
    components: {
      llLoading
    },
    data() {
      return {
        transitionName: '',
        app: '',
      };
    },
    created() {
      this.setSdk();
      this.getUser();
      this.$store.dispatch('route/setRoute', this.$route);
    },
    methods: {
      setSdk() {
        if (window.plus) {
          this.app = 'mui';
          update.muiUpdate();
          back.muiBack(this);
        } else {
          document.addEventListener("plusready", () => {
            this.app = 'mui';
            update.muiUpdate();
            back.muiBack(this);
          }, false);
        }
      },
      getUser() {
        if (this.$storage.getItem('Authorization')) {
          this.$store.dispatch('login/login');
          let user = this.$storage.getItem('user');
          if (user) {
            this.$store.dispatch('login/setUser', user);
          } else {
            this.$router.push('/fill-message');
          }
        }
      }
    },
    watch: {
      // 使用watch 监听$router的变化
      $route(to, from) {
        this.$store.dispatch('loading/hide');
        this.$store.dispatch('route/setRoute', this.$route);
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
        let toRank = to.meta.rank || 0;
        let fromRank = from.meta.rank || 0;
        if (toRank >= fromRank) {
          // 设置动画名称
          this.transitionName = 'slide-left';
        } else {
          this.transitionName = 'slide-right';
        }
      },
    },
  }
</script>

<style lang="scss">
  @import "assets/css/reset.scss";
  @import "assets/css/public.scss";

  .van-nav-bar--fixed {
    z-index: 999 !important;
  }

  .container {
    padding: 10px 10px;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition-duration: 300ms;
    transition-property: transform;
    transition-timing-function: linear;
    position: fixed;
    width: 100vw;
    top: 0;
    bottom: 0;
  }

  /*  .slide-right-enter {
    transform: translate3d(-100%, 0, 0);
  } */

  .slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
    z-index: 99;
  }

  .slide-left-enter {
    transform: translate3d(100%, 0, 0);
  }

  /*  .slide-left-leave-active {
    transform: translate3d(-100%, 0, 0);
  } */
</style>
