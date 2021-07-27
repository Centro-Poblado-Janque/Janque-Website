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
   background-image: radial-gradient(
         circle at 11% 37%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 50%,
         transparent 50%,
         transparent 56%,
         transparent 56%,
         transparent 100%
      ),
      radial-gradient(
         circle at 82% 7%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 46%,
         transparent 46%,
         transparent 88%,
         transparent 88%,
         transparent 100%
      ),
      radial-gradient(
         circle at 81% 79%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 33%,
         transparent 33%,
         transparent 89%,
         transparent 89%,
         transparent 100%
      ),
      radial-gradient(
         circle at 68% 96%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 8%,
         transparent 8%,
         transparent 26%,
         transparent 26%,
         transparent 100%
      ),
      radial-gradient(
         circle at 69% 20%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 84%,
         transparent 84%,
         transparent 86%,
         transparent 86%,
         transparent 100%
      ),
      radial-gradient(
         circle at 49% 22%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 71%,
         transparent 71%,
         transparent 78%,
         transparent 78%,
         transparent 100%
      ),
      radial-gradient(
         circle at 23% 60%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 6%,
         transparent 6%,
         transparent 40%,
         transparent 40%,
         transparent 100%
      ),
      radial-gradient(
         circle at 86% 33%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 13%,
         transparent 13%,
         transparent 98%,
         transparent 98%,
         transparent 100%
      ),
      radial-gradient(
         circle at 38% 60%,
         hsla(251, 0%, 28%, 0.05) 0%,
         hsla(251, 0%, 28%, 0.05) 15%,
         transparent 15%,
         transparent 61%,
         transparent 61%,
         transparent 100%
      ),
      linear-gradient(79deg, rgb(16, 23, 23), rgb(16, 23, 23));
   & ~ footer {
      display: none;
   }
}
</style>
