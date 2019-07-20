<template>
  <div class="ll-cell">
    <div class="ll-cell-box border-b">
      <div class="ll-cell-title" :class="setClass(titleClass)">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="ll-cell-value ellipsis" :class="setClass(valueClass)">
        <slot name="value">{{value}}</slot>
      </div>
      <div class="ll-cell-icon c-gray" v-if="icon != null">
        <van-icon :name="!icon?'arrow':`arrow-${icon}`" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'llCell',
    props: {
      icon: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      titleClass: {
        type: String,
        default: ''
      },
      valueClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    created() {},
    methods: {

    },
    computed: {
      setClass(cls) {
        return function(cls) {
          let obj = {
            [cls]: true
          };
          return obj;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .ll-cell {
    background: #fff;

    &.pd-lr {
      padding: 0 16px;
    }

    &:last-child {
      .ll-cell-box {
        box-shadow: none;
      }
    }

    .ll-cell-box {
      display: flex;
      padding: 16px 0;

      .ll-cell-title,
      .ll-cell-value {
        height: 24px;
        line-height: 24px;
      }

      .ll-cell-title {
        margin-right: 15px;

        input {
          width: 100%;
          border: 0;
          text-align: left;
        }
      }

      .ll-cell-value {
        flex: 1;
        text-align: right;

        input {
          width: 100%;
          border: 0;
          text-align: right;
        }
      }

      .ll-cell-icon {
        display: flex;
        align-items: center;
        margin-left: 8px;
        font-size: 12px;
      }
    }
  }
</style>
