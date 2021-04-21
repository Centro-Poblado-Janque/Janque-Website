<template>
   <NuxtLink :to="path">{{ text }}</NuxtLink>
</template>

<script>
export default {
   props: {
      path: String,
      text: String,
   },
}
</script>

<style></style>
