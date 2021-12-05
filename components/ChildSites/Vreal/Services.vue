<template>
  <div class="py-16 text-black bg-white ">
      <h1 class="mb-20 text-6xl font-bold text-center">
        Services
      </h1>
       <client-only>
                 <div class="flex w-full px-4 mx-auto gap-x-2 lg:w-1/2 lg:gap-x-4 ">
              <!-- <carousel scroll-per-page="false" pagination-enabled="false" center-mode="true" autoplay="true" per-page="2" autoplay-hover-pause="true" pagination-size="0" loop="true">
               
  
                  
           
           
              </carousel> -->
             <div class="w-full lg:w-1/2 test "><span class="flex-wrap my-auto text-sm lg:text-xl">Interactive Table</span></div>
    <div class="w-full lg:w-1/2 test "><span class="flex-wrap my-auto text-sm lg:text-xl">Interactive Table</span></div>
    <div class="w-full lg:w-1/2 test "><span class="flex-wrap my-auto text-sm lg:text-xl">Interactive Table</span></div>

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
    height: 25vh;
    width: 40vw;
    line-height: 25vh;
    background: #547DBF;
    color: #FAEDC6;
    text-align: center;
}
.test:hover{
    height: 30vh;
    width: 50vw;
    line-height: 30vh;
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
}

@media screen and (max-width: 480px)
{
  .test{
    height: 100%;
    width: 100%;
    line-height: 5vh;
    background: #547DBF;
    color: #FAEDC6;
    text-align: center;
}
.test:hover{
    height: 30vh ;
    width: 100%;
    line-height: 2vh;
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
}
}

@media screen and (max-width: 768px) and (min-width: 481px)
{.test{
    height: 20vh;
    width: 100%;
    line-height: 20vh;
    background: #547DBF;
    color: #FAEDC6;
    text-align: center;
}
.test:hover{
    height: 30vh ;
    width: 100%;
    line-height: 30vh;
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

</style>