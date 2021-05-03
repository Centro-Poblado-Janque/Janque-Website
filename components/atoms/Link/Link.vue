<template>
   <NuxtLink :to="path" :class="customs">{{ text }}</NuxtLink>
</template>

<script>
export default {
   props: {
      path: Object,
      text: String,
      type: String,
   },
   computed: {
      customs() {
         return {
            'a-btn': this.type == 'button',
            'a-link': this.type == null,
         }
      },
   },
}
</script>

<style></style>
