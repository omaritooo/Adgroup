<template>
  <div class="flex flex-col bg-site-vblue">
    <Nav :logo="log" />
    <div
      class="relative flex items-center min-h-screen p-5 overflow-hidden  min-w-screen lg:p-10"
    >
      <div
        class="relative w-full p-10 mx-auto text-gray-800 bg-white rounded shadow-xl  max-w-7xl lg:p-20 md:text-left"
      >
        <div class="flex-col items-center -mx-10 md:flex">
          <div class="w-full mb-10 md:mb-0">
            <iframe
              class="relative z-10 w-full mx-auto rounded-md"
              :src="test.video_url"
              frameborder="0"
            ></iframe>
            {{ selectedservice }}
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
                  class="px-2 py-2 text-white transition-colors duration-100 rounded-md opacity-75  bg-site-vblue hover:opacity-100 hover:text-gray-200"
                  @click="modalshow"
                >
                  Request A Demo
                </button>
              </div>
            </div>
          </div>
          <div class="w-1/2 py-10 mx-auto">
            <div
              class="container mx-auto space-y-2  h-1/2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3"
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
    </div>
    <Modal :text="text" :popup="pop" @close="modelo">
      <form class="flex flex-col w-full mx-auto text-white gap-y-3">
        <input
          v-model="form.name"
          type="text"
          name=""
          placeholder="Name"
          class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
        />
        <div class="flex gap-x-3">
          <input
            v-model="form.phone"
            type="text"
            name=""
            placeholder="Phone"
            class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
          />
          <input
            v-model="form.email"
            type="text"
            name=""
            placeholder="Email"
            class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
          />
        </div>
        <input
          v-model="form.company_name"
          type="text"
          name=""
          placeholder="Company Name"
          class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
        />
        <input
          v-model="form.date"
          type="datetime-local"
          name=""
          placeholder="Date"
          class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
        />
        <textarea
          v-model="form.message"
          rows="6"
          class="w-full p-4 placeholder-current bg-black border rounded-t-lg  h-1/2 border-opacity-20 border-site-gold bg-opacity-10"
        ></textarea>
        <button
          class="w-full p-2 text-white placeholder-current border rounded-b-lg  bg-site-gold border-opacity-20"
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
      text: '',
      pop: false,
      test: {},
      log: {
        img: '/vreal.svg',
        route: '/vreal',
      },
      // selectedservice: this.id,
      selected: {},
      form: {
        name: '',
        email: '',
        company_name: '',
        phone: '',
        message: '',
        service_id: this.id,
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
    tet() {
      if (this.test.company_id === 1) {
        return 'vividly'
      } else if (this.test.company_id === 2) {
        return 'vreal'
      } else {
        return 'smartly'
      }
    },
  },
  mounted() {},
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
        this.form.date == null ||
        this.form.company_name == null ||
        this.form.email === '' ||
        this.form.name === '' ||
        this.form.phone === '' ||
        this.form.message === '' ||
        this.form.date === '' ||
        this.form.company_name === ''
      ) {
        this.$store.commit('pop')
        this.text = 'Errorrrr'
      } else {
        const data = new FormData()
        data.append('email', this.form.email)
        data.append('name', this.form.name)
        data.append('phone', this.form.phone)
        data.append('message', this.form.message)
        data.append('service_id', this.id)
        data.append('entity', this.tet)
        data.append('demo_date', this.form.date)
        data.append('company_name', this.form.company_name)
        const config = {
          header: {
            'Content-Type': 'multipart/form-data;',
          },
        }
        axios
          .post('https://api.modernegy.tech/api/v1/request-demo', data, config)
          .then(
            this.$store.commit('pop'),
            (this.text = `Thank you, ${this.form.name}. We'll get back to you shortly`)
          )
          .catch((err) => console.log(err.response))
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
    popper() {
      this.$store.commit('pop')
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 1366px) {
  iframe {
    height: 55vh;
    width: 85vw;
  }
}

@media screen and (min-width: 1367px) {
  iframe {
    height: 55vh;
    width: 60vw;
  }
}

@media screen and (max-width: 769px) and (max-height: 1025px) {
  iframe {
    height: 50vh;
    width: 80vw;
  }
}
@media screen and (max-width: 400px) {
  iframe {
    height: 30vh;
    width: 70vw;
  }
}
</style>
