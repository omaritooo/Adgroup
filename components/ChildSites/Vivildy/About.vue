<template>
  <div
    id="aboutViv"
    class="relative px-4 pt-40 pb-16 bg-site-gold lg:bg-white lg:pl-72"
  >
    <div class="hidden lg:block">
      <div class="test"></div>
      <div class="abso bg-site-gold">
        <div
          class="px-2 py-6  lg:px-24 md:px-12 lg:py-12 2xl:pl-52 2xl:pr-96 bg-site-gold"
        >
          <div>
            <h1 class="py-2 text-5xl font-bold">What’s Vividly</h1>
            <p class="py-2 text-xl font-normal lg:w-104">
              We are a fully integrated media and production agency and we are
              here to introduce a new scoop of services for the media and
              advertisement market, contributing advanced technologies for
              media, Smart display solutions, advertisement, and production
            </p>
            <button
              class="flex p-2 my-2 transition-all duration-75 ease-in-out border border-white  rounded-b-xl gap-x-3 hover:bg-white hover:text-yellow-300 hover:border-yellow-300 hover:border"
            >
              Brochure PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <img src="/translogo.svg" class="logo" alt="" />
    </div>
    <div class="flex justify-center mx-auto bg-site-gold lg:hidden">
      <div class="mx-auto">
        <h1 class="py-2 text-2xl font-bold lg:text-5xl">What’s Vividly</h1>
        <p class="py-2 text-base font-normal lg:text-xl lg:w-104">
          We are a fully integrated media and production agency and we are here
          to introduce a new scoop of services for the media and advertisement
          market, contributing advanced technologies for media, Smart display
          solutions, advertisement, and production
        </p>
        <button
          class="flex p-2 my-2 transition-all duration-75 ease-in-out border border-white  rounded-b-xl gap-x-3 hover:bg-white hover:text-yellow-300 hover:border-yellow-300 hover:border"
        >
          Brochure PDF
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.test {
  width: 647px;
  height: 521px;
  background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(84, 125, 191, 0.3),
      rgba(84, 125, 191, 0.3)
    ),
    /* bottom, image */ url('/adit.png');
}
.abso {
  position: absolute;
  top: 30%;
  right: 0;
  height: auto;
  z-index: 1000;
}
.logo {
  position: absolute;
  top: 40%;
  left: 40%;
  z-index: 1002;
}

@media screen and (max-width: 400px) {
  .test {
    width: 200px;
    height: 200px;
    background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
        rgba(84, 125, 191, 0.3),
        rgba(84, 125, 191, 0.3)
      ),
      /* bottom, image */ url('/adit.png');
  }
  .abso {
    position: absolute;
    top: 30%;
    right: 0;
    height: auto;
    z-index: 1000;
  }
  .logo {
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 1002;
  }
}
@media screen and (max-width: 768px) and (min-width: 401px) {
}
</style>
