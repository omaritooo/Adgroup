<template>
  <div class="head">
    <div class="header">
      <div
        class="flex flex-col mx-auto text-5xl font-bold text-left gap-y-2 text"
      >
        Fully Integrated Media and Production Agency
        <span class="text-2xl font-thin"> Know More </span>
      </div>
      <nuxt-link :to="linker" class="arrow">
        <img src="/arrow.svg" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linker: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.head {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 48%,
      rgba(0, 0, 0, 0.253) 100%
    ),
    url('/vrheader.svg');
}
.text {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 40%;
  text-align: center;
}
.arrow {
  position: absolute;
  top: 80%;
  left: 47%;
  width: 90%;
}
</style>
