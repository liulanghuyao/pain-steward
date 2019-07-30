<template>
  <div class="wrap">
    <mo-content class="mo-content" :isList="true" noLogin :pullLoading="pullLoading" :upLoading="upLoading" :finished="finished"
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
        pages: {
          offset: 0,
          limit: 10,
        },
        pullLoading: false,
        upLoading: false,
        finished: false,
        list: []
      }
    },
    activated() {
      this.$emit('setIndex', 1);
    },
    created() {

    },
    methods: {
      getList(refresh) {
        if (refresh) {
          this.pullLoading = true;
          this.pages.offset = 0;
        }
        this.upLoading = true;
        this.$http.post('wx/auth/order/query', this.pages).then(data => {
          this.pages.offset++;
          if (data.rows) {
            if (refresh) {
              this.list = [];
            }
            this.list = [...this.list, ...data.rows];
            if (this.pages.offset >= Math.ceil(data.total / this.pages.limit)) {
              this.finished = true;
            }
          }
          this.pullLoading = false;
          this.upLoading = false;
        }).catch(err => {
          this.pullLoading = false;
          this.upLoading = false;
          this.finished = true;
        });
      },
      goTo(order) {
        if (order.orderStatus == 0) {
          this.$router.push({
            path: '/patient/consult/payConsult',
            query: {
              id: order.uuid
            }
          })
        } else {
          this.$router.push({
            path: '/patient/consult/payResultConsult',
            query: {
              id: order.uuid
            }
          })
        }
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
