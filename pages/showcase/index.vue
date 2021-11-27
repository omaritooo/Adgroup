<template>
  <div class="flex flex-col gap-y-4">
  
      <div v-for="te in test" :key="te.index" class="p-4 text-black bg-white" @click="$router.push(`/showcase/${te.id}`)">{{te}}</div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        test: []
      }
    },
    mounted() {
      console.log(this.$route.fullPath)
    },
    async created() {
      // const config = {
      //   headers: {
      //     Accept: "application/json"
      //   }
      // }
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      this.test = res.data
    }
  }
</script>

<style>

</style>