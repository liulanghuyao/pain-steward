<template>
  <div class="mo-content" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'moContent',
    props: {
      style: {
        type: Object,
        default: function() {
          return {};
        }
      },
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .mo-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 25px;
    overflow: auto;

    &.white {
      background: #fff;
    }
  }
</style>
