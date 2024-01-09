<script setup>
import { onBeforeUnmount } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

const list = ref(null);
const box = ref(null);

let timer;
let currentTop = 0;

timer = setInterval(() => {
  currentTop -= 2;
  if (currentTop == -(10 * 32)) {
    currentTop = 0;
  }
  list.value.style.top = currentTop + "px";
}, 30);

const move = () => {
  timer;
};

onMounted(() => {
  list.value.innerHTML += list.value.innerHTML;
  move();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="pool">
    <div class="header">
      <span>POOL</span>
    </div>
    <div class="pool-data">
      <div class="top">
        <span></span>
        <h3>矿池数据</h3>
      </div>
      <div class="data">
        <div>
          <span>总产量</span>
          <span class="span1">1500243210.15 REXX</span>
        </div>
        <div>
          <span>有效节点</span>
          <span class="span1">120122</span>
        </div>
        <div>
          <span>参与者</span>
          <span class="span1">510231</span>
        </div>
        <div>
          <span>用户收入</span>
          <span class="span1">≈ 1031122 USDT</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <span>质押USDT获取REXX收益</span>
      <button>立即质押</button>
    </div>
    <div class="income">
      <div class="top">
        <span></span>
        <h3>矿工收益</h3>
      </div>
      <div class="box" ref="box">
        <div class="list" ref="list">
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">10201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">15111 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">3001 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">10201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">10201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">1201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">10201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">1201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">10201 REXX</span>
          </div>
          <div>
            <span>0x2f*****8b0ae4e193ad</span>
            <span class="span1">1201 REXX</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pool {
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
    align-items: center;
    span {
      display: flex;
      width: 5px;
      height: 20px;
      background: linear-gradient(to bottom, #872bbe 0%, #c2267f 101.6%);
      margin-right: 10px;
    }
    h3 {
      font-size: 18px;
      color: rgba($color: #fff, $alpha: 0.9);
    }
  }
  .pool-data {
    margin: 20px 0px;
    width: auto;
    height: auto;
    .data {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      border: 1px solid #9548ee;
      box-shadow: 0px 0px 10px 0px #9548ee;
      margin: 15px 0px;
      padding: 15px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0px;
        font-weight: 600;
        span {
          color: rgba($color: #fff, $alpha: 0.9);
        }
        .span1 {
          color: #9548ee;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    span {
      color: rgba($color: #9548ee, $alpha: 0.9);
      font-size: 15px;
    }
    button {
      height: 35px;
      width: 120px;
      margin-top: 10px;
      background: linear-gradient(270deg, #872bbe 0%, #c2267f 101.6%);
      color: #f0f0f0 !important;
      border: 0;
      font-weight: 600;
      border-radius: 2px;
      text-transform: uppercase;
      box-shadow: none !important;
      transition: 0.2s;
    }
  }
  .income {
    margin-top: 30px;
    .box {
      margin: 15px auto;
      width: auto;
      height: 350px; /*320px*/
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      border: 1px solid #9548ee;
      box-shadow: 0px 0px 10px 0px #9548ee;
      .list {
        width: 95%;
        padding: 0px 1%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        div {
          width: auto;
          height: 32px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          span {
            color: rgba($color: #fff, $alpha: 0.9);
          }
          .span1 {
            color: #9548ee;
          }
        }
      }
    }
  }
}
</style>
