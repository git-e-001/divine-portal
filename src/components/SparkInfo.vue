<template>
  <div class="">
    <div class="container md:pb-24 lg:pb-40">
      <!-- Start Basic Info -->
      <div class="grid grid-cols-1 pt-12 text-white w-[83%] mx-auto">
        <!-- <div class="w-[65%] mx-auto">
          <img src="@/assets/images/cover1.png" />
        </div>
        <div class="justify-self-center w-[70%] lg:w-[50%]">
          <h4 class="mb-4 text-2xl md:text-5xl font-bold text-center">
            Basic Info
          </h4>
          <ul class="text-left basic_info font-['Barlow']">
            <li>
              <span class="title">Date of Birth:</span>
              <p>2 April. 2022</p>
            </li>
            <li>
              <span class="title">Website:</span>
              <p>web3spark.io</p>
            </li>
            <li>
              <span class="title">Email:</span>
              <p>hello@web3spark.io</p>
            </li>
            <li>
              <span class="title">Type:</span>
              <p>Community Made</p>
            </li>
            <li>
              <span class="title">BSC Scan:</span>
              <p class="text-[#1c8c97]">View</p>
            </li>
            <li>
              <div class="dflex flex-row space-x-2">
                <i
                  class="
                    fa-solid fa-location-arrow
                    bg-[#3b5998]
                    p-2
                    rounded-full
                  "
                ></i>
                <i
                  class="fa-brands fa-twitter bg-[#00acee] p-2 rounded-full"
                ></i>
              </div>
            </li>
          </ul>
        </div> -->

        <div class="h-[500px]"></div>

        <div>
          <h4
            class="
              mb-4
              mt-12
              text-3xl
              lg:text-4xl
              xl:text-5xl
              font-bold
              text-left
            "
          >
            Tokenomics
          </h4>

          <div class="skills lg:text-lg mt-12 font-['Roboto']">
            <div class="skill_content pr_style1">
              <div class="text-left progrees_bar_text">
                <span>Original Supply - 1 000 000 000 </span>
              </div>
              <div class="progress">
                <div class="count_pr"><span class="counter">100</span>%</div>
                <div
                  class="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 100%"
                ></div>
              </div>
            </div>

            <div class="skill_content pr_style1">
              <div class="text-left progrees_bar_text">
                <span>Developer Allocation - 1.0%</span>
              </div>
              <div class="progress">
                <div class="count_pr"><span class="counter">1.0</span>%</div>
                <div
                  class="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow="1.0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 1%"
                ></div>
              </div>
            </div>

            <div class="skill_content pr_style1">
              <div class="text-left progrees_bar_text">
                <span>Holders - </span>
              </div>
              <div class="progress pr_style1">
                <div class="count_pr"><span class="counter">0.0</span>%</div>
                <div
                  class="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0%"
                ></div>
              </div>
            </div>

            <div class="skill_content pr_style1">
              <div class="text-left progrees_bar_text">
                <span>Tokens In Circulation -</span>
              </div>
              <div class="progress">
                <div class="count_pr"><span class="counter">0.0</span>%</div>
                <div
                  class="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0%"
                ></div>
              </div>
            </div>

            <div class="skill_content pr_style1">
              <div class="text-left progrees_bar_text">
                <span>Reflections - </span>
              </div>
              <div class="progress">
                <div class="count_pr"><span class="counter">0.0</span>%</div>
                <div
                  class="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0%"
                ></div>
              </div>
            </div>

            <p class="text-left">KUTEKOI TOKEN</p>
          </div>
        </div>
      </div>
      <!-- End Basic Info -->

      <!-- Start Web3 Quora -->
      <div class="text-white row">
        <div
          class="
            text-lg
            lg:text-xl
            flex flex-col
            w-[83%]
            mx-auto
            font-['Roboto']
          "
        >
          <p class="mt-10 lg:mt-24 mb-4 xl:leading-[3.5rem]">
            Imagine a world where there is no longer hard manual labor. You can
            let the robots do it and still get paid for it like you did.
          </p>
          <p class="mt-10 lg:mt-24 mb-4 xl:leading-[3.5rem]">
            This world can be a free, happy and stressfree place. We will be
            seeking only this, throughout our mission together.
          </p>
        </div>
      </div>
      <!-- End Web3 Quora -->
    </div>

    <div class="text-white bg-[#C00100] text-lg lg:text-lg py-20">
      <p class="mb-8 md:mb-14 lg:!leading-[3.5rem]">
        "KuteKoi, manifesting wealth for you and your family"
      </p>
      <b
        ><a class="text-base" href="https://web3spark.io/">
          -KuteKoi proverb</a
        ></b
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SparkInfo",
  data() {
    return {
      timeLine: [
        {
          subheadline: "Phase 1",
          status: "Completed",
          sublist: [
            "- Custom development of all tokens features",
            "- Website Launch",
            "- Dashboard Launch (SwapWallet)",
            "- Audit Passed",
          ],
        },
        {
          subheadline: "Phase 2",
          status: "In Progress",
          sublist: [
            '<span class= "text-yellow-600">* Basic Marketing</span>',
            '<span  class="text-[#27e278]">Private sale Round 1</span>',
            '<span class= "text-yellow-600">* Private sale Round 2</span>',
            "- KYC by Pinksale / Others",
            "- Audit by Coinscope",
            "- Marketing for Presale",
            "Presale on Pinksale",
            "- AMA tour",
            "- Poocoin presale ads",
            "-Launch",
            "-Swap 1.0",
            "-Highest Auto-Staking",
            "- Fastest Auto-Compound",
            "-NFT Avatars Season 1",
            "- The BarnBuddy game demo",
            "- Major tg marketing groups pins",
            "- Poocoin, dextools and bogged ads",
            "-Coinmarketcap list",
            "- CoinGecko list",
            "- DAO 1.0",
            "- Publications on several news outlets",
            "-Coinmarketcap Trending",
            "-20-100M Marketcap ATH",
          ],
        },
        {
          subheadline: "Phase 3",
          status: "Upcoming",
          sublist: [
            "- Listing on CoinMarketCap",
            "- Listing on CoinGecko",
            "Dashboard Launch (SwapWallet)",
            `- Listing on CEX's Exchange`,
            "- Listing on BitMart Exchange",
            "- 100-300M Market Cap",
            "- Swapping required amount of SPARK3 for the Rewards Budget",
            "- Burning",
            "- Burn Buddy Release",
          ],
        },
        {
          subheadline: "Phase 4",
          status: "Upcoming",
          sublist: [
            "- NFT Marketplace",
            "- Rewards Giveaway (200 BNB)",
            "- 50 000 Telegram Group users",
            `- Initial Partnerships`,
            "- Listing on new Exchanges",
            "- Burning",
            "- 450-1B Market Cap",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.basic_info li {
  @apply pt-4 text-sm md:text-2xl xl:text-[29px] flex whitespace-nowrap justify-between;
}
.basic_info span.title {
  @apply float-left max-w-[110px] w-full font-medium capitalize mr-5;
}
.skill_content:first-child {
  @apply mt-0;
}
.skill_content {
  @apply relative mt-[15px] inline-block w-full;
}
.progrees_bar_text {
  @apply mb-[10px];
}
.skill_content .progress {
  @apply rounded-[20px] h-[5px];
}
.progress {
  @apply flex h-4 overflow-hidden text-xs bg-[#e9ecef] rounded;
  display: -ms-flexbox;
}
.skill_content.pr_style1 .count_pr {
  @apply bg-transparent right-0 left-auto p-0 h-0 w-auto text-sm;
}
.skill_content .count_pr {
  @apply ml-[-20px] absolute left-0 top-0 bg-[#333] p-[5px] rounded-[100%] text-white w-8 h-8 leading-6 text-center;
  -webkit-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;
}
.timeline-card {
  @apply relative p-5;
  background-color: rgba(255, 255, 255, 0.1);
}
.timeline-green {
  color: #27e278;
}
.timeline-green-border {
  border-bottom: 2px solid #27e278;
}
.timeline-yellow-border {
  border-bottom: 2px solid #f5bf2f;
}
.progress-bar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
}
.skill_content .progress-bar {
  background-color: #c00100;
  border-radius: 20px;
  width: 0;
  -webkit-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;
}
</style>