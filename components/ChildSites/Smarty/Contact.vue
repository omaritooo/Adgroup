<template>
  <div class="md:p-20">
    <div class="flex flex-col justify-center mx-auto md:flex-row lg:gap-x-10">
      <div class="w-max">
        <img class="w-1/2 md:w-full" src="/Recruiting.svg" alt="" />
      </div>
      <div class="flex-col hidden w-1/2 px-10 my-auto md:flex gap-y-3 md:w-max">
        <h1 class="text-2xl text-site-gold">Subscrible now</h1>
        <div class="flex flex-col w-full md:w-3/5 gap-y-3">
          <p class="text-5xl text-blue-900">
            Get every single update you will get
          </p>
          <div class="relative w-full lg:w-3/4">
            <input
              class="w-full px-4 py-4 border border-gray-400 rounded-md  focus:outline-none"
              placeholder="enter email address"
              type="text"
            />
            <button
              class="absolute px-2 py-2 text-black bg-yellow-300 rounded-lg  lg:px-6 right-2 top-2"
            >
              Test
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full px-10 my-auto md:hidden gap-y-3 md:w-max"
      >
        <h1 class="text-2xl text-site-gold">Subscrible now</h1>
        <div class="flex flex-col w-full md:w-3/5 gap-y-3">
          <p class="w-full text-lg text-blue-900 md:text-5xl">
            Get every single update you will get
          </p>
          <div class="relative w-full lg:w-3/4">
            <input
              class="w-full px-4 py-4 border border-gray-400 rounded-md  focus:outline-none"
              placeholder="enter email address"
              type="text"
            />
            <button
              class="absolute px-2 py-2 text-black bg-yellow-300 rounded-lg  lg:px-6 right-2 top-2"
            >
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
