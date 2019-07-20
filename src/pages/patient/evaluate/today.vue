<template>
  <div class="wrap">
    <mo-content>
      <ll-box title="疼痛VAS评分" value="无痛" valueClass="c-green"></ll-box>
      <ll-box title="24小时内爆发疼痛次数">
        <div class="time-box">
          <input type="number" class="time-input" placeholder="请填写">
          <span class="unit">次</span>
        </div>
      </ll-box>
      <ll-box title="睡眠质量">
        <van-radio-group v-model="dataForm.quality">
          <van-radio name="1" checked-color="#07c160">优</van-radio>
          <van-radio name="2" checked-color="#07c160">良</van-radio>
          <van-radio name="3" checked-color="#07c160">差</van-radio>
        </van-radio-group>
      </ll-box>
      <ll-box title="心情状态（单选）">
        <div class="face-list">
          <div class="face" :class="{'c-green':dataForm.face===index}" v-for="(item, index) in faceList" :key="index"
            @click="chooseFace(index)">
            <span class="face-img"></span>
            <span class="text">{{item.text}}</span>
          </div>
        </div>
      </ll-box>
      <ll-box title="药物副反应（可多选）">
        <div class="rect-list">
          <div class="rect" v-for="(item, index) in rectList" :key="index">
            <div class="rect-box" :class="{'select':dataForm.rect.indexOf(index)!=-1}" v-if="item" @click="chooseRect(index)">{{item}}</div>
          </div>
        </div>
      </ll-box>
      <ll-box title="疼痛日记">
        <textarea class="textarea" placeholder="请填写疼痛日记"></textarea>
      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="save()">保存</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {
          quality: 1,
          face: '',
          rect: []
        },
        faceList: [{
          img: '',
          text: '抑郁'
        }, {
          img: '',
          text: '焦虑'
        }, {
          img: '',
          text: '愉快'
        }, {
          img: '',
          text: '亢奋'
        }, {
          img: '',
          text: '淡漠'
        }, {
          img: '',
          text: '疲劳'
        }],
        rectList: ['无', '恶心呕吐', '头晕', '呼吸困难', '尿滞留', '便秘', '眩晕', '幻觉', '多汗', '嗜睡', '口干', '瘙痒', '体位性低血压', '其他', '']
      }
    },
    created() {

    },
    methods: {
      chooseFace(index) {
        this.dataForm.face = index;
      },
      chooseRect(index) {
        let s = this.dataForm.rect.indexOf(index);
        if (s == -1) {
          this.dataForm.rect.push(index);
        } else {
          this.dataForm.rect.splice(s, 1);
        }
      },
      save() {}
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .time-box {
      display: flex;
      padding: 8px;
      margin-right: 23px;

      .time-input {
        flex: 1;
        border: 0;
      }
    }

    .van-radio-group {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      margin-right: 23px;
    }

    .face-list {
      display: flex;
      justify-content: space-between;
      padding: 8px;
    }

    .rect-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 8px;

      .rect {
        width: 33.33333%;
        margin-bottom: 24px;
        text-align: center;

        &:nth-child(3n+1) {
          text-align: left;
        }

        &:nth-child(3n) {
          text-align: right;
        }

        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3) {
          margin-bottom: 0;
        }

        .rect-box {
          display: inline-block;
          min-width: 85px;
          height: 36px;
          padding: 0 11px;
          border: 1px solid #0CD5A9;
          vertical-align: center;
          line-height: 34px;
          text-align: center;
          border-radius: 18px;
          color: #0CD5A9;
          font-size: 14px;

          &.select {
            background: #0CD5A9;
            color: #fff;
          }
        }
      }
    }

    .textarea {
      width: 100%;
      height: 192px;
      padding: 16px;
      border: 1px solid #E8E8E8;
      border-radius: 6px;
    }

    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
