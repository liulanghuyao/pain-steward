<template>
  <div class="ll-img-show">
    <div class="ll-img-show-rect" v-for="(item, index) in list" :key="index">
      <img class="ll-img-show-img" :src="item" alt="" @click="showImg(index)">
    </div>
    <div class="ll-img-show-rect" v-if="upload-list.length>0" @click="show=true">
      <van-icon name="plus" class="ll-img-show-add c-gray" />
    </div>
    <van-popup v-model="show" v-if="upload-list.length>0" position="bottom" round :style="{ height: '85%' }">
      <div class="upload-box">
        <ll-box>
          <ll-tip circle>
            <div>注：该类型报告最多可上传{{upload-list.length}}张，您只需选择两次相关的报告即可</div>
          </ll-tip>
          <van-uploader class="upload" v-model="fileList" multiple="" :max-count="upload-list.length" />
        </ll-box>
        <div class="btn-box">
          <van-button type="primary" class="btn btn-block" @click="uploadFile()">上传</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {
    ImagePreview
  } from 'vant';
  import llTip from '@/components/llTip'

  export default {
    components: {
      llTip
    },
    props: {
      list: {
        type: Array,
        default: function() {
          return [];
        }
      },
      upload: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        show: false,
        fileList: []
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
      },
      uploadFile() {
        this.fileList.forEach((e, i) => {
          this.list.push(e.content);
        });
        this.fileList = [];
        this.show = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .ll-img-show {
    display: flex;
    flex-wrap: wrap;
    min-height: 70px;

    .ll-img-show-rect {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      margin: 0 18px 10px 0;
      overflow: hidden;
      background: #EDF9F7;
      border-radius: 6px;

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-last-child(1),
      &:nth-last-child(2),
      &:nth-last-child(3),
      &:nth-last-child(4) {
        margin-bottom: 0;
      }

      .ll-img-show-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }

      .ll-img-show-add {
        font-size: 22px;
      }
    }

    .upload-box {
      height: 100%;

      .van-uploader {
        margin-top: 16px;
      }

      .btn-box {
        margin: 48px 16px 28px;
      }
    }
  }
</style>
