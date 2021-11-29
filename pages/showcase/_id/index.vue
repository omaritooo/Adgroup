<template>
  <div class="flex flex-col bg-white gap-y-4">
    <Nav/>
    <div class="flex flex-col w-1/4 mx-auto my-10 text-black bg-gray-300 rounded-t-lg">
      <div class="rounded-t-lg ">
        <img class="rounded-t-lg " :src="test.url" alt="">
      </div>
     
      <div class="p-10">
        {{test.title}}
      </div>
     
    </div>
          <Footer/>

  </div>
</template>

<script>
import axios from 'axios'
import Nav from "../../../components/Adgroup/Navbar.vue"
import Footer from '../../../components/Adgroup/Footer.vue'

export default {
  components:{
    Footer,
    Nav
  },
  data(){
    return {
      id: this.$route.params.id,
      test: []
    }
  },
 async created(){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`);
    this.test = res.data;
  }
}
</script>

<style>

</style>