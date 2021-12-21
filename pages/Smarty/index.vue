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
  scrollToTop: true,
  head() {
    return {
      title: 'Smarty',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'site3',
          name: 'Smarty',
          content:
            'The world has turned into a large complex cloud of information, and the way we consume data and information changed too this change is influencing our daily life and our children are adjusting much better with this change they perceive technology better than we do, Smarty is here to offer the most advanced education methods yet the most simplistic by crafting AR and VR curriculums to schools and universities that will make the learning process more estimable, engaging and more fun',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/sfavicon.ico' }],
    }
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
