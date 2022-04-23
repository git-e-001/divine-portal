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
</style>