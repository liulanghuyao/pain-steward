<template>
  <div class="wrap">
    <mo-content class="mo-content">
      <van-search class="search" placeholder="请输入医院或医生姓名查询" v-model="value" background="#EDF9F7" />
      <doctor-card v-for="(item, index) in doctors" :key="index" :doctor="item" @click.native="goTo(index)"></doctor-card>
    </mo-content>
  </div>
</template>

<script>
  import doctorCard from '@/components/doctor/doctorCard'

  export default {
    components: {
      doctorCard
    },
    data() {
      return {
        value: '',
        doctors: [{

        }, {

        }, {

        }, {

        }, {

        }, {

        }]
      }
    },
    created() {

    },
    methods: {
      goTo(id) {
        this.$router.push({
          path: '/patient/doctor/doctorDetail',
          query: {
            id: id
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    .mo-content {
      padding: 50px 0 10px;
    }

    .search {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
</style>
