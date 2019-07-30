<template>
  <div class="wrap">
    <van-tabs class="tabs" v-model="active" @change="changeTab" title-active-color="#0CD5A9" title-inactive-color="#0F1F3A"
      color="#0CD5A9">
      <van-tab title="图文咨询">
        <div class="consult-content">
          <order-card v-for="(item, index) in list" :key="index" :order="item" :type="2" @click.native="goTo(item)"></order-card>
        </div>
      </van-tab>
      <van-tab title="电话咨询">
        <div class="consult-content">
          <order-card v-for="(item, index) in list" :key="index" :order="item" :type="2" @click.native="goTo(item)"></order-card>
        </div>
      </van-tab>
    </van-tabs>
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
        active: 0,
        pages: {
          offset: 0,
          limit: 10,
          serviceType: 'image'
        },
        pullLoading: false,
        upLoading: false,
        finished: false,
        list: []
      }
    },
    activated() {
      this.$emit('setIndex', 0);
    },
    created() {
      if (this.$store.getters['login/isLogin']) {
        this.getList(true);
      }
    },
    methods: {
      getList(refresh) {
        if (refresh) {
          this.pullLoading = true;
          this.pages.offset = 0;
        }
        this.upLoading = true;
        this.$http.post('/wx/auth/order/query', this.pages).then(data => {
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
        });
      },
      changeTab(type) {
        if (this.$store.getters['login/isLogin']) {
          this.getList(true);
        }
      },
      goTo(order) {
        let url = '';
        if (order.orderStatus == 0) {
          url = '/patient/consult/payConsult';
        } else if (order.orderStatus == 1 || order.orderStatus == 3 || order.orderStatus == 9) {
          url = '/patient/consult/imageText';
        } else {
          url = '/patient/consult/payResultConsult';
        }
        this.$router.push({
          path: url,
          query: {
            id: order.uuid
          }
        })
      }
    },
    watch: {
      active(newValue, oldValue) {
        if (newValue == 0) {
          this.pages.serviceType = 'image';
        } else {
          this.pages.serviceType = 'phone'
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .wrap {
    .consult-content {
      margin: 0 16px;
    }
  }
</style>
