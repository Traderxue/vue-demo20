<template>
  <div class="pool">
    <div class="header">
      <span>pool</span>
    </div>
    <div class="pool-data">
      <div class="top">
        <span></span>
        <h3>矿池数据</h3>
      </div>
      <div class="data">
        <div>
          <span>总产量</span>
          <span class="span1">103210.15 ETH</span>
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
    <div class="income">
      <div class="top">
        <span></span>
        <h3>矿池数据</h3>
      </div>
      <div class="list">
        文字无限滚动
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
  .income{
    margin-top: 50px;
    .list{
        margin: 15px 0px;
    }
  }
}
</style>
