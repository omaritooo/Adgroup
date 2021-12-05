<template>
  <div class="py-16 text-black bg-white ">
      <h1 class="mb-20 text-6xl font-bold text-center">
        Services
      </h1>
       <client-only>
                 <div class="w-full px-4 mx-auto lg:w-1/2 lg:px-0 2xl:w-1/3 ">
              <carousel scroll-per-page="false" :per-page-custom="[[350, 1], [768, 2], [1024, 2]]" pagination-enabled="false" center-mode="true" autoplay="true" per-page="2" autoplay-hover-pause="true" pagination-size="0" loop="true">
                 <slide>
    <div class="mx-auto 2xl:w-1/3 test">Interactive Table</div>
  </slide>
   <slide>
    <div class="mx-auto 2xl:w-1/3 test"><span class="flex-wrap mb-4 text-xl tester">Mobile Application</span></div>
  </slide>
           <slide>
    <div class="w-full mx-auto 2xl:w-1/3 test"><span class="flex-wrap text-xl">Virtual Book</span></div>
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

</style>