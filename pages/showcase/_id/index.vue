<template>
  <div class="flex flex-col p-10 bg-blue-400 gap-y-4">
    <div>
      {{test.userId}}
    </div>
    <div>
      {{test.id}}
    </div>
    <div>
      {{test.title}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      id: this.$route.params.id,
      test: []
    }
  },
 async created(){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`);
    this.test = res.data;
  }
}
</script>

<style>

</style>