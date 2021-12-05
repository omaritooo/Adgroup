<template>
  <div class="bg-white">
    <div
      class="flex flex-col justify-center px-8 py-10 text-left  lg:px-20 lg:flex-row"
    >
      <img class="w-full p-10 lg:w-1/3" src="/build1.png" alt="" />
      <div
        style="
          background-image: url('/vrlogo.svg');
          background-repeat: no-repeat;
        "
        class="flex flex-col w-full py-10 my-auto text-black align-middle  md:w-full lg:w-1/3 bg-opacity-20 gap-y-3"
      >
        <h1 class="text-5xl font-bold">What’s Vividly</h1>
        <p class="text-lg">
          We are a fully integrated media and production agency and we are here
          to introduce a new scoop of services for the media and advertisement
          market, contributing advanced technologies for media, Smart display
          solutions, advertisement, and production
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.test {
  width: auto;
}
.test::before {
  background: url('/vrlogo.svg');
  background-repeat: no-repeat;
}
</style>
