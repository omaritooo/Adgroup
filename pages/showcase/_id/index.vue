<template>
  <div class="flex flex-col bg-site-vblue gap-y-4">
    <Nav :imgsrc="logo" />
    <div
      class="relative flex items-center min-h-screen p-5 overflow-hidden  min-w-screen lg:p-10"
    >
      <div
        class="relative w-full p-10 mx-auto text-gray-800 bg-white rounded shadow-xl  max-w-7xl lg:p-20 md:text-left"
      >
        <section class="text-gray-600 body-font">
          <div
            class="container flex flex-col items-center justify-center px-5 py-6 mx-auto "
          >
            <img
              class="object-cover object-center w-5/6 mb-10 rounded  lg:w-2/6 md:w-3/6"
              alt="hero"
              :src="test.thumbnail_path"
            />
            <div class="w-full text-center lg:w-2/3">
              <h1
                class="mb-4 text-3xl font-medium text-gray-900  title-font sm:text-4xl"
              >
                {{ test.title }}
              </h1>
              <p class="mb-8 leading-relaxed">
                {{ test.description }}
              </p>
              <!-- <div class="flex justify-center">
                <button
                  class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  Button
                </button>
                <button
                  class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
                >
                  Button
                </button>
              </div> -->
            </div>
          </div>

          <!-- <div
            v-for="t in test.image_folios"
            :key="t.index"
            class="flex flex-col gap-y-4"
          >
            <div class="bg-black">
              <img :src="t.image_path" alt="" />
            </div>
          </div> -->
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-4 mx-auto">
            <!-- <div class="flex flex-col w-full mb-20 text-center">
              <h1 class="mb-4 text-2xl font-medium text-gray-900 title-font">
                OUR TEAM
              </h1>
              <p class="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div> -->
            <div class="flex flex-wrap -m-4">
              <div
                v-for="t in test.image_folios"
                :key="t.index"
                class="p-4 lg:w-1/4 md:w-1/2"
              >
                <div
                  class="flex flex-col items-center h-full text-center text-black "
                >
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg "
                    :src="t.image_path"
                  />
                </div>
              </div>
              <!-- <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg "
                    src="https://dummyimage.com/201x201"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Holden Caulfield
                    </h2>
                    <h3 class="mb-3 text-gray-500">UI Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg "
                    src="https://dummyimage.com/202x202"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Atticus Finch
                    </h2>
                    <h3 class="mb-3 text-gray-500">UI Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="flex flex-col items-center h-full text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg "
                    src="https://dummyimage.com/203x203"
                  />
                  <div class="w-full">
                    <h2 class="text-lg font-medium text-gray-900 title-font">
                      Henry Letham
                    </h2>
                    <h3 class="mb-3 text-gray-500">UI Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                          ></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                          ></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </section>
        <!-- <div class="flex-col items-center -mx-10 md:flex">
          <div class="w-full mb-10 md:mb-0">
            <iframe
              class="relative z-10 w-full mx-auto rounded-md"
              :src="test.video_url"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="flex flex-col mt-4 lg:flex-row">
          <div class="w-full my-auto md:w-1/2">
            <div class="mb-10">
              <h1 class="mb-5 text-4xl font-bold uppercase">
                {{ test.title }}
              </h1>
              <p class="text-lg">
                {{ test.description }}
              </p>
            </div>
            <div>
              <div class="inline-block align-bottom">
                <button
                  class="px-2 py-2 text-white transition-colors duration-100 rounded-md opacity-75 bg-site-vblue hover:opacity-100 hover:text-gray-200"
                  @click="modalshow"
                >
                  Request A Demo
                </button>
              </div>
            </div>
          </div>
          <div class="w-1/2 py-10 mx-auto">
            <div
              class="container mx-auto space-y-2 h-1/2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3"
            >
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
              <div class="w-full rounded">
                <img class="" :src="test.thumbnail_path" alt="" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../../../components/ChildSites/Navbar.vue'
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
      logo: '/ad-logo.svg',
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
