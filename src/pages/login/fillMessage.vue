<template>
  <div class="wrap">
    <mo-content>
      <ll-box class="ll-box">
        <ll-cell title="姓名">
          <input type="text" slot="value" placeholder="请输入姓名">
        </ll-cell>
        <ll-cell title="性别" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="身份证号码">
          <input type="text" slot="value" placeholder="请输入身份证号码">
        </ll-cell>
        <ll-cell title="出生年月日" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="所在地" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="详细地址">
          <input type="text" slot="value" placeholder="请输入详细地址">
        </ll-cell>
        <ll-cell title="联系电话">
          <input type="number" slot="value" placeholder="请输入联系电话,便于医生联系">
        </ll-cell>
      </ll-box>
      <div class="bottom">
        <ll-tip circle msg="注：此信息仅您和医生可见。为了给您带来更准确的医疗服务，请您务必填写真实资料。一旦信息建立，将无法编辑和删除，请确认无误后提交。"></ll-tip>
        <van-button type="primary" class="btn btn-block" @click="save()" :disabled="btnDisabled">完成注册</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import llCell from '@/components/llCell.vue'
  import llTip from '@/components/llTip.vue'

  export default {
    components: {
      llCell,
      llTip
    },
    data() {
      return {
        dataForm: {
          mobilephone: '18175156251',
          yzm: '123456',
        },
        btnDisabled: false
      }
    },
    created() {

    },
    methods: {
      save() {}
    }
  }
</script>

<style scoped lang="scss">
  .wrap {

    .ll-box {
      padding: 0 16px;
    }

    .bottom {
      padding: 9px 16px;
    }

    .btn-block {
      margin-top: 60px;
    }
  }
</style>
