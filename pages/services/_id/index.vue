<template>
  <div class="flex flex-col bg-site-vblue">
    <Nav :logo="log" />
    <div
      class="
        relative
        flex
        items-center
        min-h-screen
        p-5
        overflow-hidden
        min-w-screen
        lg:p-10
      "
    >
      <div
        class="
          relative
          w-full
          p-10
          mx-auto
          text-gray-800
          bg-white
          rounded
          shadow-xl
          max-w-7xl
          lg:p-20
          md:text-left
        "
      >
        <div class="items-center -mx-10 md:flex">
          <div class="w-full px-10 mb-10 md:w-1/2 md:mb-0">
            <div
              class="
                relative
                bg-gradient-to-r
                from-[#0a90e9]
                via-[#73a2ee]
                to-[#a1f0b5]
                max-w-min
              "
            >
              <!-- <img
                src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png"
                class="relative z-10 w-full"
                alt=""
              /> -->
              <iframe
                class="
                  relative
                  z-10
                  w-full
                  -translate-x-4 -translate-y-4
                  bg-opacity-50
                  rounded-md
                "
                :src="test.video_url"
                frameborder="0"
              ></iframe>
              <!-- <div
                class="absolute z-0 border-4 border-site-vblue top-10 bottom-10 left-10 right-10"
              ></div> -->
            </div>
          </div>
          <div class="w-full px-10 md:w-1/2">
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
                  class="
                    px-2
                    py-2
                    text-white
                    transition-colors
                    duration-100
                    rounded-md
                    opacity-75
                    bg-site-vblue
                    hover:opacity-100 hover:text-gray-200
                  "
                  @click="modalshow"
                >
                  Request A Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-10">
          <!-- <client-only>
            <carousel
              class="lg:w-1/2"
              :per-page-custom="[
                [350, 1],
                [768, 2],
                [1024, 4],
              ]"
            >
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
              <slide>
                <img class="" :src="test.thumbnail_path" alt="" />
              </slide>
            </carousel>
          </client-only> -->
          <div
            class="
              container
              w-1/2
              mx-auto
              space-y-2
              h-1/2
              lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3
            "
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
      </div>
    </div>
    <!-- <iframe style="height: 50vh" :src="test.video_url"> </iframe>

    <section class="text-gray-400 body-font">
      <div
        class="container flex flex-col items-center justify-center px-5 py-24 mx-auto "
      >
        <img
          class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
          alt="hero"
          :src="test.thumbnail_path"
        />
        <div class="w-full text-center lg:w-2/3">
          <h1
            class="mb-4 text-3xl font-medium text-site-vblue title-font sm:text-4xl"
          >
            {{ test.title }}
          </h1>
          <p class="mb-8 text-xl leading-relaxed">{{ test.description }}</p>
          <div class="flex justify-center">
            <button
              class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Button
            </button>
            <button
              class="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
            >
              Button
            </button>
          </div> 
        </div>
      </div>
    </section> -->
    <!-- <section class="text-gray-600 body-font">
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
      >
        <div class="w-5/6 h-full mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
           <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> 
          <client-only
            ><div class="mb-6">
              <iframe
                class="rounded-md"
                :src="test.video_url"
                frameborder="0"
              ></iframe></div
          ></client-only>
          <Button
            class="p-2 mx-auto text-gray-100 rounded-lg bg-site-vblue"
            @click="modalshow"
          >
            Request A demo
          </Button>
        </div>
        <div
          class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
        >
          <h1
            class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
          >
            {{ test.title }}
          </h1>
          <p class="mb-20 leading-relaxed lg:text-xl">
            {{ test.description }}
          </p>
          <div class="flex items-end justify-center w-full md:justify-start">
            <div class="relative w-2/4 mr-4 lg:w-full xl:w-1/2">
              <label for="hero-field" class="text-sm leading-7 text-gray-600"
                >Placeholder</label
              >
              <input
                id="hero-field"
                type="text"
                name="hero-field"
                class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
              />
            </div>
            <button
              class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Button
            </button>
          </div>
          <p class="w-full mt-2 mb-8 text-sm text-gray-500">
            Neutra shabby chic ramps, viral fixie.
          </p>
          <div class="flex lg:flex-row md:flex-col">
            <button
              class="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path
                  d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                ></path>
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs text-gray-600">GET IT ON</span>
                <span class="font-medium title-font">Google Play</span>
              </span>
            </button>
            <button
              class="inline-flex items-center px-5 py-3 mt-0 ml-4 bg-gray-100 rounded-lg lg:ml-4 md:ml-0 md:mt-4 lg:mt-0 hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path
                  d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                ></path>
                <path
                  d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                ></path>
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs text-gray-600">Download on the</span>
                <span class="font-medium title-font">App Store</span>
              </span>
            </button> 
            <client-only>
              <carousel
                :per-page-custom="[
                  [350, 1],
                  [768, 2],
                  [1024, 4],
                ]"
              >
                <slide class="w-full">
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
                <slide>
                  <img class="" :src="test.thumbnail_path" alt="" />
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </section> -->
    <Modal @close="modelo">
      <form class="flex flex-col w-full mx-auto text-white gap-y-3">
        <input
          v-model="form.name"
          type="text"
          name=""
          placeholder="Name"
          class="
            w-full
            p-4
            placeholder-current
            bg-black
            border
            rounded-t-lg
            border-opacity-20 border-site-gold
            bg-opacity-10
          "
        />
        <div class="flex gap-x-3">
          <input
            v-model="form.phone"
            type="text"
            name=""
            placeholder="Phone"
            class="
              w-full
              p-4
              placeholder-current
              bg-black
              border
              rounded-t-lg
              border-opacity-20 border-site-gold
              bg-opacity-10
            "
          />
          <input
            v-model="form.email"
            type="text"
            name=""
            placeholder="Email"
            class="
              w-full
              p-4
              placeholder-current
              bg-black
              border
              rounded-t-lg
              border-opacity-20 border-site-gold
              bg-opacity-10
            "
          />
        </div>
        <input
          v-model="form.company_name"
          type="text"
          name=""
          placeholder="Company Name"
          class="
            w-full
            p-4
            placeholder-current
            bg-black
            border
            rounded-t-lg
            border-opacity-20 border-site-gold
            bg-opacity-10
          "
        />
        <input
          v-model="form.date"
          type="datetime-local"
          name=""
          placeholder="Date"
          class="
            w-full
            p-4
            placeholder-current
            bg-black
            border
            rounded-t-lg
            border-opacity-20 border-site-gold
            bg-opacity-10
          "
        />
        <textarea
          v-model="form.message"
          rows="6"
          class="
            w-full
            p-4
            placeholder-current
            bg-black
            border
            rounded-t-lg
            h-1/2
            border-opacity-20 border-site-gold
            bg-opacity-10
          "
        ></textarea>
        <button
          class="
            w-full
            p-2
            text-white
            placeholder-current
            border
            rounded-b-lg
            bg-site-gold
            border-opacity-20
          "
          @click.prevent="postman"
        >
          <font-awesome-icon
            :icon="['fab', 'telegram-plane']"
            size="lg"
            class="my-auto"
          />
          Send
        </button>
      </form>
    </Modal>
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
      showModal: false,

      test: {},
      log: {
        img: '/vreal.svg',
        route: '/vreal',
      },
      selectedservice: null,
      selected: {},
      form: {
        name: '',
        email: '',
        company_name: '',
        phone: '',
        message: '',
        service_id: this.selectedservice,
        entity: '',
        date: '',
      },
      drop: [
        {
          name: 'vividly',
          value: 1,
        },
        {
          name: 'vReal',
          value: 2,
        },
        {
          name: 'Smartly',
          value: 3,
        },
      ],
      logo: {
        img: '/ad-logo.svg',
        route: '/',
      },
    }
  },
  computed: {
    mode() {
      return this.$store.getters.getMode
    },
  },
  async created() {
    const res = await axios.get(
      `https://api.modernegy.tech/api/v1/services/${this.id}`
    )
    this.test = res.data.data
  },
  methods: {
    postman() {
      if (
        this.form.email == null ||
        this.form.name == null ||
        this.form.phone == null ||
        this.form.message == null ||
        this.selectedservice == null ||
        this.selected.value == null ||
        this.form.date == null ||
        this.form.company_name == null
      ) {
        console.log('error')
      } else {
        const data = new FormData()
        data.append('email', this.form.email)
        data.append('name', this.form.name)
        data.append('phone', this.form.phone)
        data.append('message', this.form.message)
        data.append('service_id', this.selectedservice)
        data.append('entity', this.selected.value)
        data.append('demo_date', this.form.date)
        data.append('company_name', this.form.company_name)
        // const config = {
        //   header: {
        //     'Content-Type': 'multipart/form-data;',
        //   },
        // }
        // axios
        //   .post('http://modernegy.adgroup.tech', data)
        //   .then((res) => console.log(res))
        //   .catch((err) => console.log(err))
        console.log(data)
        this.form.name = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.message = ''
        this.form.company_name = ''
        this.form.date = ''
      }
    },
    modelo() {
      this.$store.commit('modelo')
    },
    modalshow() {
      this.$store.commit('modelo')
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  iframe {
    height: 30vh;
    width: 20vw;
  }
}
</style>
