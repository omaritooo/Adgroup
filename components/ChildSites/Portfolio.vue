<template>
  <div class="flex flex-col bg-white">
    <div class="z-50 px-32 py-20 text-black">
      <h1 class="p-4 text-5xl text-center text-black">
        Portfolio and Past Work
      </h1>
      <div class="flex justify-center text-gray-600 gap-x-5 tabs">
        <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered"
          >All</a
        >
        <a
          class="font-bold text-yellow-800 text-opacity-50  tab tab-bordered focus:tab-active"
          >Sekulen</a
        >
        <a
          class="font-bold text-yellow-800 text-opacity-50  tab tab-bordered focus:tab-active"
          >Echeveris</a
        >
        <a
          class="font-bold text-yellow-800 text-opacity-50  tab tab-bordered focus:tab-active"
          >Koboi</a
        >
        <a
          class="font-bold text-yellow-800 text-opacity-50  tab tab-bordered hover:tab-active"
          >Sansevierrie</a
        >
      </div>
      <div class="flex flex-wrap justify-around w-3/4 mx-auto mt-6 gap-y-3">
        <div v-for="te in da" :key="te.index" class="w-1/3 px-4">
          <Card :dum="te" />
        </div>
      </div>
      <div class="mt-10 text-center">
        <button
          class="px-4 text-white border-2 border-white rounded-lg  bg-site-babyblue"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../Adgroup/Card.vue'
export default {
  components: {
    Card,
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
  },
  mounted() {
    this.$store.commit('getDummy')
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      this.test = res.data
    })
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
