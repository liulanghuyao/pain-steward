<template>
  <div class="wrap">
    <van-search class="search" placeholder="请输入医院或医生姓名查询" v-model="params.doctorName" background="#EDF9F7" />
    <mo-content class="mo-content" :isList="true" :pullLoading="pullLoading" :upLoading="upLoading" :finished="finished"
      @getList="getList">
      <doctor-card v-for="(item, index) in list" :key="index" :doctor="item" @click.native="goTo(item.userUuid)"></doctor-card>
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
        params: {
          offset: 0,
          limit: 10,
          doctorName: ''
        },
        pullLoading: false,
        upLoading: false,
        finished: false,
        list: []
      }
    },
    created() {},
    methods: {
      getList(refresh) {
        if (refresh) {
          this.pullLoading = true;
          this.params.offset = 0;
        }
        this.$http.post('wx/doctor/queryDoctors', this.params).then(data => {
          this.params.offset++;
          if (data.rows) {
            if (refresh) {
              this.list = [];
            }
            this.list = [...this.list, ...data.rows];
            if (this.params.offset >= Math.ceil(data.total / 10)) {
              this.finished = true;
            }
          }
          this.pullLoading = false;
          this.upLoading = false;

        });
      },
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
      padding: 50px 0 20px;
    }

    .search {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  }
</style>
