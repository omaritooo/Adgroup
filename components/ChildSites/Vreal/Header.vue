<template>
  <div class="head">
    <video autoplay muted loop>
      <source
        src="https://thumbs.gfycat.com/BestLightheartedCygnet-mobile.mp4"
        type="video/mp4"
      />
    </video>

    <div class="text-white header">
      <!-- <video autoplay muted loop>
        <source
          src="https://thumbs.gfycat.com/BestLightheartedCygnet-mobile.mp4"
          type="video/mp4"
        />
      </video> -->
      <div
        class="
          flex flex-col
          mx-auto
          text-sm
          font-bold
          text-left
          md:text-xl
          lg:text-5xl
          gap-y-2
          text
        "
      >
        Fully Integrated Media and Production Agency
        <span class="text-base font-thin md:text-xl lg:text-2xl">
          Know More
        </span>
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
video {
  position: absolute;
  top: 0;
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
@media screen and (max-width: 480px) {
  .arrow {
    position: absolute;
    top: 88%;
    left: 45%;
    width: 10%;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 30%;
    width: 40%;
    text-align: center;
  }
  video {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 40vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 40vh;
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
    top: 80%;
    left: 45%;
    width: 10%;
  }
  video {
    position: absolute;
    top: 12%;
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
@media screen and (max-width: 1366px) and (min-width: 769) {
  .arrow {
    position: absolute;
    top: 70%;
    left: 41%;
    width: 20%;
  }
}
@media screen and (min-width: 1440px) and (min-height: 900px) {
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
    overflow-x: hidden;
    z-index: -1;
    padding: 0;
  }
  .head {
    position: relative;
    height: 120vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 120vh;
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
</style>
     