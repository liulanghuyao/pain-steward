<template>
  <div class="ll-drag">
    <div class="ll-drag-content clearfix">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .ll-drag {
    margin: 0 -16px;
    padding: 0 16px;
    overflow-y: hidden;
    overflow-x: auto;

    .ll-drag-content {
      display: flex;
      white-space: nowrap;
    }
  }
</style>
