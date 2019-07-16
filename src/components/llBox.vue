<template>
  <div class="ll-box">
    <div class="title"></div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
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
  .ll-box {
    margin-bottom: 8px;
    padding: 16px;
    background: #fff;
    
    .title {
      
    }
  }
</style>
