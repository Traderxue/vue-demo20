<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const active = ref("USDT")

const navList = ref([
  {
    path:"/usdt",
    title:"USDT"
  },
  {
    path:"/rexx",
    title:"REXX"
  }
])

const changeNav = (item) =>{
  active.value = item.title
  router.push(item.path)
}
</script>

<template>
  <div class="wallet">
    <div class="header">
      <span>WALLET</span>
    </div>
    <div class="nav">
      <span v-for="(item,index) in navList" :key="index" :class="active==item.title?'active':''" @click="changeNav(item)">{{item.title}}</span>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #9548ee;
  }
  .nav{
    margin: 15px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    span{
      color: rgba($color: #fff, $alpha: 0.9);
    }
    .active{
      color: #9548ee;
      border-bottom: 3px solid #9548ee;      
      padding-bottom: 3px;
    }
  }
}
</style>
