<template>
  <div class="mo-content">
    <van-pull-refresh v-model="pullLoadingRe" @refresh="getList(true)" v-if="isList">
      <van-list v-model="upLoadingRe" :finished="finished" finished-text="没有更多了" @load="getList(false)">
        <slot></slot>
      </van-list>
    </van-pull-refresh>
    <div v-if="!isList" class="mo-content-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'moContent',
    props: {
      pullLoading: {
        type: Boolean,
        default: false
      },
      upLoading: {
        type: Boolean,
        default: false
      },
      finished: {
        type: Boolean,
        default: false
      },
      isList: {
        type: Boolean,
        default: false
      },
      noLogin: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    created() {},
    methods: {
      getList(refresh) {
        if (this.noLogin) {
          if (this.$store.getters['login/isLogin']) {
            this.$emit('getList', refresh);
          }
        } else {
          this.$emit('getList', refresh);
        }
      }
    },
    computed: {
      pullLoadingRe: {
        get() {
          return this.pullLoading;
        },
        set(val) {}
      },
      upLoadingRe: {
        get() {
          return this.upLoading;
        },
        set(val) {}
      },
    },
  }
</script>

<style lang="scss">
  .mo-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    background: #f5f5f5;

    &.white {
      background: #fff;
    }

    .van-pull-refresh {
      position: relative;
      min-height: 100%;

      .van-pull-refresh__track {
        height: 100%;
      }
    }

    .mo-content-center {
      padding: 0 0 20px;
    }
  }
</style>
