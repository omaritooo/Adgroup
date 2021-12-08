<template>
  <div class="flex flex-col bg-white gap-y-4">
    <Nav />
    <div
      class="flex flex-col w-3/4 mx-auto my-10 text-black bg-gray-300 rounded-t-lg  lg:px-0 lg:w-1/4"
    >
      <div class="rounded-t-lg">
        <img class="rounded-t-lg" :src="test.thumbnail_path" alt="" />
      </div>

      <div class="p-10">
        {{ test.title }}
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../../../components/Adgroup/Navbar.vue'
import Footer from '../../../components/Adgroup/Footer.vue'

export default {
  components: {
    Footer,
    Nav,
  },
  data() {
    return {
      id: this.$route.params.id,
      test: [],
    }
  },
  async created() {
    const res = await axios.get(
      `https://api.modernegy.tech/api/v1/folios/${this.id}`
    )
    this.test = res.data.data
  },
}
</script>

<style></style>
