<template>
  <div class="wrap">
    <mo-content>
      <ll-box>
        <ll-cell title="姓名">
          <input v-model="dataForm.name" type="text" slot="value" placeholder="请输入姓名">
        </ll-cell>
        <ll-cell title="性别" icon="down" @click.native="showSex=true">
          <input v-model="dataForm.sex" type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="身份证号码">
          <input v-model="dataForm.idcard" type="text" slot="value" placeholder="请输入身份证号码">
        </ll-cell>
        <ll-cell title="出生年月日" icon="down" @click.native="showAge=true">
          <input v-model="dataForm.age" type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="所在地" icon="down" @click.native="showDistrict=true">
          <input v-model="dataForm.region" type="text" slot="value" placeholder="请选择" readonly="readonly">
        </ll-cell>
        <ll-cell title="详细地址">
          <input v-model="dataForm.address" type="text" slot="value" placeholder="请输入详细地址">
        </ll-cell>
        <ll-cell title="联系电话">
          <input v-model="dataForm.phone" type="number" slot="value" placeholder="请输入联系电话,便于医生联系">
        </ll-cell>
      </ll-box>
      <div class="bottom">
        <ll-tip circle msg="注：此信息仅您和医生可见。为了给您带来更准确的医疗服务，请您务必填写真实资料。一旦信息建立，将无法编辑和删除，请确认无误后提交。"></ll-tip>
        <van-button type="primary" class="btn btn-block" @click="save()" :disabled="btnDisabled">完成注册</van-button>
      </div>
      <van-popup v-model="showSex" position="bottom">
        <van-picker show-toolbar :columns="sexColumns" @cancel="showSex=false" @confirm="onConfirmSex" />
      </van-popup>
      <van-popup v-model="showAge" position="bottom">
        <van-datetime-picker type="date" v-model="now" @confirm="onConfirmAge" @cancel="showAge=false" :min-date="minDate" />
      </van-popup>
      <van-popup v-model="showDistrict" position="bottom">
        <van-picker show-toolbar :columns="cityColumns" @cancel="showDistrict=false" @confirm="onConfirmDistrict" />
      </van-popup>
    </mo-content>
  </div>
</template>

<script>
  import llTip from '@/components/llTip'
  import city from '@/assets/js/city'

  export default {
    components: {
      llTip
    },
    data() {
      return {
        dataForm: {
          name: '',
          sex: '',
          idcard: '',
          age: '',
          region: '岳麓区',
          city: '长沙市',
          province: '湖南省',
          phone: ''
        },
        now: new Date(),
        minDate: new Date(1900, 1, 1),
        btnDisabled: false,
        showSex: false,
        showAge: false,
        showDistrict: false,
        sexColumns: ['男', '女'],
        cityColumns: city
      }
    },
    created() {
      this.$utils.setState(['showSex', 'showAge', 'showDistrict'], this);
    },
    methods: {
      onConfirmSex(value) {
        this.dataForm.sex = value;
        this.showSex = false;
      },
      onConfirmAge(value) {
        this.dataForm.age = this.$utils.formatDate(value, 'yyyy-MM-dd');
        this.showAge = false;
      },
      onConfirmDistrict(value) {
        this.dataForm.province = value;
        this.showDistrict = false;
      },
      validate(type) {
        let flag = true;
        if (this.$utils.isEmpty(this.dataForm.name)) {
          this.$toast('请填写姓名');
          flag = false;
        } else if (this.$utils.isEmpty(this.dataForm.sex)) {
          this.$toast('请选择性别');
          flag = false;
        } else if (this.$utils.isEmpty(this.dataForm.idcard)) {
          this.$toast('请填写身份证号码');
          flag = false;
        } else if (this.$utils.isEmpty(this.dataForm.age)) {
          this.$toast('请选择出生年月日');
          flag = false;
        } else if (this.$utils.isEmpty(this.dataForm.province)) {
          this.$toast('请选择地区');
          flag = false;
        } else if (this.$utils.isEmpty(this.dataForm.address)) {
          this.$toast('请填写详细地址');
          flag = false;
        } else if (!this.$utils.regPhone(this.dataForm.phone)) {
          this.$toast('请填写正确的手机号码！');
          flag = false;
        }
        return flag;
      },
      save() {
        if (!this.validate()) {
          return;
        }
        this.$http.postJson('wx/auth/patient/savePatientInfo', this.dataForm, 1).then(data => {
          this.$http.get('wx/auth/patient/patientInfo').then(data => {
            if (data.data) {
              this.$store.dispatch('login/setUser', data.data);
              this.$router.go(-1);
            }
          });
        })
      }
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
