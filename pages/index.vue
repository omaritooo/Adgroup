<template>
  <div class="overflow-x-hidden">
    <Navbar class="block lg:hidden" />
    <Header id="vid" class="md:block" />
    <Video />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Adgroup/Header.vue'
import Video from '../components/Adgroup/Video.vue'
import Portfolio from '../components/Adgroup/Portfolio.vue'
import Footer from '../components/Adgroup/Footer.vue'
import Navbar from '../components/Adgroup/Navbar.vue'

export default {
  components: {
    Header,
    Video,
    Portfolio,
    Footer,
    Navbar,
  },
  scrollToTop: true,
}
</script>
<style>
html {
  font-family: 'Poppins', sans-serif;
}
</style>
