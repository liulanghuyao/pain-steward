<template>
  <div class="doctor-card">
    <img class="doctor-card-head" src="@/assets/img/doctor.png" alt="">
    <div class="doctor-card-detail">
      <div class="doctor-card-name-duty ellipsis">
        <span class="doctor-card-name">唐易迅</span>
        <span class="doctor-card-duty c-gray">主任医生</span>
      </div>
      <div class="doctor-card-hospital-ke c-gray ellipsis">
        <span class="doctor-card-hospital">中南大学湘雅二医院</span>
        <span class="doctor-card-ke">疼痛专科</span>
      </div>
      <div class="doctor-card-tw-dh c-gray ellipsis">
        <span class="doctor-card-tw">
          图文咨询<span class="c-orange">￥20</span>
        </span>
        <span class="doctor-card-dh">
          电话咨询<span class="c-orange">￥50</span>
        </span>
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
  .doctor-card {
    display: flex;
    padding: 16px;
    margin-bottom: 8px;
    background: #fff;

    .doctor-card-head {
      width: 60px;
      height: 79px;
      margin-right: 16px;
      border-radius: 6px;
    }

    .doctor-card-detail {
      flex: 1;

      .doctor-card-name-duty {
        line-height: 23px;

        .doctor-card-name {
          margin-right: 12px;
          font-size: 16px;
        }

        .doctor-card-duty {
          font-size: 15px;
        }
      }

      .doctor-card-hospital-ke {
        margin: 8px 0;
        font-size: 15px;
        line-height: 20px;

        .doctor-card-hospital {
          margin-right: 12px;
        }
      }
      
      .doctor-card-tw-dh {
        font-size: 14px;
      
        .doctor-card-tw {
          margin-right: 26px;
        }
      }
    }
  }
</style>
