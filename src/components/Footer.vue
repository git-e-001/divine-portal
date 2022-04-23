<template>
  <div
    class="
      bg-[#C00100]
      relative
      z-[1]
      block
      footer_dark footer_shape
      shape_dark
    "
  >
    <div class="py-[50px] shadow-md">
      <div class="container">
        <div class="xl:w-[83%] lg:w-[78%] w-[70%] mx-auto text-white">
          <div class="footer-img">
            <img class="h-[200px]" src="@/assets/logo.png" />
          </div>
          <img
            class="
              absolute
              left-0
              bottom-0
              md:w-[16%]
              lg:w-[13%]
              xl:w-[12%]
              w-[16%]
              2xl:h[85%]
              md:h-[78%]
              h-[35%]
            "
            src="@/assets/background/left_footer.png"
          />
          <img
            class="
              right-img
              absolute
              right-0
              bottom-0
              md:w-[16%]
              lg:w-[13%]
              xl:w-[12%]
              w-[16%]
              md:h-[78%]
              h-[35%]
            "
            src="@/assets/background/left_footer.png"
          />
          <h5 class="pt-4 mb-6 text-[16px] font-bold uppercase">
            THE LUCKIEST TOKEN IN THE WORLD.
          </h5>
          <p class="mb-4 text[14px] font-['Roboto']">
            The Content shared on this website is for information purpose only
            and, thus, should not be considered as financial advice.
            Trading/Investing is risky and you should never invest more than you
            can afford to lose. Cryptocurrencies are risky.
          </p>
          <ul
            class="
              flex
              md:flex-row
              flex-col
              items-center
              justify-center
              py-4
              text[14px]
              font-['Roboto']
              md:space-x-5 md:space-y-0
              space-y-3
              no-underline
              bg-transparent
            "
          >
            <li class="relative">
              <a href="#">Home</a>
            </li>
            <li class="relative">
              <a href="#">Whitepaper</a>
            </li>
            <li class="relative">
              <a class="whitespace-nowrap" href="#">How To Buy</a>
            </li>
            <li class="relative">
              <a class="whitespace-nowrap" href="#">Buy Now</a>
            </li>
            <li class="relative footer-icon">
              <a href="#"
                ><img
                  class="w-[30px] h-[30px]"
                  src="@/assets/images/telegram.png"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-white py-7 border-t border-black">
      <p class="m-0 text-center md:text-xl text-xs font-['Roboto'] text-[14px]">
        © {{ new Date().getFullYear() }} All Rights Reserved By Kute Koi
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer-img {
  text-align: -webkit-center;
}
.footer-icon {
  text-align: -webkit-center;
}

.right-img {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
/* .footer_shape:before {
  @apply absolute top-0 left-0 right-0 h-[120px];
  content: "";
  background-image: url(https://www.propeller-protocol.com/assets/images/wave_shape2.png);
  background-position: top center;
  background-repeat: no-repeat;
}
.shape_dark:before {
  background-image: url(https://web3spark.io/assets/images/wave_shape4.png);
} */
</style>