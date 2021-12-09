<template>
  <div>
    <img width="1920" src="/rect.svg" alt="" />
    <div
      class="flex flex-col justify-around px-4 pt-20 text-justify bg-black  sm:px-6 2xl:px-20 md:flex-row lg:justify-evenly"
    >
      <div
        class="flex flex-col order-last mr-10 text-lg text-white md:order-first"
      >
        <img class="w-48 h-32" src="/ad-logo.svg" />
        <div class="flex flex-col py-6 gap-y-3">
          <a class="flex">
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              class="my-auto mr-8"
            />+20 226309636 | +20 01013645828
          </a>
          <a class="flex">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="my-auto mr-8"
            /><span>INFO@ADGROUP.TECH</span>
          </a>
          <a class="flex">
            <font-awesome-icon
              :icon="['fas', 'map-marker-alt']"
              size="lg"
              class="my-auto mr-8"
            /><span> 9 Ritaj Compound, Fifth settlement, New Cairo</span>
          </a>
        </div>
        <div class="flex py-6 gap-x-4">
          <a href="https://www.facebook.com/ADGrouptech" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
          </a>
          <a href="https://twitter.com/ADGroup2021" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ad-group-technology"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size="lg"
              class="my-auto transition ease-in-out  hover:-translate-y-1 hover:shadow-xl hover:scale-110"
            />
          </a>
        </div>
        <div class="flex flex-col py-4">
          <span>© 2021 <span class="font-bold">AD Group</span></span>
          <span>(Ad Group Co.) All Rights Reserved.</span>
        </div>
      </div>
      <div class="mb-4 md:mb-0">
        <form class="flex flex-col text-white gap-y-3">
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
            placeholder="Name"
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
