<template>
  <div class="consult-detail">
    <ll-box title="咨询信息" :style="{'padding-bottom':0}">
      <ll-cell title="咨询用户" titleClass="c-gray" :value="patient.name"></ll-cell>
      <ll-cell title="咨询医生" titleClass="c-gray" :value="doctor.doctorName"></ll-cell>
      <ll-cell title="问诊方式" titleClass="c-gray" valueClass="c-orange" :value="order.serviceType=='image'?'图文咨询':'电话咨询'"></ll-cell>
      <ll-cell title="接诊时间" titleClass="c-gray" value="医生24小时内回复"></ll-cell>
    </ll-box>
    <ll-box title="病情描述">
      <div class="c-gray">{{order.conditionDesc}}</div>
    </ll-box>
    <ll-box title="病情图片">
      <ll-img-show :list="setImgs"></ll-img-show>
    </ll-box>
    <ll-box title="联系电话" v-if="order.serviceType=='phone'">
      <div class="c-orange">{{order.patientPhone}}</div>
    </ll-box>
  </div>
</template>

<script>
  import llImgShow from '@/components/llImgShow'

  export default {
    components: {
      llImgShow
    },
    props: {
      order: {
        type: Object,
        default: function() {
          return {};
        }
      },
      doctor: {
        type: Object,
        default: function() {
          return {};
        }
      },
    },
    data() {
      return {
        imgs: [],
        patient: this.$store.getters['login/getUser'],
      }
    },
    created() {
    },
    methods: {},
    computed: {
      setImgs() {
        return this.order.conditionDescImg && this.order.conditionDescImg.split(',');
      }
    },
  }
</script>

<style scoped lang="scss">
  .consult-detail {}
</style>
