<template>
    <div class="home">
        <div class="header">
            <img src="@/assets/logo.png" alt=""><span class="material-symbols-outlined">
                language
            </span>
        </div>
        <div class="banner">
            <div class="produce">
                <span class="title">WHAT IS REXX ECOSYSTEM!</span>
                <center>
                    <p class="content">The Rexx Ecosystem proposes a holistic solution to the mentioned challenges, powered
                        by the Rexx Coin,
                        presenting a wide array of decentralized solution across various sectors.</p>
                </center>
            </div>
            <div class="btn">
                <button>Whitepaper</button><button>BUY</button><button>KYC</button>
            </div>
            <div>
                <img src="@/assets/img/banner-img.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: auto;
    height: auto;

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
        height: 140px;
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
                color: #9548EE;
            }

            .content {
                text-indent: 10px;
                color: rgba($color: #FFF, $alpha: 0.8);
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
                background: linear-gradient(270deg, #872BBE 0%, #C2267F 101.6%);
                color: #F0F0F0 !important;
                font-weight: 600;
                border-radius: 2px;
                text-transform: uppercase;
                box-shadow: none !important;
                transition: 0.2s;

            }
        }

        img {
            width: 200px;
            height: 200px;
        }
    }
}</style>