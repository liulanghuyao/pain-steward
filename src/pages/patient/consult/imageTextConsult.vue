<template>
  <div class="wrap">
    <mo-content class="mo-content" @click.native="closeFileBox()">
      <ll-box :style="{'border-radius':'6px'}">
        <ll-tip msg="您可以先发出想咨询的问题，医生将会在24小时内回复您的咨询。若医生未在24小时内回复，系统将自动关闭本次咨询并自动为您退款。"></ll-tip>
      </ll-box>
      <div class="time">6月18 18:12:33</div>
      <div class="msg-box" :class="{left:item.createdType=='doctor'}" v-for="(item, index) in msgs" :key="index">
        <div class="head"></div>
        <div class="box clearfix">
          <span class="text" v-if="item.type=='text'">{{item.advisoryContent}}</span>
          <img class="img" :src="$http.baseUrl+item.advisoryContent" v-if="item.type=='image'" @click="openImg(item.imgIndex)">
        </div>
      </div>
      <div id="bottom"></div>
    </mo-content>
    <div class="input-file-box border-t">
      <div class="input-box">
        <input type="text" v-model="text" class="text-input">
        <span class="add-btn" v-if="showBtn" @click="showFileBox=true">
          <van-icon name="plus" />
        </span>
        <span class="send-btn" v-if="!showBtn" @click="sendImgText()">发送</span>
      </div>
      <div class="file-box" v-if="showFileBox">
        <van-uploader class="upload" v-model="fileList" :max-count="1" />
      </div>
    </div>
  </div>
</template>

<script>
  import llTip from '@/components/llTip.vue'
  import {
    ImagePreview
  } from 'vant';

  export default {
    components: {
      llTip
    },
    data() {
      return {
        text: '',
        imgs: [],
        msgs: [],
        showFileBox: false,
        fileList: [],
        room: {},
        pages: {
          offset: 0,
          limit: 10,
          roomUuid: this.$route.query.id
        }
      }
    },
    created() {
      this.createChat();
      this.getOldMsg();
      this.getNewMsg();
      this.goToBottom();
      this.$utils.setState(['showFileBox'], this);
    },
    methods: {
      createChat() {
        this.$http.put(`wx/auth/advisoryRoom/startAdvisoryRoom/${this.$route.query.id}`).then(data => {
          if (data.data) {
            this.room = data.data;
          }
        })
      },
      sendImgText() {
        let dataForm = new FormData();
        dataForm.append('advisoryContent', this.text);
        dataForm.append('roomUuid', this.room.orderUuid);
        this.fileList.forEach((e, i) => {
          dataForm.append('files', e.file);
        })
        this.$http.postForm('wx/auth/advisoryRoom/chat', dataForm);
        if (this.text) {
          this.msgs.push({
            type: 1,
            who: 1,
            text: this.text,
          });
          this.text = '';
        } else if (this.fileList.length) {
          this.msgs.push({
            type: 2,
            who: 1,
            img: this.fileList[0].content,
          });
        }
        this.closeFileBox();
        this.goToBottom();
      },
      openImg(index) {
        ImagePreview({
          images: this.imgs,
          startPosition: index,
        });
      },
      goToBottom() {
        this.$nextTick(() => {
          document.getElementById('bottom').scrollIntoView();
        })
      },
      getOldMsg() {
        this.$http.get('wx/auth/advisoryRoom/chatContents', this.pages).then(data => {
          if (data.rows) {
            this.msgs = [...this.msgs, ...data.rows];
          }
        });
      },
      getNewMsg() {
        this.interval = setInterval(() => {
          //this.getOldMsg();
        }, 3000)
      },
      closeFileBox() {
        this.showFileBox = false;
        this.fileList = [];
      }
    },
    computed: {
      showBtn() {
        return this.$utils.isEmpty(this.text) && !this.fileList.length;
      },
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    watch: {
      msgs(newValue, oldValue) {
        this.imgs = [];
        let imgIndex = 0;
        this.msgs.forEach((e, i) => {
          if (e.type == 'image') {
            e.imgIndex = imgIndex;
            this.imgs.push(this.$http.baseUrl + e.advisoryContent);
            imgIndex++;
          }
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .wrap {
    .mo-content {
      padding: 16px 16px 60px;
    }

    .time {
      width: 120px;
      margin: 16px auto;
      padding: 2px 8px;
      background: #fff;
      font-size: 13px;
      text-align: center;
      border-radius: 6px;
    }

    .msg-box {
      position: relative;
      margin: 16px 0 24px;
      padding: 0 63px;

      .head {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 40px;
        background: #D8D8D8;
        border-radius: 6px;
      }

      .text {
        float: right;
        padding: 8px;
        background: #0CD5A9;
        border-radius: 6px;
        color: #fff;
        font-size: 14px;
        line-height: 21px;
      }

      img {
        float: right;
        max-width: 100%;
        height: 110px;
        border-radius: 6px;
      }

      &.left {
        .head {
          left: 0;
        }

        .text {
          float: left;
          background: #fff;
          color: #0F1F3A;
        }

        .img {
          float: left;
        }
      }
    }

    .input-file-box {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      padding: 8px;
      background: #f5f5f5;

      .input-box {
        display: flex;
        align-items: center;

        .text-input {
          flex: 1;
          height: 40px;
          padding: 0 8px;
          border: 0;
        }

        .add-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 29px;
          height: 29px;
          margin: 0 5px 0 13px;
          border: 2px solid #0F1F3A;
          font-size: 22px;
          border-radius: 50%;
        }

        .send-btn {
          width: 60px;
          height: 40px;
          margin: 0 5px 0 13px;
          background: #0CD5A9;
          color: #fff;
          line-height: 40px;
          text-align: center;
          border-radius: 6px;
        }
      }

      .file-box {
        margin: 13px 0 5px;
      }
    }
  }
</style>
