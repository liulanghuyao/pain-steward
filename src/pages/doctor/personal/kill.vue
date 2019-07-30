<template>
  <div class="wrap">
    <mo-content>
      <ll-box title="执业简介">
        <textarea v-model="dataForm.conditionDesc" class="textarea" placeholder="请输入您的执业经验"></textarea>
      </ll-box>
      <ll-box title="专业特长介绍">
        <textarea v-model="dataForm.conditionDesc" class="textarea" placeholder="请输入您擅长的专业技能"></textarea>
      </ll-box>
      <ll-box title="微创镇痛技术" value="请选择擅长的技术，可多选" valueClass="c-gray">

      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="step()">下一步</van-button>
      </div>
    </mo-content>
    <ll-popup-panel ref="panel1">
      <ll-box title="上传医生执业证书">
        <div class="upload-box"></div>
      </ll-box>
      <ll-box title="上传头像">
        <div class="upload-box"></div>
      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="submit()">提交</van-button>
      </div>
    </ll-popup-panel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {

        }
      }
    },
    created() {

    },
    methods: {
      step() {
        this.$refs.panel1.open();
      },
      submit() {
        this.$utils.removeState();
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .textarea {
      width: 100%;
      height: 192px;
      padding: 16px;
      border: 1px solid #E8E8E8;
      border-radius: 6px;
    }
  }
</style>
