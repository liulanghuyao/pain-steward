<template>
  <div class="ll-text-box">
    <div class="ll-text-title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'llTextBox',
    props: {
      title: {
        type: String,
        default: ''
      },
    },
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
  .ll-text-box {
    padding: 24px 0 0 16px;
    background: #fff;

    .ll-text-title {
      margin-bottom: 12px;
      font-size: 16px;
    }
  }
</style>
