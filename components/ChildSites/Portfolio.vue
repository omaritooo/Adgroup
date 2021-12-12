<template>
  <div class="flex flex-col bg-white">
    <div class="z-50 py-20 md:px-32">
      <h1 class="text-center text-red-800 md:p-4 md:text-5xl">Portfolio</h1>

      <div v-if="!toggle">
        <div
          class="flex flex-wrap justify-around mx-auto mt-6 md:w-full lg:w-3/4 gap-y-3"
        >
          <div
            v-for="(d, index) in data"
            :key="d.index"
            class="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div v-if="index < 6">
              <Card :dum="d" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggle">
        <div
          class="flex flex-wrap justify-around mx-auto mt-6 md:w-full lg:w-3/4 gap-y-3"
        >
          <div
            v-for="d in data"
            :key="d.index"
            class="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div>
              <Card :dum="d" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <button
          class="px-4 bg-transparent border-2 rounded-lg text-site-vblue border-site-vblue"
          @click="toggle = !toggle"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Card from '../Adgroup/Card.vue'
export default {
  components: {
    Card,
  },
  filters: {
    reverse(value) {
      return value.slice().reverse()
    },
  },
  data() {
    return {
      test: [],
      toggle: false,
    }
  },
  computed: {
    data() {
      return this.$store.state.porto.slice().reverse()
    },
  },
  mounted() {
    this.$store.dispatch('getPorts')
    // axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
    //   this.test = res.data
    // })
  },
}
</script>

<style scoped>
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
