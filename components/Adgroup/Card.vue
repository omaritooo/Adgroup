<template>
  <div
    class="
      flex flex-col
      transition-all
      duration-200
      scale-100
      bg-[#39424D]
      rounded-t-lg
      shadow-lg
      hover:-translate-y-2 hover:shadow-2xl hover:scale-105
    "
    @click="$router.push(`/showcase/${dum.id}`)"
  >
    <img class="rounded-t-lg max-h-52" :src="dum.thumbnail_path" />
    <div class="w-full px-6 py-4 text-center text-white text-wrap">
      {{ dum.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dum: Object,
  },
}
</script>

<style scoped></style>
