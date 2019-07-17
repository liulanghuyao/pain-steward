<template>
  <div class="ll-tip">
    <div class="ll-tip-circle" :style="{'background':circleColor}" v-if="circle!=null"></div>
    <div class="ll-tip-msg c-gray">{{msg}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      },
      circle: {
        type: String,
        default: null
      },
      circleColor: {
        type: String,
        default: '#FD983A'
      }
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
  .ll-tip {
    display: flex;
    align-items: flex-start;

    .ll-tip-circle {
      float: left;
      width: 17px;
      height: 17px;
      margin-right: 8px;
      border-radius: 50%;
    }

    .ll-tip-msg {
      flex: 1;
      font-size: 13px;
      line-height: 1.6;
    }
  }
</style>
