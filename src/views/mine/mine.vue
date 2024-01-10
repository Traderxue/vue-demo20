<script setup>
import { ref } from 'vue';

const navList = ref([
  {
    path:"/income",
    title:"收益记录",
    icon:""
  },
  {
    path:"/income",
    title:"兑换记录",
    icon:""
  },
  {
    path:"/income",
    title:"问题反馈",
    icon:""
  },
  {
    path:"/income",
    title:"关于我们",
    icon:""
  }

])

</script>

<template>
  <div class="mine">
    <div class="header">
      <span>MINE</span>
    </div>
    <div class="top">
      <div class="top_income">
        <span>累计收益</span>
        <span class="span1">0.0000 REXX</span>
      </div>
      <div class="income">
        <div>
          <span>今日收益</span>
          <span class="span1">0.000 REXX</span>
        </div>
        <div>
          <span>钱包余额</span>
          <span class="span1">0.000 USDT</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in navList" :key="index">
        <div>
          <span class="material-symbols-outlined"> list_alt </span>
          <span>{{item.title}}</span>
        </div>
        <span class="material-symbols-outlined"> chevron_right </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #9548ee;
  }
  .top {
    display: flex;
    justify-content: sapce;
    flex-direction: column;
    margin: 15px 0px;
    padding: 20px;
    border: 1px solid #9548ee;
    box-shadow: 0px 0px 10px 0px #9548ee;
    .top_income {
      margin: 10px 0px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span {
        margin: 10px 0px;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .span1 {
      color: #9548ee;
    }
    .income {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        span {
          margin: 5px 0px;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid #9548ee;
    box-shadow: 0px 0px 10px 0px #9548ee;
    margin-top: 50px;
    padding: 20px;
    color: #9548ee;
    .per {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #9548ee;
      padding-bottom: 10px;
      margin: 15px 0px;
      div{
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
</style>
