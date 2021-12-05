<template>
  <div class="block text-white bg-black bg-opacity-70 bckg">
    <nav
      class="relative flex flex-wrap items-center px-20  justify-evenly bg-blueGray-500"
    >
      <div class="container flex flex-wrap items-center px-20 justify-evenly">
        <div
          class="relative flex w-full px-4  justify-evenly lg:w-auto lg:static lg:block lg:justify-start"
        >
          <a
            class="inline-block mr-4 text-sm font-bold leading-relaxed text-white uppercase  whitespace-nowrap"
          >
            <img
              class="w-16 h-16 my-auto md:w-32 md:h-20"
              src="/smartly - logo copy.svg"
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
          class="items-center md:items-start lg:flex lg:flex-grow"
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
              class="flex flex-col ml-auto list-none opacity-100  lg:ml-0 gap-y-4 gap-x-7 md:justify-end lg:flex-row"
            >
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    ref="home"
                    class="px-4 py-2 text-base text-gray-400 uppercase  active hover:text-white"
                  >
                    Home
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    class="px-4 py-2 text-base text-gray-400 uppercase  active hover:text-white"
                  >
                    About
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    class="px-4 py-2 text-base text-gray-400 uppercase  active hover:text-white"
                  >
                    Courses
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    class="px-4 py-2 text-base text-gray-400 uppercase  active hover:text-white"
                  >
                    Contact
                  </button></nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="" href="#"
                  ><button
                    class="px-4 py-2 text-base text-gray-100 uppercase rounded-lg  bg-site-babyblue active hover:text-white"
                  >
                    Sign Up
                  </button></nuxt-link
                >
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: String,
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
    meth() {
      // if (this.$store.state.partnerT == false)
      // {
      //   this.$store.commit('partnerT')
      // }
      // else if(this.$store.state.partnerT == true)
      // {
      //   this.$store.commit('partnerF')
      // }
      // this.$store.commit('partnerT')
    },
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
