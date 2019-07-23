<template>
  <div class="wrap">
    <mo-content class="mo-content" :isList="true" :pullLoading="pullLoading" :upLoading="upLoading" :finished="finished"
      @getList="getList">
      <order-card></order-card>
    </mo-content>
  </div>
</template>

<script>
  import orderCard from '@/components/order/orderCard'

  export default {
    components: {
      orderCard
    },
    data() {
      return {
        params: {
          offset: 0,
          limit: 10,
        },
        pullLoading: false,
        upLoading: false,
        finished: false,
        list: []
      }
    },
    created() {

    },
    methods: {
      getList(refresh) {
        if (refresh) {
          this.pullLoading = true;
          this.params.offset = 0;
        }
        this.$http.post('wx/auth/order/query', this.params).then(data => {
          this.params.offset++;
          if (data.rows) {
            if (refresh) {
              this.list = [];
            }
            this.list = [...this.list, ...data.rows];
            if (this.params.offset >= data.total) {
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
      padding: 0 16px;
    }
  }
</style>
