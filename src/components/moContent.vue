<template>
  <div class="mo-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'moContent',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .mo-content {
    position: relative;
    padding-top: 46px;

    &.all-screen {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      background-color: #fff;
    }

    &.bg {
      background-color: #f5f5f5;
    }
  }
</style>
