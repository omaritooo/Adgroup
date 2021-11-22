<template>
    <div class="z-50 px-20 py-32 bg-white grounder">
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
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
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