<template>
  <div
    class="relative flex flex-col py-10 mx-auto text-black bg-white px-14 lg:flex-row md:p-2 lg:py-20 lg:px-20 test"
  >
    <div
      class="z-10 flex flex-col px-4 py-6 gap-x-5 md:px-12 md:flex-row 2xl:px-32 md:justify-start lg:justify-evenly lg:gap-x-5"
    >
      <div class="mx-auto wrapper">
        <img
          ref="img"
          :class="{ '': !toggle, hidden: toggle }"
          class="mx-auto"
          src="/test.png"
          alt=""
        />
        <iframe
          id="player"
          ref="iframe"
          class="rounded-lg"
          loading="lazy"
          :class="{ '': toggle, hidden: !toggle }"
          src="https://www.youtube.com/embed/d7lCZ0rpH3o"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <button
          id="play"
          ref="play"
          :class="{ '': !toggle, hidden: toggle }"
          class="play-btn"
          @click="activator"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83.829"
            height="83.829"
            viewBox="0 0 83.829 83.829"
          >
            <path
              id="Icon_material-play-circle-outline"
              data-name="Icon material-play-circle-outline"
              d="M36.531,63.776,61.68,44.914,36.531,26.053ZM44.914,3A41.914,41.914,0,1,0,86.829,44.914,41.93,41.93,0,0,0,44.914,3Zm0,75.446A33.531,33.531,0,1,1,78.446,44.914,33.576,33.576,0,0,1,44.914,78.446Z"
              transform="translate(-3 -3)"
              fill="#fafafa"
              opacity="0.81"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex flex-col w-full my-auto md:w-1/2 lg:w-3/4 2xl:w-1/2 gap-y-4"
      >
        <h1 class="font-bold text-2r">About Us</h1>
        <p
          class="flex-wrap md:text-sm lg:text-lg md:w-full lg:w-3/4 font-regular"
        >
          AD GROUP is tech company using advanced technologies to provide the different sectors and industries 
such as real estate, education, media with solutions that can help them achieve their goals and increase 
their revenues. we are studying the industries, discovering their suffering and their needs to develop 
effective solutions that can help them in their marketing and sales.
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
  background-image: linear-gradient(
      0deg,
      rgba(221, 231, 144, 0.25) 0%,
      rgba(0, 189, 214, 0.25) 48%,
      rgba(0, 212, 255, 0.25) 100%
    ),
    url('/circles.png');
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
