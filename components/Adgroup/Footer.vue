<template>
    <div>
        <img width="1920" src="/rect.svg" alt="">
        <div class="flex justify-around px-32 py-6 bg-black">
            <div class="flex flex-col justify-start py-4 bg-black gap-y-2 ">
                <h1 class="py-4 text-4xl font-bold text-left text-white ">Contact Us</h1>
                <div class="flex text-base font-bold gap-x-4">
                    <a class="flex gap-x-3" >
                        <font-awesome-icon :icon="['fas', 'phone-alt']" size="sm" class="my-auto" /> +20 226309636
                    </a>
                    <a class="flex gap-x-3">
                        <font-awesome-icon :icon="['fas', 'link']" size="sm" class="my-auto" />
                          CARE@ADGROUP.TECH
                      </a>
                    <a class="flex gap-x-3">
                                                <font-awesome-icon :icon="['fas', 'quote-left']" size="sm" class="my-auto" />

                          REQUEST A QUOTE
                      </a>
                </div>
            </div>
            <div><img src="ad-logo.svg" class="h-40 p-4 my-auto align-middle" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>