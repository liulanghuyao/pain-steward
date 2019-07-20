<template>
  <div class="ll-box border-b">
    <div class="ll-box-title clearfix" v-if="!$utils.isEmpty(title)">
      <span class="ll-box-text" :class="setClass(titleClass)">{{title}}</span>
      <span class="ll-box-right" :class="setClass(valueClass)" v-if="$utils.isEmpty(moreLink) && value">{{value}}</span>
      <span class="ll-box-more c-gray" v-if="!$utils.isEmpty(moreLink)" @click="$router.push(moreLink)">更多
        <van-icon name="arrow" />
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'llBox',
    props: {
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
      },
      moreLink: {
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
  .ll-box {
    margin: 0 0 8px;
    padding: 16px;
    background: #fff;
    overflow: hidden;

    .ll-box-title {
      display: flex;
      margin: 0 0 15px;
      line-height: 23px;

      .ll-box-text {
        flex: 1;
        font-size: 16px;
        vertical-align: center;
      }

      .ll-box-more {
        font-size: 13px;
      }
    }
  }
</style>
