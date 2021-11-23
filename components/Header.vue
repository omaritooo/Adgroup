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
    <div class="">
        <div class="rule-cont">
                <div class="rule1">

                </div>
                <div class="gradient">

                </div>
        </div>
        <div class="rule-cont">
                <div class="rule1">

                </div>
        </div>
        <div class="rule-cont">
                <div class="rule1">

                </div>
        </div>
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
.home-bg {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	content: "";
	background-image: url("https://media.gettyimages.com/photos/thierry-henry-celebrates-scoring-arsenals-2nd-goal-during-the-premier-picture-id1214933324?s=612x612");
	background-size: cover;
	background-position: center;

	opacity: 0.75;
}

.home-sections {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
}

.home-section {
	position: relative;
	color: #fff;
	padding: 20px;
	text-align: center;
	overflow: hidden;
}

.home-section .home-section-bg-img {
	display: none;
	position: absolute;
	z-index: -1001;

	width: 100%;
	height: 100vh;

	background-position: center;
	background-size: cover;

	transition: opacity 1s, transform 1s;
}

.home-section .home-section-bg-grad {
	display: none;
	position: absolute;
	z-index: -1000;

	content: "";
	width: 100%;
	height: 0vh;

	background: linear-gradient(
		0deg,
		rgba(255, 13, 255, 1) 0%,
		rgba(0, 253, 255, 1) 100%
	);

	transition: opacity 0.5s, height 0.5s;

	border-width: 1px;
	border-color: rgba(255, 255, 255, 1);
	border-style: solid;
}
@media not all and (hover: none)
 {
	/* -- HOME -- */

	.home-header {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.home-section .home-section-bg-img,
	.home-section:hover .home-section-bg-img {
		transition: none;
		opacity: 1;
		transform: none;
		-ms-transform: none;
		-webkit-transform: none;
		-moz-transform: none;
		-o-transform: none;
	}

	.home-section .home-section-bg-grad {
		transition: none;
		opacity: 0.5;
		height: 100vh;
	}
}

.ruler
{   display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.rule-cont
{
    position:relative;
    height: 100vh;
    width: 33vw;
    
}
.gradient
{   z-index: 50;
    opacity: 0.2;
    position: absolute;
top: 0;
left:0;
height: 100vh;
width: 33vw;
background-repeat: no-repeat;
background-size: cover;
 animation: fadeInOpacity 1s;
}
.gradient:hover{
                background-image:  linear-gradient(0deg, rgba(221, 231, 144, 0.24) 0%, rgba(0, 189, 214, 0.24) 48%, rgba(0, 212, 255, 0.24) 100%);
    opacity: 0.2;

   
}
.rule1  
{   z-index: 40;    
        position: absolute;
top: 0;
left:0;
height: 100vh;
width: 33vw;
background-repeat: no-repeat;
background-size: cover;
background: black;
  transition: all 1.5s ease-in-out;



}
.rule1:hover{
    position: absolute;
top: 0;
left:0;
height: 100vh;
width: 33vw;
background-repeat: no-repeat;
background-size: cover;
            background-image:  linear-gradient(0deg, rgba(221, 231, 144, 0.24) 0%, rgba(0, 189, 214, 0.24) 48%, rgba(0, 212, 255, 0.24) 100%), url('https://media.gettyimages.com/photos/thierry-henry-celebrates-scoring-arsenals-2nd-goal-during-the-premier-picture-id1214933324?s=612x612');

}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
        transform: scale(1,0);
	}
    50%{

    }
	100% {
        transform: scale(1);
		opacity: 0.3;
	}
}
    .test {
        background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.24) 0%, rgba(0, 189, 214, 0.24) 48%, rgba(0, 212, 255, 0.24) 100%), url('../static/Group 795.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    .grounder
    {
        background-image: url('../static/Group 797.svg');
        background-repeat: no-repeat;
        background-position: center;
        z-index: 1000;
    }
</style>