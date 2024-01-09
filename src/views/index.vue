<script setup>
import { ref } from 'vue';
const active = ref(0)
</script>

<template>
    <div class="index">
        <RouterView />
        <van-tabbar v-model="active" route active-color="#9548EE" inactive-color="#000">
            <van-tabbar-item to="/home">
                <span class="material-symbols-outlined">
                    home
                </span>
                <br>
                <span>首页</span>
            </van-tabbar-item>
            <van-tabbar-item to="/pool">
                <span class="material-symbols-outlined">
                    landscape
                </span>
                <br><span>矿池</span>
            </van-tabbar-item>
            <van-tabbar-item to="/wallet">
                <span class="material-symbols-outlined">
                    account_balance_wallet
                </span><br><span>钱包</span>
            </van-tabbar-item>
            <van-tabbar-item to="/mine">
                <span class="material-symbols-outlined">
                    person
                </span><br>
                <span>我的</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="scss" scoped>
.van-tabbar {
    background: rgba($color: #FFF, $alpha: 0.8);
}

.van-tabbar-item {
    background: rgba($color: #FFF, $alpha: 0.8);
}
</style>