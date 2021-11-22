<template>
    <div class="relative flex px-20 mx-auto text-black bg-white test">
        
<div class="z-10 flex px-32 my-32 justify-evenly gap-x-5 ">
    <div class="wrapper">
        <img ref="img" :class="{'': !toggle, 'hidden' : toggle}" src="../static/test.png" alt="">
       <iframe id="player" ref="iframe" class="rounded-lg" loading="lazy" :class="{'': toggle, 'hidden' : !toggle}" width="560" height="315" src="https://www.youtube.com/embed/d7lCZ0rpH3o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
       <button id="play" ref="play" :class="{'': !toggle, 'hidden' : toggle}" class="play-btn" @click="activator">
    <svg xmlns="http://www.w3.org/2000/svg" width="83.829" height="83.829" viewBox="0 0 83.829 83.829">
      <path id="Icon_material-play-circle-outline" data-name="Icon material-play-circle-outline" d="M36.531,63.776,61.68,44.914,36.531,26.053ZM44.914,3A41.914,41.914,0,1,0,86.829,44.914,41.93,41.93,0,0,0,44.914,3Zm0,75.446A33.531,33.531,0,1,1,78.446,44.914,33.576,33.576,0,0,1,44.914,78.446Z" transform="translate(-3 -3)" fill="#fafafa" opacity="0.81"/>
    </svg>   </button>
      </div>
       <div class="flex flex-col w-1/3 my-auto gap-y-4">
                    <h1 class="font-bold text-2r">
                        Lorem Ipsum Dolor Sit
                    </h1>
                    <p class="flex-wrap w-3/4 text-lg font-regular ">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    </p>
                </div>
</div>
      
    </div>

    
</template>

<script>
//  import Particles from "./Particles.vue";
    export default {
        components:{
            // Particles
        },
        data() {
            return {
                toggle: false
            }
        },
        mounted()
        {   

            
        },
        methods: 
        {
            activator()
            {
                // eslint-disable-next-line no-console
               this.toggle = !this.toggle
               // eslint-disable-next-line dot-notation
               this.$refs["iframe"].src += "?autoplay=1"
               
                
            }
        }
    }
</script>

<style scoped>
.parts
{
    width: 100%;
    height: 90%;
    
}
    .test {
        height: 100%;
        width: 100%;
        background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.25) 0%, rgba(0, 189, 214, 0.25) 48%, rgba(0, 212, 255, 0.25) 100%), url('/circles.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    .wrapper {
	position:relative;
	width:660px;
}

.wrapper img {
	max-width:100%;
	height:auto;
}



.play-btn {
	position:absolute;
	z-index:666;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);
	background-color:transparent;
	border:0;
}

.play-btn:hover {
	cursor:pointer;
}

.play-btn:focus {
	outline:0;
}
</style>


<style lang="scss" scoped>
div[id^="particles-instance-"] {
  height: 100% !important;
  width: 100% !important;
  position: absolute !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: 1 !important;
}

</style>
