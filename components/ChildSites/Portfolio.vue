<template>
    <div class="flex flex-col bg-white">
       
        <div class="z-50 px-32 py-20 text-black">
            <h1 class="p-4 text-5xl text-center text-black">Portfolio and Past Work</h1>
            <div class="flex justify-center text-gray-600 gap-x-5 tabs">
                <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered ">All</a>
                <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered focus:tab-active">Sekulen</a>
                <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered focus:tab-active">Echeveris</a>
                <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered focus:tab-active ">Koboi</a>
                <a class="font-bold text-yellow-800 text-opacity-50 tab tab-bordered hover:tab-active">Sansevierrie</a>
            </div>
            <div class="flex flex-wrap justify-center mt-6 gap-x-3 gap-y-3">
                <Card class="w-1/4" />
                <Card class="w-1/4" />
                <Card class="w-1/4" />
                <Card class="w-1/4" />
                <Card class="w-1/4" />
                <Card class="w-1/4" />
            </div>
            <div class="mt-10 text-center">
                <button class="px-4 text-white border-2 border-white rounded-lg bg-site-babyblue">Show More </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "../Adgroup/Card.vue"
    export default {
        components: {
            Card,
        }
    }
</script>

<style scoped>
  
    .bck {
        background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.5) 0%, rgba(0, 189, 214, 0.5) 48%, rgba(0, 212, 255, 0.5) 100%);
        background-color: #02214d;
    }
</style>
