<template>
  <div>
    <section id="home_section" class="banner-bg" :style="bgImage">
      <Header />
      <Banner />
    </section>
    <section class="h-[524px] flex items-center" :style="whatDoWeDo">
      <div class="container">
        <div
          class="
            flex
            lg:flex-row
            flex-col
            items-center
            justify-center
            lg:space-x-5
            space-x-0
            lg:space-y-0
            space-y-5
          "
        >
          <div>
            <img
              class="
                lg:h-[324px]
                md:h-[250px]
                h-[200px]
                lg:w-[324px]
                md:w-[250px]
                w-[200px]
              "
              src="../assets/background/sky-lighter.png"
              alt=""
            />
          </div>
          <div class="space-y-5">
            <h1 class="text-3xl text-left text-white">What Do We Do?</h1>
            <div class="text-sm text-left md:w-[524px] text-white">
              Create healthy and eco-friendly environments for people around the
              globe.Co-Create the new earth and lifestyles Diversity and
              Freedom. Peace and Love for all.
            </div>
            <div class="md:space-x-5 space-x-1 text-left">
              <button
                class="
                  bg-sky-500
                  md:py-2
                  py-1
                  md:px-12
                  px-6
                  rounded-full
                  border-2 border-sky-500
                  text-white
                "
              >
                Whitepaper
              </button>
              <button
                class="
                  md:py-2
                  py-1
                  md:px-12
                  px-6
                  rounded-full
                  border-2 border-sky-500
                  text-white
                "
              >
                Play Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[#171010] md:pt-[100px]">
      <SparkInfo />
    </section>

    <section class="md:py-[100px]" :style="aboutBgImage">
      <About />
    </section>
    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SparkInfo from "@/components/SparkInfo.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Header,
    SparkInfo,
    About,
    Footer,
  },
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require("@/assets/background/banner_bg.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      whatDoWeDo: {
        backgroundImage: `url(${require("@/assets/background/what-do-we-do.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      aboutBgImage: {
        backgroundImage: `url(${require("@/assets/background/about_team_bg.png")})`,
      },
    };
  },
};
</script>

<style scoped>
.banner-bg {
  /* background-image: url(https://web3spark.io/assets/images/wave_shape4.png); */
  @apply overflow-hidden;
}
.banner_shape {
  @apply overflow-hidden;
}

.banner_section[class*="bg_"].banner_shape:before,
.banner_section[class*="bg-"].banner_shape:before {
  @apply bg-[#25697766];
}

.banner_shape:before {
  @apply absolute right-[-10%] top-0 bottom-0 bg-[#e1ffee] w-[60%] z-[1];
  content: "";
  -moz-transform: skewX(-10deg);
  -webkit-transform: skewX(-10deg);
  transform: skewX(-10deg);
  border-radius: 0 0 0px 100px;
}

.banner_section {
  @apply flex items-center flex-wrap p-0;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -ms-flex-wrap: wrap;
}

section {
  @apply px-0 relative;
}
</style>