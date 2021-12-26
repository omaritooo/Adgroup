<template>
  <transition name="fade">
    <div
      v-if="$store.state.modal"
      class="fixed inset-0 z-20 flex items-center justify-center w-full h-screen  bg-semi-75"
    >
      <div
        class="relative w-full max-w-2xl p-8 rounded-lg shadow-lg  bg-site-vblue dark:bg-site-black"
      >
        <button
          aria-label="close"
          class="absolute top-0 right-0 mx-4 my-2 text-xl text-gray-500"
          @click.prevent="close"
        >
          ×
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    modal() {
      return this.$store.state.modal
    },
  },
  watch: {
    modal(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden')
      }
      document.querySelector('body').classList.remove('overflow-hidden')
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>