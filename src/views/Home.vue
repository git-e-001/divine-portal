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
            flex flex-col
            items-center
            justify-center
            gap-5
            space-x-0 space-y-5
            lg:flex-row lg:space-x-5 lg:space-y-0
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
          <div
            class="
              flex flex-col
              justify-center
              space-y-5
              lg:items-start
              items-center
            "
          >
            <h1 class="text-3xl lg:text-left text-center text-white">
              What Do We Do?
            </h1>
            <div
              class="
                text-sm
                lg:text-left
                text-center
                md:w-[524px]
                w-full
                text-white
              "
            >
              Create healthy and eco-friendly environments for people around the
              globe.Co-Create the new earth and lifestyles Diversity and
              Freedom. Peace and Love for all.
            </div>
            <div class="space-x-1 text-left md:space-x-5">
              <button
                class="
                  px-6
                  py-1
                  text-white
                  border-2
                  rounded-full
                  bg-sky-500
                  md:py-2 md:px-12
                  border-sky-500
                "
              >
                Whitepaper
              </button>
              <button
                class="
                  px-6
                  py-1
                  text-white
                  border-2
                  rounded-full
                  md:py-2 md:px-12
                  border-sky-500
                "
              >
                Play Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[#171010]">
      <SparkInfo />
    </section>
    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SparkInfo from "@/components/SparkInfo.vue";
// import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Header,
    SparkInfo,
    // About,
    Footer,
  },
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require("@/assets/background/banner_bg.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      whatDoWeDo: {
        backgroundImage: `url(${require("@/assets/background/what-do-we-do.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    };
  },
};
</script>

<style scoped>
.banner-bg {
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