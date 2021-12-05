<template>
  <div class="relative overflow-x-hidden">
    <Header :linker="linker" />

    <Navbar class="absolute top-0 w-full" :imgsrc="src" />
    <About />
    <Accom />
    <Services />
    <Portf />
    <div class="">
      <img width="1920" src="/rect.svg" alt="" />
      <div
        class="flex flex-col px-8 py-10 pb-4 text-justify  lg:flex-row lg:px-20 lg:pt-20 justify-evenly bg-site-vblue"
      >
        <div class="flex flex-col text-lg text-white">
          <img class="w-32 h-32 mb-6" src="/vrlogo.svg" />
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
        <div class="order-first w-full mb-6 lg:mb-0 lg:w-1/3 lg:order-last">
          <form class="flex flex-col text-white gap-y-3">
            <input
              type="text"
              name=""
              placeholder="Name"
              class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-40 border-site-babyblue bg-opacity-40"
            />
            <div class="flex gap-x-3">
              <input
                type="text"
                name=""
                placeholder="Phone"
                class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-babyblue bg-opacity-40"
              />
              <input
                type="text"
                name=""
                placeholder="Email"
                class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-babyblue bg-opacity-40"
              />
            </div>
            <input
              type="text"
              name=""
              placeholder="Name"
              class="w-full p-4 placeholder-current bg-black rounded-t-lg  border-site-babyblue bg-opacity-40"
            />
            <textarea
              rows="6"
              class="w-full p-4 placeholder-current bg-black border rounded-t-lg  h-1/2 border-opacity-20 border-site-babyblue bg-opacity-40"
            ></textarea>
            <button
              class="w-full p-2 text-white placeholder-current border rounded-b-lg  bg-site-babyblue border-opacity-20"
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
import About from '../../components/ChildSites/Vreal/About.vue'
import Accom from '../../components/ChildSites/Vreal/Accomp.vue'
import Portf from '../../components/ChildSites/Portfolio.vue'
import Header from '../../components/ChildSites/Vreal/Header.vue'
import Services from '../../components/ChildSites/Vreal/Services.vue'
export default {
  components: {
    Navbar,
    About,
    Accom,
    Portf,
    Header,
    Services,
  },
  data() {
    return {
      src: '/vreal.svg',
      linker: '#aboutVR',
    }
  },
}
</script>

<style>
html {
  font-family: 'Poppins', sans-serif;
}
</style>
