<template>
  <div class="py-16 text-black bg-white ">
      <h1 class="mb-20 text-6xl font-bold text-center">
        Services
      </h1>
       <client-only>
                 <div class="w-1/2 mx-auto 2xl:w-1/3 ">
              <carousel scroll-per-page="false" pagination-enabled="false" center-mode="true" autoplay="true" per-page="2" autoplay-hover-pause="true" pagination-size="0" loop="true">
                 <slide>
    <div class="2xl:w-1/3 test"><span class="flex-wrap my-auto text-xl">Interactive Table</span></div>
  </slide>
   <slide>
    <div class="2xl:w-1/3 test"><span class="flex-wrap my-auto text-xl">Mobile Application</span></div>
  </slide>
           <slide>
    <div class="w-full 2xl:w-1/3 test"><span class="flex-wrap my-auto text-xl">Virtual Book</span></div>
  </slide>
  
                  
           
           
              </carousel>
                 </div>
               
                 
               </client-only>
             
             
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
    url('/mobile.svg');
    color: #FAEDC6;
    text-align: center;
    transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
-moz-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
  -webkit-transition: height 0.3s ease-in-out, line-height 0.3s ease-in-out, width 0.3s ease-in-out;
}

</style>