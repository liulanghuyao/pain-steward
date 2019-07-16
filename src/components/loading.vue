<template>
  <div class="loading-screen" v-show="visiable">

  </div>
</template>

<script>
  export default {
    name: 'll-loading',
    data() {
      return {}
    },
    computed: {
      visiable() {
        return this.$store.getters['loading/isLoading'];
      }
    }
  }
</script>

<style lang="scss">
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.3);

    &:before {
      content: '';
      width: 120px;
      height: 120px;
      margin-top: -70px;
      background: url('~@/assets/img/timg.gif') no-repeat center center/cover;
    }
  }
</style>
