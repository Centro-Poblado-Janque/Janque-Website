<template>
   <div class="mt-2">
      <p>Hola mjndo</p>
   </div>
</template>

<script>
export default {
   mounted() {
      this.$router.push({ query: 'hola' })
   },
}
</script>

<style></style>
