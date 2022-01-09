<template>
  <div class="overflow-y-hidden head">
    <video autoplay muted loop style="height: 120vh; top: 5px">
      <source src="https://modernegy.tech/v2_5.mp4" type="video/mp4" />
    </video>

    <div class="text-white header">
      <!-- <video autoplay muted loop>
        <source
          src="https://thumbs.gfycat.com/BestLightheartedCygnet-mobile.mp4"
          type="video/mp4"
        />
      </video> -->
      <div
        class="flex flex-col mx-auto text-sm font-thin text-left  md:text-xl lg:text-5xl gap-y-2 text"
      >
        The New Revolution of Real estate Technology
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
.text {
  position: absolute;
  bottom: 40%;
  left: 30%;
  width: 40%;
  text-align: center;
}
.arrow {
  position: absolute;
  bottom: 2%;
  left: 49%;
  width: 4%;
}
.head {
  position: relative;
  height: 100vh;
  width: 100vw;
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
    rgba(0, 0, 0, 0.712) 0%,
    rgba(0, 0, 0, 0.719) 48%,
    rgba(0, 0, 0, 0.562) 100%
  );
}
@media screen and (max-width: 480px) {
  .arrow {
    position: absolute;
    bottom: 2%;
    left: 45%;
    width: 10%;
  }

  .text {
    position: absolute;
    top: 40%;
    left: 30%;
    width: 40%;
    text-align: center;
  }
  video {
    position: absolute;
    top: -5px;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 25vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 25vh;
    width: 100%;
    overflow-x: hidden;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.712) 0%,
      rgba(0, 0, 0, 0.719) 48%,
      rgba(0, 0, 0, 0.562) 100%
    );
  }
}
@media screen and (max-width: 768px) and (min-width: 481px) {
  .arrow {
    position: absolute;
    top: 70%;
    left: 45%;
    width: 7%;
  }
  video {
    position: absolute;
    top: -10px;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 45vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 45vh;
    width: 100%;
    overflow-x: hidden;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.712) 0%,
      rgba(0, 0, 0, 0.719) 48%,
      rgba(0, 0, 0, 0.562) 100%
    );
  }
}
@media screen and (max-width: 1366px) and (min-width: 769px) and (max-height: 768px) {
  .arrow {
    position: absolute;
    top: 70%;
    left: 46%;
    width: 7%;
  }
  video {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 100vh;
    width: 100vw;
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
      rgba(0, 0, 0, 0.712) 0%,
      rgba(0, 0, 0, 0.719) 48%,
      rgba(0, 0, 0, 0.562) 100%
    );
  }
}
/* @media screen and (min-width: 1440px) and (min-height: 900px) {
  .arrow {
    position: absolute;
    top: 70%;
    left: 46%;
    width: 7%;
  }
  video {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100vw;
    height: 120vh;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 115vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 115vh;
    width: 100%;
    overflow-x: hidden;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.712) 0%,
      rgba(0, 0, 0, 0.719) 48%,
      rgba(0, 0, 0, 0.562) 100%
    );
  }
} */
</style>
     