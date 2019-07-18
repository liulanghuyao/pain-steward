<template>
  <div class="ll-img-show">
    <div class="ll-img-show-rect" v-for="(item, index) in list" :key="index">
      <img class="ll-img-show-img" :src="item" alt="" @click="showImg(index)">
    </div>
  </div>
</template>

<script>
  import {
    ImagePreview
  } from 'vant';
  
  export default {
    props: {
      list: {
        type: Array,
        default: function() {
          return [];
        }
      },
    },
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      showImg(index) {
        ImagePreview({
          images: this.list,
          startPosition: index,
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .ll-img-show {
    display: flex;
    flex-wrap: wrap;

    .ll-img-show-rect {
      width: 75px;
      height: 75px;
      margin: 5px;
      overflow: hidden;

      .ll-img-show-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
</style>
