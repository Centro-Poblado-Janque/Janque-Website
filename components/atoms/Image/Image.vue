<template>
   <img :src="src" :alt="alt" class="image" v-if="src" />

   <div v-else class="img-container">
      <slot></slot>
   </div>
</template>

<script>
export default {
   props: {
      src: String,
      alt: String,
   },
}
</script>
