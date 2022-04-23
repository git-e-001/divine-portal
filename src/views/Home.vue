<template>
  <div>
    <section
      id="home_section"
      class="banner-bg full_screen"
      :style="bgImage"
    >
        <Header />
        <Banner />
    </section>
    <section class="bg-[#171010]">
      <SparkInfo />
    </section>

    <section class="md:py-[100px]" :style="aboutBgImage">
      <About />
    </section>
    <Footer/>
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
    Footer
  },
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require('@/assets/background/banner_bg.png')})`
      },
      aboutBgImage: {
        backgroundImage: `url(${require('@/assets/background/about_team_bg.png')})`
      }
    };
  },
};
</script>

<style scoped>
.banner-bg{
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

.full_screen,
.full_screen .carousel-item {
  /* @apply min-h-[100vh]; */
}

section {
  @apply px-0 relative;
}
</style>