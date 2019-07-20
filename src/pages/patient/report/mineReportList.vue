<template>
  <div class="wrap">
    <mo-content>
      <ll-box class="mg">
        <ll-tip circle>
          <div>您暂未添加任何检查检验报告</div>
          <div>上传近期已做过的重要报告，便于医生了解病情</div>
        </ll-tip>
      </ll-box>
      <ll-box :title="`病理检查报告（${pathologys.length}张）`">
        <ll-img-show :list="pathologys" :upload="8"></ll-img-show>
      </ll-box>
      <ll-box :title="`影像报告（${shadows.length}张）`">
        <ll-img-show :list="shadows" :upload="8"></ll-img-show>
      </ll-box>
      <ll-box :title="`检验报告（${checkouts.length}张）`">
        <ll-img-show :list="checkouts" :upload="8"></ll-img-show>
      </ll-box>
    </mo-content>
  </div>
</template>

<script>
  import llTip from '@/components/llTip'
  import llImgShow from '@/components/llImgShow'

  export default {
    components: {
      llTip,
      llImgShow
    },
    data() {
      return {
        pathologys: [
          require('@/assets/img/doctor.png'),
          require('@/assets/img/doctor.png'),
          require('@/assets/img/doctor.png'),
        ],
        shadows: [
          require('@/assets/img/doctor.png'),
          require('@/assets/img/doctor.png'),
        ],
        checkouts: []
      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .mg {
      padding: 8px 16px;
      margin-bottom: 1px;
    }
  }
</style>
