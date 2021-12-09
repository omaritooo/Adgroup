<template>
  <div class="relative text-black bg-site-gold ">
      <h1 class="absolute top-0 left-0 z-50 p-10 text-6xl font-bold text-center">
        Services
      </h1>
       <client-only>
                 <div class="w-full mx-auto ">
              <carousel class="" :navigation-enabled="true" scroll-per-page="false" :per-page-custom="[[350, 1], [768, 2], [1024, 4]]" pagination-enabled="true" center-mode="true" autoplay="true"  autoplay-hover-pause="true" pagination-size="10" loop="true">
                <slide v-for="(dat, index) in data" :key="dat.index" class="h-screen align-middle transition-colors duration-150 ease-in-out group hover:bg-yellow-500">
                  <div class="flex flex-col h-full py-24 lg:px-4 ">
                    <div class="flex flex-col px-4 my-auto gap-y-4 ">
                      <span class="numbers text-7xl">
                        {{index}}
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
               
                 
               </client-only>
             
             
       </div>
  </div>
</template>

<script>

export default {
data() {
  return {
    data: [
      {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      },
       {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      }, {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      }
      , {
        name: 'service',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula mauris, faucibus non bibendum vitae, eleifend nec augue. Mauris diam lorem, vehicula a posuere at.'
      }
    ]
  }
},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.test{
    height: 30vh;
    width: 15vw;
    border-radius: 50%;
    line-height: 30vh;
    background: #547DBF;
    color: #FAEDC6;
    text-align: center;
}
.test:hover{
    height: 50vh;
    width: 25vw;
   border-radius: 50%;
    line-height: 50vh;
    background-size: cover;
    /* background-repeat: no-repeat; */
    background: 
    linear-gradient(
      rgba(84, 125, 191, 0.6), 
      rgba(84, 125, 191, 0.6)
    ),
    url('/mobile.png');
    color: #FAEDC6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
-moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
  -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
}

@media screen and (max-width: 480px)
{
  .test{
     border-radius: 50%;
        width: 200px;
        height: 200px;
        background: #547DBF;
    color: #FAEDC6;
    text-align: center;
    flex-wrap: wrap;
    
}

.test:hover{
    height: 250px;
    width: 250px;
   border-radius: 50%;
    background-size: cover;
    /* background-repeat: no-repeat; */
    background: 
    linear-gradient(
      rgba(84, 125, 191, 0.6), 
      rgba(84, 125, 191, 0.6)
    ),
    url('/mobile.png');
    color: #FAEDC6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
-moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
  -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
}
}

@media screen and (max-width: 768px) and (min-width: 481px)
{.test{
    height: 300px;
    width: 300px;
    background: #547DBF;
    color: #FAEDC6;
    text-align: center;
}
.test:hover{
    height: 350px ;
    width: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background: 
    linear-gradient(
      rgba(84, 125, 191, 0.6), 
      rgba(84, 125, 191, 0.6)
    ),
    url('/mobile.png');
    color: #FAEDC6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
-moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
  -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
  background-position: center ;
}}

.numbers{
  font-family: 'Fredoka One', cursive;

}

</style>