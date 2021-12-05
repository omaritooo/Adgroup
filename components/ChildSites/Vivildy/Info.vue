<template>
  <div
    class="flex flex-col justify-center py-12  lg:flex-row gap-x-3 imgur lg:px-72"
  >
    <div
      class="flex flex-col order-last py-12 mx-auto my-auto  lg:mx-0 lg:order-first lg:w-3/5 lg:px-8 gap-y-10"
    >
      <h1 class="text-3xl font-bold text-center">
        What do we aim to accomplish?
      </h1>
      <p
        class="flex-wrap text-xl font-normal text-center text-white  lg:text-justify"
      >
        Our aim is simply infinite innovation, presenting new technologies and
        methods to the market by always evolving and updating our ways, so we
        can deliver optimum quality in the shortest duration possible while
        preserving maximum efficiency and offering the best prices.
      </p>
    </div>

    <div class="w-auto mx-auto my-auto lg:mx-0">
      <img class="w-52 h-52" src="/vivlog.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.imgur {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(84, 125, 191, 0.6), rgba(84, 125, 191, 0.6)),
    url('https://i.imgur.com/yrBBNkb.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
