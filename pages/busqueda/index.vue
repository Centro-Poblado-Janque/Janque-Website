<template>
   <div class="mt-3">
      <nuxt-link to="/busqueda/error">to NuxtChild</nuxt-link>
      <nuxt-child :key="$route.params.key" />
   </div>
</template>

<script>
export default {}
</script>

<style></style>
