<template>
   <div class="mt-2">
      <p>Hola mjndo</p>
   </div>
</template>

<script>
export default {
   created() {
      console.log(this.$route.query)
   },
   mounted() {
      this.$router.push({ query: { search: 'estoy buscando esto' } })
   },
}
</script>

<style></style>
