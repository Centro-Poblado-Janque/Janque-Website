<template>
   <div :class="$style.pageNotFound">
      <ErrorBackground />
      <ErrorBackgroundText />
   </div>
</template>

<script>
import error_icon from './../static/error_favicon.svg'

export default {
   components: {
      ErrorBackground: () => import('@/components/utils/design/error.image.vue'),
      ErrorBackgroundText: () => import('@/components/utils/design/animate404.image.vue'),
   },
   head() {
      return {
         title: this.error_title,
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: 'This page no exicts with response 404 - Not Found',
            },
         ],
         link: [{ hid: 'favicon', rel: 'icon', href: error_icon }],
      }
   },
   data: () => ({
      error_title: 'Buscando el camino que has digitado...',
   }),

   mounted() {
      this.error_title = 'Error 404 - Not Found'
   },
}
</script>

<style lang="scss" module>
@import '~/assets/scss/customs/settings';
.pageNotFound {
   min-height: 100vh;
   position: relative;
   padding-top: 60px;
   width: 100%;
   & ~ footer {
      display: none;
   }
}
</style>
