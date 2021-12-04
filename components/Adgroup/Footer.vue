<template>
  <div>
    <img src="/rect.svg" alt="" />
    <div
      class="flex flex-col justify-around px-6 py-2 bg-black  md:flex-row md:px-20 md:py-6 lg:px-32 lg:py-6"
    >
      <div class="flex flex-col justify-start py-4 bg-black gap-y-2">
        <h1 class="py-4 text-xl font-bold text-left text-white lg:text-4xl">
          Contact Us
        </h1>
        <div
          class="flex flex-col text-xs font-bold  lg:text-base gap-y-3 lg:flex-row lg:gap-x-4"
        >
          <a class="flex gap-x-3">
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              size="sm"
              class="my-auto"
            />
            +20 226309636
          </a>
          <a class="flex gap-x-3">
            <font-awesome-icon
              :icon="['fas', 'link']"
              size="sm"
              class="my-auto"
            />
            CARE@ADGROUP.TECH
          </a>
          <a class="flex gap-x-3">
            <font-awesome-icon
              :icon="['fas', 'quote-left']"
              size="sm"
              class="my-auto"
            />

            REQUEST A QUOTE
          </a>
        </div>
      </div>
      <div>
        <img
          src="ad-logo.svg"
          class="h-20 align-middle md:h-40 md:p-4 md:my-auto"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
