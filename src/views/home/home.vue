<script setup>
import { onBeforeUnmount } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

const img_boxRef = ref(null);
const imgRef = ref(null);

const listRef = ref(null);
const swipe = ref(null);

let left = 0;
let timer1;
let timer2 = setInterval(() => {
    left -= 2;
    if (left == -(6 * 180)) {
      left = 0;
    }
    listRef.value.style.left = left + "px";
  }, 20);

const move = () => {
  timer2
};

onMounted(() => {
  timer1 = setInterval(() => {
    let currentTop = parseInt(window.getComputedStyle(imgRef.value).top);
    let newTop =
      currentTop == 0
        ? img_boxRef.value.clientHeight - imgRef.value.clientHeight
        : 0;

    imgRef.value.style.top = newTop + "px";
  }, 1500);

  listRef.value.innerHTML += listRef.value.innerHTML;

  move();
});
onBeforeUnmount(()=>{
  clearInterval(timer1)
  clearInterval(timer2)
})
</script>

<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/logo.png" alt="" /><span
        class="material-symbols-outlined"
        style="color: #9548ee"
      >
        language
      </span>
    </div>
    <div class="banner">
      <div class="produce">
        <span class="title">WHAT IS REXX ECOSYSTEM!</span>
        <center>
          <p class="content">
            The Rexx Ecosystem proposes a holistic solution to the mentioned
            challenges, powered by the Rexx Coin, presenting a wide array of
            decentralized solution across various sectors.
          </p>
        </center>
      </div>
      <div class="btn">
        <button>Whitepaper</button><button>BUY</button><button>KYC</button>
      </div>
      <div class="img_box" ref="img_boxRef">
        <div class="imgRef" ref="imgRef">
          <img src="@/assets/img/banner-img.png" alt="" />
        </div>
      </div>
    </div>
    <div class="block">
      <div class="block_safe">
        <div class="img">
          <img src="@/assets/img/audit-1.png" alt="" />
        </div>
        <span>AUDITING</span>
        <center>
          <p>
            Audited and approved by BlockSAFU, Rexx Ecosystem and smart contract
            are found to be fully legit and highly secure.
          </p>
        </center>
      </div>
      <div class="block_kyc">
        <div class="img">
          <img src="@/assets/img/audit-2.png" alt="" />
        </div>
        <span>KYC</span>
        <center>
          <p>
            REXX team passed the KYC verification process by BlockSAFU -
            Verified Project Ownership. Nothing Suspicious.
          </p>
        </center>
      </div>
    </div>
    <h3>PARTNERS & SUPPORTERS</h3>
    <div class="swipe" ref="swipe">
      <div class="list" ref="listRef">
        <div><img src="@/assets/img/partner-logo-1.webp" alt="" /></div>
        <div><img src="@/assets/img/partner-logo-2.webp" alt="" /></div>
        <div><img src="@/assets/img/partner-logo-3.webp" alt="" /></div>
        <div><img src="@/assets/img/partner-logo-1.webp" alt="" /></div>
        <div><img src="@/assets/img/partner-logo-2.webp" alt="" /></div>
        <div><img src="@/assets/img/partner-logo-3.webp" alt="" /></div>
      </div>
    </div>
    <center>
      <p style="margin: 20px 0px">
        Copyright © 2023 - 2024 Rexx. All rights reserved.
      </p>
    </center>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  background: linear-gradient(to bottom, #000000, #250c34);
  .header {
    width: auto;
    height: auto;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 105px;
      height: 40px;
    }
  }
  .banner {
    margin-top: 20px;
    width: auto;
    height: auto;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    .produce {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 22px;
        font-weight: 600;
        color: #9548ee;
      }
      .content {
        text-indent: 10px;
        color: rgba($color: #fff, $alpha: 0.8);
        margin: 15px;
        line-height: 25px;
        font-weight: 600;
      }
    }
    .btn {
      width: 100%;
      height: 35px;
      margin: 15px 0px;
      display: flex;
      justify-content: space-around;
      button {
        width: auto;
        height: 35px;
        padding: 0px 15px;
        border: 0;
        background: linear-gradient(270deg, #872bbe 0%, #c2267f 101.6%);
        color: #f0f0f0 !important;
        font-weight: 600;
        border-radius: 2px;
        text-transform: uppercase;
        box-shadow: none !important;
        transition: 0.2s;
      }
    }
    .img_box {
      width: 200;
      height: 220px;
      position: relative;
      box-sizing: border-box;
      .imgRef {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: top 1.5s ease-in-out;
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: rgb(149, 72, 237) 0px 0px 130px -10px;
        }
      }
    }
  }
  .block {
    width: auto;
    height: auto;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    span {
      font-weight: 600;
      font-size: 19px;
      margin: 10px 0px;
    }
    p {
      text-indent: 15px;
      padding: 10px;
      line-height: 25px;
      font-weight: 600;
      color: rgba($color: #fff, $alpha: 0.8);
    }
    .block_safe {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      border: 1px solid #9548ee;
      box-shadow: 0px 0px 15px 0px rgb(149, 72, 237);
      .img {
        width: 100%;
        height: 80px;
        background: #fff;
        display: flex;
        align-items: center;
        img {
          width: 180px;
          height: 50px;
          margin: auto;
        }
      }
      img {
        width: 200px;
        height: 60px;
      }
    }
    .block_kyc {
      margin-top: 25px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      border: 1px solid #9548ee;
      box-shadow: 0px 0px 15px 0px rgb(149, 72, 237);

      .img {
        width: 100%;
        height: 80px;
        background: #fff;
        display: flex;
        align-items: center;
        img {
          width: 200px;
          height: 75px;
          margin: auto;
        }
      }
    }
  }
  h3 {
    text-align: center;
    margin: 15px 0px;
  }
  .swipe {
    width: 360px;
    height: 70px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding: 0px 10px;
    border: 1px solid #9548ee;
    box-shadow: rgb(149, 72, 237) 0px 0px 130px -10px;
    margin: 20px auto;
    .list {
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      div {
        width: 180px;
        height: 80px;
        padding: 0px 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-right: 1px solid #9548ee;
        img {
          width: 160px;
          height: auto;
        }
      }
    }
  }
}
</style>
