<template>
  <div id="app" :class="app">
    <transition :name="transitionName" class="">
      <keep-alive :include="keepAlive">
        <router-view/>
      </keep-alive>
    </transition>
    <!-- <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition> -->
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
    computed:{
      keepAlive(){
        return this.$store.getters['route/getKeepAlives'];
      }
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
        if (this.$storage.getItem('Authorization') && this.$storage.getItem('user')) {
          this.$store.dispatch('login/login');
          if (this.$storage.getItem('user').type == 'patient') {
            this.$http.get('wx/auth/patient/patientInfo').then(data => {
              if (data.data) {
                this.$store.dispatch('login/setUserInfo', data.data);
              } else {
                this.$router.replace('/patient/fill-message');
              }
            });
          } else if (this.$storage.getItem('user').type == 'doctors') {
            this.$http.get('wx/auth/doctor/doctorInfo').then(data => {
              if (data.data) {
                this.$store.dispatch('login/setUserInfo', data.data);
              } else {}
            });
          }
        } else {
          this.$storage.removeItem('user');
        }
      }
    },
    watch: {
      // 使用watch 监听$router的变化
      $route(to, from) {
        this.$store.dispatch('loading/hide');
        this.$store.dispatch('route/setRoute', this.$route);
        this.$store.dispatch('route/setPushState', false);
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
    height: 100vh;
  }

  .slide-right-leave {
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }

  .slide-right-leave-to {
    transform: translate3d(100%, 0, 0);
    z-index: 99;
  }

  .slide-left-enter {
    transform: translate3d(100%, 0, 0);
    z-index: 99;
  }

  .slide-left-enter-to {
    transform: translate3d(0, 0, 0);
  }
</style>
