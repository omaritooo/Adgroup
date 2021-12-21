<template>
  <div class="bg-whtie">
    <Navbar :logo="logo" />
    <div class="flex flex-col px-20 py-20 mx-auto gap-y-5 bckg">
      <div class="flex justify-center gap-x-4">
        <div class="flex justify-between gap-x-4">
          <label class="my-auto text-sm" for=""> Select Platform:</label>
          <select v-model="selected" class="max-w-xs select focus:outline-none">
            <option v-for="d in drop" :key="d.index" :value="d">
              {{ d.name }}
            </option>
          </select>
        </div>

        <select
          v-show="selected.value == 2"
          v-if="selected.value == 2"
          v-model="selectedservice"
          class="max-w-xs select focus:outline-none"
        >
          <option v-for="da in dat" :key="da.index" :value="da.id">
            <div v-if="da.company_id == selected.value">{{ da.title }}</div>
            <div v-else>Coming soon</div>
          </option>
        </select>
        <select
          v-show="(selected.value == 1) | (selected.value == 3)"
          else
          disabled
          class="max-w-xs pointer-events-none select focus:outline-none"
        >
          <option>
            <div>Coming soon</div>
          </option>
        </select>

        <select
          v-show="selected.value == null"
          else
          disabled
          class="max-w-xs pointer-events-none select focus:outline-none"
        >
          <option>
            <div>Select Service</div>
          </option>
        </select>
      </div>
      <form class="flex flex-col w-1/3 mx-auto text-white gap-y-3">
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
    </div>
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios'
import Navbar from '../../components/ChildSites/Navbar.vue'
import Footer from '../../components/Adgroup/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
  scrollToTop: true,
  data() {
    return {
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
    dat() {
      return this.$store.state.services
    },
  },
  mounted() {
    this.$store.dispatch('getServices')
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
  },
}
</script>

<style scoped>
.bckg {
  background-color: #00285c;
  font-family: 'Poppins', sans-serif;
}
</style>