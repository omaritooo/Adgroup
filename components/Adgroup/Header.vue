<template>
  <div>
    <div class="hidden lg:block">
      <div class="hidden ruler lg:block group">
        <div
          class="w-32 h-32 transition-opacity duration-150 opacity-100  logo group-hover:opacity-0"
        >
          <img class="" src="/logo_black.png" alt="" />
        </div>
        <div
          class="w-48 h-48 transition-opacity duration-150 opacity-0  logo group-hover:opacity-100"
        >
          <img class="" src="/ad-logo.svg" alt="" />
        </div>
        <nuxt-link to="/vivildy" class="rule-cont">
          <div class="gradient"></div>
          <div class="rule1"></div>
          <div class="text-4xl text-white text">Vivildy</div>
        </nuxt-link>
        <nuxt-link to="/Vreal" class="rule-cont">
          <div class="gradient"></div>
          <div class="rule2"></div>
          <div class="text-4xl text-white text">Vreal</div>
        </nuxt-link>
        <nuxt-link to="/smarty" class="rule-cont">
          <div class="gradient"></div>
          <div class="rule3"></div>
          <div class="text-4xl text-white shadow-lg text">Smart</div>
        </nuxt-link>
      </div>
    </div>
    <div class="block px-10 py-20 bg-black lg:hidden">
      <div class="flex justify-around">
        <nuxt-link to="/Vreal" class="w-max">
          <img src="/vreal.svg" class="w-20 h-20" alt="" />
        </nuxt-link>
        <nuxt-link to="/vivildy" class="">
          <img src="/viv_logo.svg" class="w-20 h-20" alt="" />
        </nuxt-link>
        <nuxt-link to="/smarty" class="">
          <img src="/smartly - logo copy.svg" class="w-20 h-20" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 3%;
  left: 46%;
  z-index: 200;
}
.ruler {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
}
.rule-cont {
  position: relative;
  height: 100vh;
  width: 33vw;
  background-repeat: no-repeat;
  background: black;
  overflow-x: hidden;
}
.gradient {
  z-index: 50;
  opacity: 0;
  position: absolute;
  display: block;
  transform: scaleY(0);
  top: 0;
  left: 0;
  height: 100vh;
  width: 33vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
    0deg,
    rgba(255, 13, 255, 1) 0%,
    rgba(0, 253, 255, 1) 100%
  );
}
.text {
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 1000;
  text-shadow: 2px 2px 4px #000000;
}
.rule-cont:hover .gradient {
  position: absolute;
  top: 0;
  opacity: 0.51;
  transform: scaleY(1);

  left: 0;
  height: 100vh;
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  -moz-transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  -webkit-transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  /* background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.24) 0%, rgba(0, 189, 214, 0.24) 48%, rgba(0, 212, 255, 0.24) 100%); */
}
.rule1 {
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 33vw;
  opacity: 0;
  transform: translateY(-50px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  background: url('https://i.imgur.com/3ABOZR1.png');
}

.rule-cont:hover .rule1 {
  position: absolute;
  top: 0;
  opacity: 1;
  transform: translateY(0px) scale(1);

  left: 0;
  height: 100vh;
  width: 33vw;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -moz-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -webkit-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
}
.rule2 {
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 33vw;
  opacity: 0;
  transform: translateY(-50px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  background: url('https://i.imgur.com/HlGUV4X.png');
}

.rule-cont:hover .rule2 {
  position: absolute;
  top: 0;
  opacity: 1;
  transform: translateY(0px) scale(1);

  left: 0;
  height: 100vh;
  width: 33vw;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -moz-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -webkit-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
}

.rule-cont:hover .logo {
  display: none;
}
.rule3 {
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 33vw;
  opacity: 0;
  transform: translateY(-50px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  background: url('https://i.imgur.com/fizXvKo.png');
}

.rule-cont:hover .rule3 {
  position: absolute;
  top: 0;
  opacity: 1;
  transform: translateY(0px) scale(1);

  left: 0;
  height: 100vh;
  width: 33vw;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -moz-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  -webkit-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
}
@media screen and (max-width: 480px) {
  .ruler {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
  }
  .rule-cont {
    position: relative;
    height: 33vh;
    width: 100vw;
    background-repeat: no-repeat;
    background: black;
    overflow-x: hidden;
  }
  .gradient {
    z-index: 50;
    opacity: 0;
    position: absolute;
    display: block;
    transform: scaleY(0);
    top: 0;
    left: 0;
    height: 100vh;
    width: 33vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(
      0deg,
      rgba(255, 13, 255, 1) 0%,
      rgba(0, 253, 255, 1) 100%
    );
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000;
    text-shadow: 2px 2px 4px #000000;
  }
  .rule-cont:hover .gradient {
    position: absolute;
    top: 0;
    opacity: 0.51;
    transform: scaleY(1);

    left: 0;
    height: 100vh;
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    -moz-transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    -webkit-transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    /* background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.24) 0%, rgba(0, 189, 214, 0.24) 48%, rgba(0, 212, 255, 0.24) 100%); */
  }
  .rule1 {
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
    height: 33vh;
    width: 100vw;
    opacity: 0;
    transform: translateY(-50px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    background: url('https://media.gettyimages.com/photos/thierry-henry-celebrates-scoring-arsenals-2nd-goal-during-the-premier-picture-id1214933324?s=612x612');
  }
  .rule-cont:hover .rule1 {
    position: absolute;
    top: 0;
    opacity: 1;
    transform: translateY(0px) scale(1);

    left: 0;
    height: 100vh;
    width: 33vw;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
    -moz-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
    -webkit-transition: transform 0.75s ease-in-out, opacity 0.75s ease-in-out;
  }
  .logo {
    display: none;
    position: absolute;
    top: 3%;
    left: 44%;
    z-index: 200;
  }
}
</style>
