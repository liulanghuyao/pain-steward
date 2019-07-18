<template>
  <div class="doctor-header">
    <img class="doctor-header-head" src="@/assets/img/doctor.png" alt="">
    <div class="doctor-header-detail">
      <div class="doctor-header-name-duty ellipsis">
        <span class="doctor-header-name">唐易迅</span>
      </div>
      <div class="doctor-header-hospital-ke c-gray ellipsis">
        <span class="doctor-header-hospital">主任医生</span>
      </div>
      <div class="doctor-header-tw-dh c-gray ellipsis">
        <span class="doctor-header-tw">中南大学湘雅二医院</span>
        <span class="doctor-header-dh">疼痛专科</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .doctor-header {
    display: flex;
    background: #fff;

    .doctor-header-head {
      width: 60px;
      height: 79px;
      margin-right: 16px;
      border-radius: 6px;
    }

    .doctor-header-detail {
      flex: 1;

      .doctor-header-name-duty {
        line-height: 23px;

        .doctor-header-name {
          margin-right: 12px;
          font-size: 16px;
        }

        .doctor-header-duty {
          font-size: 15px;
        }
      }

      .doctor-header-hospital-ke {
        margin: 8px 0;
        font-size: 15px;
        line-height: 20px;

        .doctor-header-hospital {
          margin-right: 12px;
        }
      }

      .doctor-header-tw-dh {
        font-size: 14px;

        .doctor-header-tw {
          margin-right: 12px;
        }
      }
    }
  }
</style>
