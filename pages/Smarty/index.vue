<template>
  <div class="relative overflow-x-hidden">
    <Header />
    <Navbar class="absolute top-0 w-full" />
  </div>
</template>

<script>
import Header from '../../components/ChildSites/Smarty/Header.vue'
import Navbar from '../../components/ChildSites/Smarty/Navbar.vue'

export default {
  components: {
    Header,
    Navbar,
  },
}
</script>

<style></style>
