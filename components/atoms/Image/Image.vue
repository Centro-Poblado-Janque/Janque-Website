<template>
   <img :src="src" :alt="alt" class="atom-image" />
</template>

<script>
export default {
   props: {
      src: String,
      alt: String,
   },
}
</script>
