<template>
  <div class="z-[2] container">
    <div class="banner_slide_content">
      <!-- STRART CONTAINER -->
      <div class="text-white">
        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            gap-24
            justify-between
            items-center
          "
        >
          <div class="text-center lg:text-left">
            <h2 class="mt-10 md:mt-0 font-bold text-xl md:text-3xl xl:text-4xl">
              The Luckiest Token in the world! Earn Mega Reflections today!
            </h2>

            <h4 class="lg:text-lg mt-6 text-white font-['Roboto'] text-left">
              CREATE A WORLD THAT WORKS FOR YOU. BUILD AUTOMATED REAL WORLD
              COMPANIES, & MANAGE THEM THROUGH YOUR DAO.
            </h4>
            <p class="lg:text-lg font-['Roboto'] mt-6">
              KuteKoi Coin focuses on profitability through autostaking and
              compounding crypto interest. KuteKoi Coin’s Dao is built around
              keeping KuteKoi optimized for all future staking and liquidity
              needs. KuteKoi Coin's AI system is like no other in terms of
              safety, security and prosperity. We will easily reach up to
              700,000.00%% APY.
            </p>
          </div>
          <div>
            <div class="">
              <div
                class="
                  px-7
                  md:px-12
                  py-20
                  cursor-pointer
                  rounded-3xl
                  bg-[#D4922F]
                  transition
                  duration-300
                  ease-in-out
                  hover:scale-105 hover:drop-shadow-2xl
                "
              >
                <h3
                  class="
                    text-center text-xl
                    md:text-3xl
                    xl:text-4xl
                    mb-2
                    font-bold
                  "
                >
                  Private Sale (Round 2) Ends in
                </h3>
                <vue-countdown
                  :time="time"
                  :interval="100"
                  v-slot="{ days, hours, minutes, seconds }"
                >
                  <div
                    class="conutdown-list lg:text-lg font-['Roboto']"
                    id="countdown"
                  >
                    <ul class="flex justify-around text-center flex-wrap">
                      <li>
                        <span>days</span>
                        <span class="clock-background" id="days">{{
                          days
                        }}</span>
                      </li>
                      <li>
                        Hours<span class="clock-background" id="hours">{{
                          hours
                        }}</span>
                      </li>
                      <li>
                        Minutes<span class="clock-background" id="minutes">{{
                          minutes
                        }}</span>
                      </li>
                      <li>
                        Seconds<span class="clock-background" id="seconds">{{
                          seconds
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </vue-countdown>

                <p class="total-fund mt-4 mb-6 font-medium font-['Roboto']">
                  Total funds raised: $0
                </p>

                <div class="font-['Roboto']">
                  <button
                    class="
                      bg-[#C00100]
                      hover:bg-[#C00100]
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded
                    "
                  >
                    KYC
                  </button>

                  <button
                    class="
                      bg-[#C00100]
                      hover:bg-[#C00100]
                      text-white
                      font-bold
                      py-2
                      px-4
                      ml-2
                      rounded
                    "
                  >
                    Audit
                  </button>
                </div>

                <div class="clock-button mt-10 font-['Roboto']">
                  <a
                    href="https://cutt.ly/xFfVQ82"
                    class="
                      buy_now_btn
                      btn-aylen
                      rounded-[40px]
                      bg-[#C00100]
                      border-solid border-2 border-[#C00100]
                      text-white
                      py-4
                      px-12
                      md:px-28
                      lg:px-16
                      xl:px-28
                      cursor-pointer
                      uppercase
                      transition
                      ease-in-out
                      duration-500
                      w-full
                    "
                  >
                    BUY NOW</a
                  >
                  <!-- 🔥 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[150px]"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",

  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    return {
      time: newYear - now,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.clock-background {
  @apply bg-[#C00100] w-[70px] h-[70px] text-[31px] flex justify-center items-center mt-4 rounded-lg;
}
.ova-heading {
  @apply text-lg font-medium;
  color: #ffffff;
}
.ova-heading .ova_after {
  @apply inline-block w-[73px] h-[2px] bg-[#dcdce7] ml-[6px];
}
.btn-aylen,
.btn-aylen2 {
  @apply relative overflow-hidden z-[1];
  transition: all 0.3s ease-in-out;
}
.btn-aylen::before {
  @apply absolute left-0 top-0 bottom-0 right-0 bg-[#fff];
  content: "";
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
  transition: all 0.3s ease-in-out;
}
.images-button {
  text-align: -webkit-center;
}
.ova-percent-view {
  @apply h-[13px] w-full bg-[#535459] rounded-lg overflow-visible relative;
  margin: 0 auto;
}
.ova-percent {
  @apply w-[15%] h-full float-left rounded-lg;
  background: linear-gradient(
    270deg,
    rgb(249, 212, 249) 0%,
    rgb(255, 92, 255) 100%
  );
  /* background: -moz-linear-gradient(270deg, #63a3ff 0%, #011b3f 100%);
  background: -webkit-linear-gradient(270deg, #63a3ff 0%, #011b3f 100%);
  background: linear-gradient(270deg, #63a3ff 0%, #011b3f 100%); */
}
.ova-percent-view .percentage {
  @apply absolute top-[-30px] leading-6;
  color: #fff;
  display: none;
}

@-webkit-keyframes ani-mouse {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}
@-moz-keyframes ani-mouse {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}
@keyframes ani-mouse {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}
.scroll-btn {
  @apply mt-6 md:mt-0 block left-0 right-0 text-center;
}
.scroll-btn > * {
  @apply inline-block leading-4 text-[13px];
  color: #7f8c8d;
  color: #ffffff;
  font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *.active {
  color: #ffffff;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *:active,
.scroll-btn > *.active {
  opacity: 0.8;
  filter: alpha(opacity=80);
}
.scroll-btn .mouse {
  @apply relative block w-[35px] h-[55px] rounded-[23px] border-[3px] border-solid border-white;
  margin: 0 auto 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.scroll-btn .mouse > * {
  @apply absolute block top-[29%] left-[50%] w-[8px] h-[12px] mt-[-4px] ml-[-4px] bg-white rounded-[50%];
  -webkit-animation: ani-mouse 2.5s linear infinite;
  -moz-animation: ani-mouse 2.5s linear infinite;
  animation: ani-mouse 2.5s linear infinite;
}
/* span {
  border-right: .05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
} */
.banner_slide_content {
  @apply w-full px-0 md:py-[100px];
}

.header_wrap.fixed-top + .banner_section.full_screen .banner_content,
.header_wrap.fixed-top
  + .page-content
  .banner_section.full_screen
  .banner_content {
  @apply mt-[50px];
}
</style>