<template>
  <div class="">
    <div>
      <!-- Start Basic Info -->
      <div class="bg-[#18A8DB] py-8">
        <div class="container text-white">
          <h2 class="mt-8 mb-2 text-2xl">Features</h2>
          <p class="max-w-lg mx-auto">
            Create healthy and eco-friendly environments for people around the
            globe.Co-Create the new earth and lifestyles Diversity and Freedom.
            Peace and Love for all.
          </p>
          <h2 class="mt-8 mb-2 text-2xl">Vision:</h2>
          <p>
            The biggest community for <br />
            higher consciousness and <br />
            holistic health on earth.
          </p>
          <h2 class="mt-8 mb-2 text-2xl">Mission:</h2>
          <p class="max-w-3xl mx-auto">
            Create the biggest online and offline community around higher
            consciousness, mental health and spirituality on earth.Create
            healthy and eco-friendly environments for people around the globe.
            Co-Create the new earth and lifestyles Diversity and Freedom. Peace
            and Love for all. Freedom Projects trough raising consciousness of
            humanity Schools for entrepreneurship and mental health Kids schools
          </p>
        </div>
      </div>
      <div class="py-20 tokenomics">
        <div class="container mx-auto">
          <h4 class="mb-4 text-2xl text-left lg:text-4xl xl:text-5xl ml-5">
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
                <span>Team Allocation - 0.6%</span>
              </div>
              <div class="progress">
                <div class="count_pr"><span class="counter">0.6</span>%</div>
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
                <span>Wallet Holders - Pending... </span>
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
                <span>Tokens In Circulation - Pending...</span>
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
                <span>Burned - Pending... </span>
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

            <p class="mt-4 text-left">( These stats are not in real-time. )</p>
          </div>
        </div>
      </div>
      <!-- End Basic Info -->

      <!-- Start Web3 Quora -->
      <!--       <div class="text-white row">
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
      </div> -->
      <!-- End Web3 Quora -->
    </div>

    <!--     <div class="text-white bg-[#C00100] text-lg lg:text-lg py-20">
      <p class="mb-8 md:mb-14 lg:!leading-[3.5rem]">
        "KuteKoi, manifesting wealth for you and your family"
      </p>
      <b
        ><a class="text-base" href="https://web3spark.io/">
          -KuteKoi proverb</a
        ></b
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SparkInfo",
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
  background-color: #18a8db;
  border-radius: 20px;
  width: 0;
  -webkit-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;
}
.tokenomics {
  @apply text-white;
  background-image: url("/src/assets/background/artboard_3.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>