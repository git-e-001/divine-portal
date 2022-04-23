<template>
  <Home />
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300&display=swap');
#app {
  @apply text-center;
  font-family: Montserrat, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  @apply w-full px-[15px] mx-auto;
}

@media only screen and (min-width: 576px) {
  .container {
    max-width: 540px !important;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    max-width: 720px !important;
  }
}
@media only screen and (min-width: 992px) {
  .container {
    max-width: 960px !important;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1140px !important;
  }
}
@media only screen and (min-width: 1400px) {
  .container {
    max-width: 1320px !important;
  }
}
</style>
