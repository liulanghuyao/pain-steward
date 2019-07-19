<template>
  <div class="wrap">
    <mo-content>
      <van-notice-bar text="以下健康信息如有变化，请随时编辑更新。" left-icon="volume-o" />
      <ll-box class="details">
        <ll-cell title="肿瘤诊断是否明确" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="有无手术或放化疗史" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="肿瘤转移情况" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="主要疼痛部位">
          <input type="text" slot="value" placeholder="请输入疼痛部位名称">
        </ll-cell>
        <ll-cell title="使用的主要镇痛药物">
          <input type="text" slot="value" placeholder="请输入药物名称">
        </ll-cell>
        <ll-cell title="目前能否口服进食" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="目前的给药途径" icon="down">
          <input type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="合并其他疾病名称">
          <input type="text" slot="value" placeholder="请输入疾病名称">
        </ll-cell>
      </ll-box>
      <ll-box title="病史描述">
        <textarea class="textarea" placeholder="请简要描述您的基本病史情况及治疗经历，限100字内。"></textarea>
      </ll-box>
      <div class="btn-box">
        <van-button type="primary" class="btn btn-block" @click="save()">保存</van-button>
      </div>
    </mo-content>
  </div>
</template>

<script>
  import llCell from '@/components/llCell.vue'
  export default {
    components: {
      llCell,
    },
    data() {
      return {

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
    .details {
      padding: 0 16px;
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
