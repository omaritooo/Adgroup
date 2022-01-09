<template>
  <div
    class="relative flex flex-col py-10 mx-auto text-white bg-white  px-14 lg:flex-row md:p-2 lg:py-32 lg:px-32 test"
  >
    <div
      class="z-10 flex flex-col px-4 py-6  gap-x-5 md:px-12 md:flex-row 2xl:px-32 md:justify-start lg:justify-evenly lg:gap-x-5"
    >
      <div
        class="flex flex-col w-full px-10 my-auto  lg:mr-auto md:w-1/2 lg:w-3/4 2xl:w-1/2 gap-y-4"
      >
        <h1 class="font-bold text-2r">About Us</h1>
        <p
          class="flex-wrap  md:text-sm lg:text-lg md:w-full lg:w-3/4 font-regular"
        >
          AD GROUP is a tech company using advanced technologies to provide the
          different sectors and industries such as real estate, education, media
          with solutions in order to help them achieve their goals and increase
          their revenues. we are studying the industries, discovering their
          suffering and their needs to develop effective solutions that can
          improve their marketing and sales.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//  import Particles from "./Particles.vue";
export default {
  components: {
    // Particles
  },
  data() {
    return {
      toggle: false,
    }
  },
  mounted() {},
  methods: {
    activator() {
      // eslint-disable-next-line no-console
      this.toggle = !this.toggle
      // eslint-disable-next-line dot-notation
      this.$refs['iframe'].src += '?autoplay=1'
    },
  },
}
</script>

<style scoped>
.parts {
  width: 100%;
  height: 90%;
}
.test {
  height: 100%;
  width: 100%;
  background-image: url('/banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.wrapper {
  position: relative;
  width: 30vw;
}
iframe {
  width: 100%;
  height: 100%;
}

.wrapper img {
  max-width: 30vw;
  height: auto;
}

.play-btn {
  position: absolute;
  z-index: 666;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 0;
}

.play-btn:hover {
  cursor: pointer;
}

.play-btn:focus {
  outline: 0;
}
@media screen and (max-width: 768px) {
  .wrapper {
    position: relative;
    width: 40vw;
  }
  .wrapper img {
    max-width: 40vw;
    height: auto;
  }
  iframe {
    width: 40%;
    height: 40%;
  }
  .play-btn {
    position: absolute;
    z-index: 666;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: 0;
  }

  .play-btn:hover {
    cursor: pointer;
  }

  .play-btn:focus {
    outline: 0;
  }
}
@media screen and (max-width: 400px) {
  .wrapper {
    position: relative;
    width: 60vw;
  }
  .wrapper img {
    max-width: 60vw;
    height: auto;
  }
  iframe {
    width: 60%;
    height: 60%;
  }
  .play-btn {
    position: absolute;
    z-index: 666;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: 0;
  }

  .play-btn:hover {
    cursor: pointer;
  }

  .play-btn:focus {
    outline: 0;
  }
}
</style>

<style lang="scss" scoped>
div[id^='particles-instance-'] {
  height: 100% !important;
  width: 100% !important;
  position: absolute !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: 1 !important;
}
</style>
