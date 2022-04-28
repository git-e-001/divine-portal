<template>
  <div
    class="
      container
      sticky
      top-0
      z-50
      w-full
      mt-5
      dark-mode:text-gray-200 dark-mode:bg-gray-800
      md:mt-0
    "
  >
    <div
      class="
        flex flex-col
        max-w-screen-xl
        mx-auto
        md:items-center md:justify-between md:flex-row
      "
    >
      <div class="text-white md:py-4 lg:p-4 flex items-center justify-between">
        <a
          href="#"
          class="
            text-lg
            font-semibold
            tracking-widest
            text-gray-900
            uppercase
            rounded-lg
            dark-mode:text-white
            focus:outline-none focus:shadow-outline
            hidden
            md:block
          "
        >
          <img class="w-32 rounded-full" src="@/assets/logo.png" alt="" />
        </a>
        <button
          class="
            self-center
            rounded-lg
            md:hidden
            focus:outline-none focus:shadow-outline
          "
          @click="openNav = !openNav"
        >
          <img
            v-if="!openNav"
            class="h-[17px] w-[26px]"
            src="@/assets/menu-icon.svg"
            alt=""
          />
          <img
            v-else
            class="h-[17px] w-[26px]"
            src="@/assets/cross.svg"
            alt=""
          />
        </button>
        <h2 class="text-xl font-medium md:hidden">Divine Portals</h2>
      </div>
      <nav
        class="
          flex-col
          self-start
          flex-grow
          hidden
          lg:pr-48
          md:flex md:justify-end md:flex-row
          space-x-7
        "
        :class="[
          scrollPosition > 50
            ? 'fixed top-0 right-0 z-10 w-[100vw] bg-[#0b0b0b] mt-0 p-5 pr-[3%] xl:pr-[4%] 2xl:pr-[15.5%] transition-all ease-in-out duration-300'
            : 'mt-6 lg:mt-10 pb-4 md:pb-0',
        ]"
      >
        <a
          class="
            self-center
            text-white
            rounded-lg
            md:mt-0
            hover:text-[#27E278]
            focus:text-[#27E278] focus:outline-none focus:shadow-outline
          "
          href="/home"
          >Home</a
        >
        <a
          class="
            self-center
            items-center
            flex
            text-white
            rounded-lg
            md:mt-0
            hover:text-[#27E278]
            focus:text-[#27E278] focus:outline-none focus:shadow-outline
          "
          href="/whitePaper"
          >Whitepaper
        </a>
        <a
          class="
            self-center
            whitespace-nowrap
            text-white
            rounded-lg
            md:mt-0
            hover:text-[#27E278]
            focus:text-[#27E278] focus:outline-none focus:shadow-outline
          "
          href="/purchase-method"
          >How to Buy</a
        >
        <a
          class="
            self-center
            whitespace-nowrap
            text-white
            rounded-lg
            md:mt-0
            hover:text-[#27E278]
            focus:text-[#27E278] focus:outline-none focus:shadow-outline
          "
          href="/purchase"
          >Buy Now</a
        >
      </nav>

      <!-- For Mobile Header -->
      <nav v-if="openNav" class="md:hidden w-[95%] absolute mt-[30px]">
        <div
          class="
            navbar-collapse
            justify-content-end
            mCustomScrollbar
            _mCS_1
            collapse
            show
            mCS_no_scrollbar
          "
          id="navbarSupportedContent"
          style="top: 60px; display: block"
        >
          <div
            id="mCSB_1"
            class="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
            style="max-height: none"
            tabindex="0"
          >
            <div
              id="mCSB_1_container"
              class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
              style="position: relative; top: 0; left: 0"
              dir="ltr"
            >
              <ul class="navbar-nav">
                <li class="text-left">
                  <a
                    class="
                      px-4
                      py-2
                      mt-2
                      text-white
                      rounded-lg
                      md:mt-0
                      hover:text-[#27E278]
                      focus:text-[#27E278]
                      focus:outline-none
                      focus:shadow-outline
                    "
                    href="/home"
                    >Home</a
                  >
                </li>

                <li class="text-left">
                  <a
                    class="
                      self-center
                      px-4
                      py-2
                      mt-2
                      whitespace-nowrap
                      text-white
                      rounded-lg
                      md:mt-0
                      hover:text-[#27E278]
                      focus:text-[#27E278]
                      focus:outline-none
                      focus:shadow-outline
                    "
                    href="/purchase-method"
                    >How to Buy</a
                  >
                </li>
                <li class="text-left">
                  <a
                    class="
                      self-center
                      px-4
                      py-2
                      mt-2
                      whitespace-nowrap
                      text-white
                      rounded-lg
                      md:mt-0
                      hover:text-[#27E278]
                      focus:text-[#27E278]
                      focus:outline-none
                      focus:shadow-outline
                    "
                    href="/purchase"
                    >Buy Now</a
                  >
                </li>
              </ul>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              class="
                mCSB_scrollTools mCSB_1_scrollbar
                mCS-dark
                mCSB_scrollTools_vertical
              "
              style="display: none"
            >
              <div class="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  class="mCSB_dragger"
                  style="
                    position: absolute;
                    min-height: 30px;
                    top: 0px;
                    height: 0px;
                    display: block;
                  "
                >
                  <div class="mCSB_dragger_bar" style="line-height: 30px"></div>
                </div>
                <div class="mCSB_draggerRail"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      openNav: false,
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.navbar-collapse {
  background-color: #101227;
  padding: 10px;
}
</style>