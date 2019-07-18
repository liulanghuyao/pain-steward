<template>
  <div class="ll-box">
    <div class="ll-box-title clearfix" v-if="!$utils.isEmpty(title)">
      <span class="ll-box-text fl">{{title}}</span>
      <span class="ll-box-more fr c-gray" v-if="!$utils.isEmpty(moreLink)" @click="$router.push(moreLink)">更多
        <van-icon name="arrow" /></span>
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

    }
  }
</script>

<style scoped lang="scss">
  .ll-box {
    margin: 0 0 8px;
    padding: 16px;
    background: #fff;

    .ll-box-title {
      margin-bottom: 14px;
      line-height: 23px;

      .ll-box-text {
        font-size: 16px;
        vertical-align: center;
      }

      .ll-box-more {
        font-size: 13px;
      }
    }
  }
</style>
