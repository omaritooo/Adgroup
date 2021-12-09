<template>
  <div class="bg-whtie">
    <Navbar />
    <div class="flex flex-col px-20 py-20 mx-auto gap-y-5 bckg">
      <div class="flex">
        <select class="w-1/3 max-w-xs mx-auto select focus:outline-none">
          <option>vividly</option>
          <option>vReal</option>
          <option>Smartly</option>
        </select>
      </div>
      <form class="flex flex-col w-1/3 mx-auto text-white gap-y-3">
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
          placeholder="Company Name"
          class="w-full p-4 placeholder-current bg-black border rounded-t-lg  border-opacity-20 border-site-gold bg-opacity-10"
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
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Adgroup/Navbar.vue'
import Footer from '../../components/Adgroup/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.bckg {
  background-color: #00285c;
  font-family: 'Poppins', sans-serif;
}
</style>