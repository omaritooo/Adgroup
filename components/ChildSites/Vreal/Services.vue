<template>
  <div class="relative bg-black text-site-vblue video-container ">
    <div>

    </div>
        <h1 class="absolute top-0 z-50 w-full py-10 mx-auto text-6xl font-bold text-center left-2/5">
          Services
        
        </h1>
     
     
       <client-only>
                 <div class="w-full mx-auto ">
                   <video class="brightness-25" autoplay muted loop width="1920px">
        <source src="https://modernegy.tech/light_bg.webm" type="video/mp4" />
    </video>
              <carousel class="w-full clip-text-video__text" :navigation-enabled="false" navigation-next-label="<span class='text-white'>▶</span>" navigation-prev-label="<span class='text-white rotate-90'>◀</span>" :scroll-per-page="true" :navigation-click-target-size="15" pagination-active-color="#000000" pagination-color="#547DBF" :per-page-custom="[[350, 1], [768, 2], [1024,3]]" :pagination-enabled="false" :center-mode="true" :autoplay="true" :autoplay-timeout="3000"   :autoplay-hover-pause="true" :loop="true">
               
                <slide  v-for="(service,index) in services" :key="service.index"  >
                  <div v-if="(index + 1) % 2 == 0" class="h-screen align-middle ease-in-out bg-[#070707] group ">
                    <div class="flex flex-col h-full py-24 " >
                      <div class="flex flex-col my-auto gap-y-4 text-justified ">
                    
                        <div class="cursor-pointer " @click="$router.push(`/services/${service.id}`)">
                          <h1 class="px-4 mb-10 text-4xl font-bold text-center uppercase lg:text-7xl" >
                            {{service.title}}
                          </h1>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div v-else class="h-screen align-middle transition-colors duration-150 ease-in-out bg-black group ">
                    <div class="flex flex-col h-full py-24 lg:px-4 ">
                      <div class="flex flex-col my-auto gap-y-4 text-justified ">
                    
                        <div class="cursor-pointer" @click="$router.push(`/services/${service.id}`)">
                          <h1 class="px-4 mb-10 text-4xl font-bold text-center uppercase lg:text-7xl ">
                        {{service.title}}
                          </h1>
                        </div>
                        <!-- <div>
                          <p class="px-4 pt-4 text-xl transition-all duration-300 ease-in-out delay-100 lg:scale-y-0 lg:group-hover:scale-y-100">
                            {{service.description}}
                          </p>
                        </div> -->
                        <!-- <img class="w-full mx-auto transition-all duration-300 ease-in-out delay-100 lg:scale-y-0 lg:group-hover:scale-y-100" :src="service.thumbnail_path"  style="width:full; height: 300px;" alt=""> -->
                      </div>
                    </div>
                  </div>
                </slide>
  
                  
           
           
              </carousel>
                 </div>
               
                 
               </client-only>

             
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
    }
  },
  computed: {
    services() {
      return this.$store.getters.Services
    },
  },
  mounted() {
    this.$store.dispatch('getServices')
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.clip {
  /*
  Ensure background is added first
  */
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* what will show through the text
      ~ or ~
     what will be the background of that element */
  background: url(https://24.media.tumblr.com/tumblr_m87dri70zh1qzla33o1_500.gif);
}
.clip-text-video__text {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
  mix-blend-mode: multiply;
}

.video-container {
  height: 100%;
  width: 100%;
  position: relative;
}

video {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
.test {
  height: 30vh;
  width: 15vw;
  border-radius: 50%;
  line-height: 30vh;
  background: #547dbf;
  color: #faedc6;
  text-align: center;
}
.test:hover {
  height: 50vh;
  width: 25vw;
  border-radius: 50%;
  line-height: 50vh;
  background-size: cover;
  /* background-repeat: no-repeat; */
  background: linear-gradient(rgba(84, 125, 191, 0.6), rgba(84, 125, 191, 0.6)),
    url('/mobile.png');
  color: #faedc6;
  text-align: center;
  transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
    width 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
    width 0.3s ease-in-out;
  -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
    width 0.3s ease-in-out;
}

@media screen and (max-width: 480px) {
  .test {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: #547dbf;
    color: #faedc6;
    text-align: center;
    flex-wrap: wrap;
  }

  .test:hover {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-size: cover;
    /* background-repeat: no-repeat; */
    background: linear-gradient(
        rgba(84, 125, 191, 0.6),
        rgba(84, 125, 191, 0.6)
      ),
      url('/mobile.png');
    color: #faedc6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
    -moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
    -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
  }
}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .test {
    height: 300px;
    width: 300px;
    background: #547dbf;
    color: #faedc6;
    text-align: center;
  }
  .test:hover {
    height: 350px;
    width: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background: linear-gradient(
        rgba(84, 125, 191, 0.6),
        rgba(84, 125, 191, 0.6)
      ),
      url('/mobile.png');
    color: #faedc6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
    -moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
    -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out,
      width 0.3s ease-in-out;
    background-position: center;
  }
}

.numbers {
  font-family: 'Fredoka One', cursive;
}
</style>