<template>
  <div class="wrap">
    <mo-content class="mo-content" :isList="true" :pullLoading="pullLoading" :upLoading="upLoading" :finished="finished"
      @getList="getList">
      <order-card v-for="(item, index) in list" :key="index" :order="item" @click.native="goTo(item)"></order-card>
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
            if (this.params.offset >= Math.ceil(data.total / 10)) {
              this.finished = true;
            }
          }
          this.pullLoading = false;
          this.upLoading = false;
        });
      },
      goTo(order) {
        this.$router.push({
          path: '/patient/consult/payResultConsult',
          query: {
            id: order.uuid
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
