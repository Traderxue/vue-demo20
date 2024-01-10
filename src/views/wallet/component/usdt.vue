<script setup>
import { watch } from "vue";
import { computed } from "vue";
import { ref } from "vue";

const usdt = ref("");

const rexx = ref("");

watch(
  () => usdt.value,
  (newVal, oldVal) => {
    rexx.value = parseFloat(newVal) * 33;
  }
);
</script>

<template>
  <div class="usdt">
    <div class="top">
      <div>
        <span>从</span>
      </div>
      <div>
        <input type="text" v-model="usdt" placeholder="可用0.000" />
      </div>
      <div>
        <!-- <span style="color: #9548ee">全部</span> -->
        <img src="https://etherscan.io/token/images/tethernew_32.png" alt="" />
        <span>USDT</span>
      </div>
    </div>
    <div style="height: 120px; display: flex; align-items: center">
      <span class="material-symbols-outlined"> arrow_downward </span>
    </div>
    <div class="bottom">
      <div>
        <span>至</span>
      </div>
      <div>
        <input type="text" v-model="rexx" placeholder="可获取0.000" />
      </div>
      <div>
        <img src="@/assets/img/banner-img.png" alt="" />
        <span>REXX</span>
      </div>
    </div>
    <div class="price">
      <span>价格: 1USDT ≈ 33REXX</span>
    </div>
    <div class="btn">
      <button>立即兑换</button>
    </div>
    <div class="introduce">
      <p>Unlock The Ultimate Crypto Experience:</p>
      <span>
        $100 REXX Coins + 20 USDT New Year Gift For Just $50 REXX Buying!</span
      >
      <span> Contest Duration: 3rd Jan. 2024 to 22nd Jan. 2024</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.usdt {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
  padding: 15px 0px;
  img {
    margin: 0px 10px;
  }
  input {
    width: auto;
    height: 35px;
    border: 0;
    background: rgba($color: #9548ee, $alpha: 0);
    border-bottom: 1px solid rgba($color: #9548ee, $alpha: 1);
    padding-left: 10px;
    color: rgba($color: #9548ee, $alpha: 1);
    font-weight: 600;
  }
  input::placeholder {
    color: rgba($color: #9548ee, $alpha: 0.5);
    font-weight: 600;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    border: 1px solid #9548ee;
    box-shadow: 0px 0px 10px 0px #9548ee;
    box-sizing: border-box;
    padding: 10px;
    div {
      display: flex;
      align-items: center;
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    border: 1px solid #9548ee;
    box-shadow: 0px 0px 10px 0px #9548ee;
    box-sizing: border-box;
    padding: 10px;
    div {
      display: flex;
      align-items: center;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
  .price {
    width: 100%;
    font-weight: 600;
    color: #9548ee;
    margin: 20px 0px;
    position: relative;
    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .btn {
    width: 100%;
    margin: 15px 0px;
    button {
      width: 100%;
      height: 45px;
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
  .introduce {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    p{
        margin: 5px 0px;
        color: #9548ee;
    }
    span{
        margin: 10px 0px;
        text-indent: 10px;
        line-height: 20px;
    }
  }
}
</style>
