<template>
  <div class="cell-box">
    <div class="cell">
      <div class="title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="value">
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
  .cell-box {
    padding: 0 16px;
    background: #fff;

    .cell {
      display: flex;
      box-shadow: inset 0 -1px 0 0 #E8E8E8;

      .title,
      .value {
        height: 24px;
        padding: 16px 0;
        line-height: 24px;
        font-size: 15px;
      }

      .title {
        margin-right: 15px;
      }

      .value {
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
