<template>
  <div class="flex flex-col bck">
    <div class="absolute z-0 hidden lg:block parts">
      <Particles
        color="#2E8BAE"
        :particles-number="50"
        shape-type="circle"
        :particle-size="5"
        :particle-opacity="0.75"
        :line-opacity="1"
        :lines-distance="250"
        movement-direction="left"
        lines-color="#2E8BAE"
        :line-linked="true"
        :move-speed="1"
      />
      <Particles
        color="#2E8BAE"
        :particles-number="7"
        shape-type="circle"
        :particle-size="50"
        :particle-opacity="0.25"
        movement-direction="top"
        lines-color="#dedede"
        :line-linked="false"
        :move-speed="5"
      />
    </div>
    <div class="z-50 py-20 md:px-32">
      <h1 class="text-center text-white md:p-4 md:text-5xl">
        Portfolio and Past Work
      </h1>
      <div class="flex justify-center text-lg md:gap-x-5 tabs">
        <button class="text-gray-400 focus:text-white">All</button>
        <button
          class="text-gray-400 cursor-not-allowed focus:text-white"
          disabled
        >
          vividly
        </button>

        <button class="text-gray-400 focus:text-white">vReal</button>

        <button
          class="text-gray-400 cursor-not-allowed focus:text-white"
          disabled
        >
          Smarty
        </button>
      </div>
      <div
        v-for="dat in data"
        :key="dat.index"
        class="flex flex-wrap justify-around mx-auto mt-6  md:w-full lg:w-3/4 gap-y-3"
      >
        <div
          v-for="te in dat.folios"
          :key="te.index"
          class="w-full px-4 md:w-1/2 lg:w-1/3"
        >
          <Card :dum="te" />
        </div>
      </div>
      <div class="mt-10 text-center">
        <button
          class="px-4 text-white bg-transparent border-2 border-white rounded-lg "
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../Adgroup/Card.vue'
import Particles from '../Adgroup/Particles.vue'
export default {
  components: {
    Card,
    Particles,
  },
  data() {
    return {
      test: [],
    }
  },
  computed: {
    data() {
      return this.$store.state.port
    },
    da() {
      return this.test.slice(0, 6)
    },
    cit() {
      return this.$store.state.cities
    },
  },
  mounted() {
    this.$store.dispatch('getDummy')
    this.$store.dispatch('getCity')
  },
}
</script>

<style scoped>
.parts {
  width: 100%;
  height: 99%;
}
.bck {
  background-image: linear-gradient(
    0deg,
    rgba(221, 231, 144, 0.5) 0%,
    rgba(0, 189, 214, 0.5) 48%,
    rgba(0, 212, 255, 0.5) 100%
  );
  background-color: #02214d;
}
</style>
<style lang="scss" scoped>
div[id^='particles-instance-'] {
  height: 100% !important;
  width: 100% !important;
  position: absolute !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: 1 !important;
}
</style>
