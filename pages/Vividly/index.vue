<template>
  <div class="relative overflow-x-hidden bg-black">
    <Header id="vivabout" :linker="linker" />

    <Navbar
      class="absolute top-0 w-full"
      :about="about"
      :contact="contact"
      :imgsrc="logo"
    />
    <About />
    <Info />
    <Services />
    <Portfolio id="vivcontact" />
    <div>
      <img width="1920" src="/rect.svg" alt="" />
      <div
        class="flex flex-col justify-around px-4 pt-20 text-justify  sm:px-6 2xl:px-20 md:flex-row lg:justify-evenly bg-site-babyblue"
      >
        <div
          class="flex flex-col order-last mr-10 text-lg  md:order-first text-site-gold"
        >
          <img class="w-32 h-32 mb-6" src="/vivlog.svg" />
          <div class="flex flex-col py-6 gap-y-3">
            <a class="flex">
              <font-awesome-icon
                :icon="['fas', 'phone-alt']"
                class="my-auto mr-8"
              />+2 123 532 678 | +2 123 532 678
            </a>
            <a class="flex">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="my-auto mr-8"
              /><span>Info@vividly.com</span>
            </a>
            <a class="flex">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                size="lg"
                class="my-auto mr-8"
              /><span>Fifth Settlement Copond Retaj (AD Group)</span>
            </a>
          </div>
          <div class="flex py-6 gap-x-4">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
            <font-awesome-icon
              :icon="['fab', 'snapchat']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
          </div>
          <div class="flex flex-col py-4">
            <span>© 2021 <span class="font-bold">VIVIDLY</span></span>
            <span>(Ad Group Co.) All Rights Reserved.</span>
          </div>
        </div>
        <div class="mb-4 md:mb-0">
          <form class="flex flex-col text-site-gold gap-y-3">
            <input
              type="text"
              name=""
              placeholder="Name"
              class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
            />
            <div class="flex gap-x-3">
              <input
                type="text"
                name=""
                placeholder="Phone"
                class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
              />
              <input
                type="text"
                name=""
                placeholder="Email"
                class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
              />
            </div>
            <input
              type="text"
              name=""
              placeholder="Name"
              class="w-full p-4 placeholder-current bg-black rounded-t-lg  bg-opacity-10"
            />
            <textarea
              rows="6"
              class="w-full p-4 placeholder-current bg-black border rounded-t-lg  h-1/2 border-opacity-20 border-site-gold bg-opacity-10"
            ></textarea>
            <button
              class="w-full p-2 text-white placeholder-current border rounded-b-lg  bg-site-gold border-opacity-20"
            >
              <font-awesome-icon
                :icon="['fab', 'telegram-plane']"
                size="lg"
                class="my-auto"
              />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/ChildSites/Navbar.vue'
import About from '../../components/ChildSites/Vividly/About.vue'
import Info from '../../components/ChildSites/Vividly/Info.vue'
import Services from '../../components/ChildSites/Vividly/Services.vue'
import Portfolio from '../../components/ChildSites/Portfolio.vue'
import Header from '../../components/ChildSites/Vreal/Header.vue'
export default {
  components: {
    Navbar,
    About,
    Info,
    Services,
    Portfolio,
    Header,
  },
  data() {
    return {
      logo: '/vivlogo.svg',
      linker: '#aboutViv',
      contact: '#vivcontact',
      about: '#vivabout',
    }
  },
  head() {
    return {
      title: 'Vividly',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'site2',
          name: 'Vividly',
          content:
            'We are a fully integrated media and production agency and we are here to introduce a new scoop of services for the media and advertisement market, contributing advanced technologies for media, Smart display solutions, advertisement, and production',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/viv.ico' }],
    }
  },
}
</script>

<style>
html {
  font-family: 'Poppins', sans-serif;
}
</style>
