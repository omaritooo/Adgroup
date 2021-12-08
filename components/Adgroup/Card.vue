<template>
  <div
    class="flex flex-col bg-white rounded-t-lg shadow-lg"
    @click="$router.push(`/showcase/${dum.id}`)"
  >
    <img
      class="object-contain rounded-t-lg max-h-52"
      :src="dum.thumbnail_path"
    />
    <div class="w-full px-6 py-4 text-center text-black text-wrap">
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
