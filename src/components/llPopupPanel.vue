<template>
  <transition :name="transitionName" v-if="show">
    <div class="ll-popup-panel">
      <mo-content>
        <slot></slot>
      </mo-content>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'llPopupPanel',
    data() {
      return {
        transitionName: '',
        show: false,
        noAnimal: false,
      }
    },
    created() {
      this.$utils.setState(['show'], this);
    },
    methods: {
      open() {
        this.show = true;
      },
    },
    watch: {
      show(newValue, oldValue) {
        if (!this.noAnimal) {
          this.transitionName = 'slide-top';
        } else {
          this.transitionName = '';
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .ll-popup-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .slide-top-enter-active,
  .slide-top-leave-active {
    transition-duration: 400ms;
    transition-property: transform;
    transition-timing-function: linear;
  }

  /*  .slide-right-enter {
    transform: translate3d(-100%, 0, 0);
  } */

  .slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
    z-index: 99;
  }

  .slide-top-enter {
    transform: translate3d(0, 100%, 0);
  }

  .slide-top-enter-to {
    transform: translate3d(0, 0, 0);
  }

  .slide-top-leave {
    transform: translate3d(0, 0, 0);
  }

  .slide-top-leave-to {
    transform: translate3d(0, 100%, 0);
  }
</style>
