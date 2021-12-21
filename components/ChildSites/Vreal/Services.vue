<template>
  <div class="relative px-10 bg-black text-site-vblue video-container ">
      <h1 class="absolute top-0 left-0 z-50 p-10 text-6xl font-bold text-center">
        Services
      
      </h1>
     <video autoplay muted loop>
        <source src="/Videoc38.mp4" type="video/mp4" />
    </video>
       <client-only>
                 <div class="w-full mx-auto ">
              <carousel class="" navigation-enabled="true" navigation-next-label="<span class='text-white'>▶</span>" navigation-prev-label="<span class='text-white rotate-90'>◀</span>" scroll-per-page="false" navigation-click-target-size="15" pagination-active-color="#000000" pagination-color="#547DBF" :per-page-custom="[[350, 1], [768, 2], [1024,4]]" pagination-enabled="true" center-mode="true" autoplay="true"  autoplay-hover-pause="true" pagination-size="10" loop="true">
                <slide  v-for="service in services" :key="service.index" class="h-screen align-middle transition-colors duration-150 ease-in-out group hover:bg-white hover:bg-opacity-10" >
                  <div class="flex flex-col h-full py-24 lg:px-4 " @click="$router.push(`/services/${service.id}`)">
                    <div class="flex flex-col my-auto gap-y-4 text-justified ">
                    
                      <div>
                        <h1 class="px-4 mb-10 text-4xl font-bold text-center uppercase">
                          {{service.title}}
                        </h1>
                      </div>
                      <div>
                        <p class="px-4 pt-4 text-xl transition-all duration-300 ease-in-out delay-100 lg:scale-y-0 lg:group-hover:scale-y-100">
                          {{service.description}}
                        </p>
                      </div>
                      <!-- <img class="w-full mx-auto transition-all duration-300 ease-in-out delay-100 lg:scale-y-0 lg:group-hover:scale-y-100" :src="service.thumbnail_path"  style="width:full; height: 300px;" alt=""> -->
                    </div>
                  </div>
                </slide>
  
                  
           
           
              </carousel>
                 </div>
               
                 
               </client-only>
<!-- 
                <client-only>
                 <div class="w-full mx-auto ">
              <carousel class="" :navigation-enabled="true" scroll-per-page="false" :per-page-custom="[[350, 1], [768, 2], [1024, 4]]" pagination-enabled="true" center-mode="true" autoplay="true"  autoplay-hover-pause="true" pagination-size="10" loop="true">
                <slide v-for="dat in data" :key="dat.index" class="h-screen align-middle transition-colors duration-150 ease-in-out group hover:bg-gray-300">
                  <div class="flex flex-col h-full py-24 lg:px-4 ">
                    <div class="flex flex-col px-4 my-auto gap-y-4 ">
                      <span class="numbers text-7xl">
                      </span>
                      <h1 class="text-4xl font-bold uppercase">
                        {{dat.name}}
                      </h1>
                      <p class="text-xl transition-all duration-300 ease-in-out delay-100 lg:scale-y-0 lg:group-hover:scale-y-100">
                        {{dat.cont}}
                      </p>
                    </div>
                  </div>
                </slide>
  
                  
           
           
              </carousel>
                 </div>
               
                 
               </client-only> -->
             
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
      data: [
        {
          name: 'ORS Solution',
          cont: 'The first online sales solution in the world helps the real estate industry',
        },
        {
          name: 'Modern Egypt',
          cont: 'The first online sales solution in the world helps the real estate industry',
        },
        {
          name: 'Virtual Exhibition',
          cont: 'Find your global qualified leads and engage with thousands of business prospects virtually.',
        },
        {
          name: 'AR for real estate',
          cont: 'Augmented Reality helps real estate companies to market their finished and unfinished project',
        },
        {
          name: 'VR for real estate',
          cont: 'Virtual reality allows your customers take a tour in your projects by using VR headset.',
        },
        {
          name: '360Virtual Tours',
          cont: 'The first online sales solution in the world helps the real estate industry',
        },
        {
          name: '360 Video Animations Production',
          cont: '3D Animation video attract many leads for real estate companies who work with unfinished project',
        },
        {
          name: 'Interactive model',
          cont: 'It is an ideal solution for presenting your project in exhibitions',
        },
        {
          name: 'Model in a bag',
          cont: 'unique solution carries your architectural module designs in bag to attend international exhibitions',
        },
        {
          name: 'I walk',
          cont: 'It is a powerful solution for presenting your projects in an interactive and entertaining way',
        },
        {
          name: 'Interactive touch screen',
          cont: 'powerful marketing and sales tool to present your projects and engage with your potential customer',
        },
      ],
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
.video-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
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