<template>
  <div class="relative overflow-x-hidden bg-white">
    <Header id="shome" />
    <Navbar class="absolute top-0 w-full" />
    <About id="sabout" />
    <Grad id="scourses" />
    <div class="back2">
      <Info />
    </div>
    <div class="back">
      <Port class="back" />
    </div>
    <Contact id="scontact" />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/ChildSites/Smarty/Header.vue'
import Navbar from '../../components/ChildSites/Smarty/Navbar.vue'
import About from '../../components/ChildSites/Smarty/About.vue'
import Grad from '../../components/ChildSites/Smarty/Grad.vue'
import Port from '../../components/ChildSites/Portfolio.vue'
import Contact from '../../components/ChildSites/Smarty/Contact.vue'
import Footer from '../../components/ChildSites/Smarty/Footer.vue'
import Info from '../../components/ChildSites/Smarty/Intro.vue'

export default {
  components: {
    Header,
    Navbar,
    About,
    Grad,
    Port,
    Contact,
    Footer,
    Info,
  },
}
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}
.back {
  background-image: url('/elips.svg');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.back2 {
  background-image: url('/Group 797.svg');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
