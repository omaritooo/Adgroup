<template>
  <!-- <div class="z-50 px-20 py-32 bg-white grounder">
        <div class="flex px-32 justify-evenly">
            <div class="flex flex-col w-1/2 px-4 my-auto gap-y-4">
                <h1 class="text-4xl font-bold text-black">
                    Lorem Ipsum Dolor Sit
                </h1>
                <p class="flex-wrap w-1/2 text-xl text-black font-regular ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
            </div>
            <div class="flex flex-col items-center justify-center text-3xl text-center text-white bg-white rounded-full w-108 h-108 gap-y-4 test">
                <p class="p-4">Lorem ipsum dolor sit amet, consetetur </p>
                <button class="px-8 py-1 text-sm text-black uppercase bg-white rounded-md shadow-lg">
                       start
                   </button>
            </div>
        </div>
    </div> -->
  <div class="ruler">
    <div class="w-56 h-56 logo">
      <img src="/ad-logo.svg" alt="" />
    </div>
    <nuxt-link to="/vivildy" class="rule-cont">
      <div class="gradient"></div>
      <div class="rule1"></div>

      <div class="text-4xl text-white text">Vivildy</div>
    </nuxt-link>
    <nuxt-link to="/vreal" class="rule-cont">
      <div class="gradient"></div>
      <div class="rule1"></div>
      <div class="text-4xl text-white text">Vreal</div>
    </nuxt-link>
    <nuxt-link to="/smarty" class="rule-cont">
      <div class="gradient"></div>
      <div class="rule1"></div>
      <div class="text-4xl text-white shadow-lg text">Smart</div>
    </nuxt-link>
    <!-- <div class="home-bg">

        </div>
        <div class="home-sections">
<a class="home-section">
<div class="home-section-bg-img" style="background-image:url('https://media.gettyimages.com/photos/thierry-henry-celebrates-scoring-arsenals-2nd-goal-during-the-premier-picture-id1214933324?s=612x612')">

</div>
<div class="home-section-bg-grad">

</div>
<div class="home-section-bg-text">
Test
</div>
</a>
        </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 3%;
  left: 44%;
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
  height: 100vh;
  width: 33vw;
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
</style>
