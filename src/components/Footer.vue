<template>
  <div class="" :style="bgImage">
    <div class="container pt-48">
      <div class="xl:w-[83%] lg:w-[78%] w-[70%] mx-auto text-white">
        <h5 class="pt-4 mb-6 md:text-4xl text-3xl">Divine Portals</h5>
        <h5 class="pt-4 mb-6 text-[16px] font-bold uppercase">
          THE SMARTEST TOKEN IN THE WORLD.
        </h5>
        <p class="mb-4 text[14px] font-['Roboto'] lg:px-40">
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
    <div class="text-white py-5 border-t border-sky-500">
      <p class="m-0 text-center md:text-xl text-xs font-['Roboto'] text-[14px]">
        © {{ new Date().getFullYear() }} All Rights Reserved By Divine Portals
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require("@/assets/background/earth.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    };
  },
};
</script>