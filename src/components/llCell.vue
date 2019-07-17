<template>
  <div class="ll-cell">
    <div class="ll-cell-box">
      <div class="ll-cell-title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="ll-cell-value">
        <slot name="value"></slot>
      </div>
    </div>
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
  .ll-cell {
    padding: 0 16px;
    background: #fff;

    .ll-cell-box {
      display: flex;
      box-shadow: inset 0 -1px 0 0 #E8E8E8;

      .ll-cell-title,
      .ll-cell-value {
        height: 24px;
        padding: 16px 0;
        line-height: 24px;
        font-size: 15px;
      }

      .ll-cell-title {
        margin-right: 15px;
      }

      .ll-cell-value {
        flex: 1;

        input {
          width: 100%;
          border: 0;
          text-align: right;
        }
      }
    }
  }
</style>
