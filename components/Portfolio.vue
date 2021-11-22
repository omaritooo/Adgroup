<template>
    <div class="flex flex-col bck">
        <div class="absolute z-0 parts">
            <Particles color="#2E8BAE" :particles-number="50" shape-type="circle" :particle-size="5" :particle-opacity="0.75" :line-opacity="1" :lines-distance="250" movement-direction="left" lines-color="#2E8BAE" :line-linked="true" :move-speed="1" />
            <Particles color="#2E8BAE" :particles-number="7" shape-type="circle" :particle-size="50" :particle-opacity="0.25" movement-direction="top" lines-color="#dedede" :line-linked="false" :move-speed="5" />
        </div>
        <div class="z-50 px-32 py-20">
            <h1 class="p-4 text-5xl text-center text-white">Portfolio and Past Work</h1>
            <div class="flex justify-center gap-x-5 tabs">
                <a class="border-green-400 tab tab-bordered tab-active">All</a>
                <a class="tab tab-bordered focus:tab-active">Sekulen</a>
                <a class="tab tab-bordered focus:tab-active">Echeveris</a>
                <a class="tab tab-bordered focus:tab-active ">Koboi</a>
                <a class="tab tab-bordered hover:tab-active">Sansevierrie</a>
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
                <button class="px-4 text-white bg-transparent border-2 border-white rounded-lg">Show More </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./Card.vue"
    export default {
        components: {
            Card,
        }
    }
</script>

<style scoped>
    .parts {
        width: 100%;
        height: 99%;
    }
    .bck {
        background-image: linear-gradient(0deg, rgba(221, 231, 144, 0.5) 0%, rgba(0, 189, 214, 0.5) 48%, rgba(0, 212, 255, 0.5) 100%);
        background-color: #02214d;
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