<template>
  <div class="wrap">
    <mo-content>
      <ll-box>
        <doctor-header></doctor-header>
      </ll-box>
      <ll-box title="病情描述">
        <textarea class="textarea" placeholder="请您详细提交需解决的关键问题，简要提供相关病史资料及主要检查结果，以便医生更加准确分析您的病情。"></textarea>
      </ll-box>
      <ll-box title="病情图片">
        <van-uploader class="upload" v-model="fileList" multiple="" :max-count="4" />
        <div class="file-describe c-gray">症状部位，检查报告或者其他病情资料，最多可上传4张</div>
      </ll-box>
      <ll-box title="联系电话确认">
        <input type="number" class="phone">
        <ll-tip circle msg="请保持24小内该电话号码畅通。"></ll-tip>
      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="buy()">提交问诊</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import doctorHeader from '@/components/doctor/doctorHeader'
  import llTip from '@/components/llTip.vue'

  export default {
    components: {
      doctorHeader,
      llTip
    },
    data() {
      return {
        fileList: []
      }
    },
    created() {

    },
    methods: {
      buy() {
        this.$router.push('/patient/consult/payConsult');
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

    .file-describe {
      margin-top: 10px;
      font-size: 13px;
      text-align: center;
    }

    .phone {
      display: block;
      width: 100%;
      height: 50px;
      padding: 0 10px;
      border: 1px solid #E8E8E8;
      margin-bottom: 16px;
      border-radius: 6px;
    }
    
    .btn-box {
      margin: 48px 16px 28px;
    }
  }
</style>
