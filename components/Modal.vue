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
          class="absolute top-0 right-0 mx-4 my-2 text-xl text-white"
          @click.prevent="close"
        >
          ×
        </button>
        <slot></slot>
        <div
          v-if="poppop"
          class="fixed inset-0 z-20 flex items-center justify-center w-full h-screen  bg-semi-75"
        >
          <div
            class="relative p-8 bg-white rounded-lg shadow-lg  lg:w-1/4 dark:bg-site-black"
          >
            <div class="p-4 my-4 text-black">
              {{ text }}
            </div>
            <div class="mx-auto rounded-md max-w-min">
              <button
                aria-label="close"
                class="px-2 py-1 mx-auto text-xl text-white rounded-md  bg-site-babyblue"
                @click.prevent="closer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    // showing: {
    //   required: true,
    //   type: Boolean,
    // },

    text: {
      default: 'Error',
      type: String,
    },
  },
  computed: {
    modal() {
      return this.$store.state.modal
    },
    poppop() {
      return this.$store.getters.getPop
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
    closer() {
      this.$store.commit('pop')
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