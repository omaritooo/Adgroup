<template>
  <div class="block py-4 text-white bg-black bckg bg-opacity-40">
    <nav
      class="relative flex flex-wrap items-center justify-around px-10  bg-blueGray-500"
    >
      <div class="container flex flex-wrap items-center justify-evenly">
        <div
          class="relative flex justify-between w-full px-4  lg:w-auto lg:static lg:block lg:justify-around"
        >
          <a class="inline-block mr-4 font-bold text-white uppercase">
            <img
              class="w-20 h-20 my-auto md:w-32 md:h-10"
              :src="imgsrc"
              alt=""
            />
          </a>
          <button
            class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer  lg:hidden focus:outline-none"
            type="button"
          >
            <button
              class="relative w-10 h-10 text-gray-500 focus:outline-none"
              @click="showMenu = !showMenu"
            >
              <span class="sr-only">Open main menu</span>
              <div
                class="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2  left-1/2 top-1/2"
              >
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-5
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{
                    'rotate-45': showMenu,
                    ' -translate-y-1.5': !showMenu,
                  }"
                ></span>
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-5
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{ 'opacity-0': showMenu }"
                ></span>
                <span
                  aria-hidden="true"
                  class="
                    block
                    absolute
                    h-0.5
                    w-5
                    bg-current
                    transform
                    transition
                    duration-500
                    ease-in-out
                  "
                  :class="{
                    '-rotate-45': showMenu,
                    ' translate-y-1.5': !showMenu,
                  }"
                ></span>
              </div>
            </button>
          </button>
        </div>
        <div
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="lg:mr-auto md:items-start lg:items-end lg:flex lg:flex-grow"
        >
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ul
              class="flex flex-col justify-end mr-auto list-none  lg:mr-auto md:gap-y-4 md:gap-x-7 lg:flex-row"
            >
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    ref="home"
                    class="w-full mt-2 ml-auto text-gray-300 uppercase  md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                  >
                    Home
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link :to="about" href="#"
                  ><button
                    class="w-full px-2 mt-2 ml-auto text-gray-300 uppercase  md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                  >
                    About Us
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link :to="contact" href="#"
                  ><button
                    class="w-full px-2 mt-2 ml-auto text-gray-300 uppercase  md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                  >
                    Contact Us
                  </button></nuxt-link
                >
              </li>
              <li class="block nav-item lg:hidden">
                <nuxt-link to="/request-a-demo" href="#"
                  ><button
                    class="w-full px-2 mt-2 ml-auto text-gray-300 uppercase  md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
                  >
                    Request Demo
                  </button></nuxt-link
                >
              </li>
            </ul>
          </transition>
        </div>
        <div class="hidden lg:flex">
          <nuxt-link to="/request-a-demo" href="#"
            ><button
              class="w-full px-2 mt-2 ml-auto text-gray-300 uppercase  md:py-1 md:px-2 active text-md hover:text-white hover-underline-animation"
            >
              Request Demo
            </button></nuxt-link
          >
          <nuxt-link to="/">
            <img
              class="hidden my-auto md:w-32 md:h-10 lg:block"
              src="/ad-logo.svg"
              alt=""
            />
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: String,
    about: String,
    contact: String,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  mounted() {
    // eslint-disable-next-line dot-notation
    this.$refs['home'].focus()
  },
  method: {
    meth() {},
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style scoped>
.bckg {
  font-family: 'Poppins', sans-serif;
}
button {
  outline: none;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
  border-style: dashed;
}
.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  border-style: dashed;
  left: 0;
  background-color: #4cd392;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  border-style: dashed;
  transform-origin: bottom left;
}
.hover-underline-animation:focus:after {
  text-decoration: underline;
  background-color: #4cd392;
}
.test {
  text-decoration: none;
  transition: background-size 0.3s ease;
}
.test:hover {
  text-decoration: underline;
}
</style>
