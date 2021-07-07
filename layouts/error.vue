<template>
   <div :class="[$style.pageNotFound, 'error-gradient-bg']">
      <Container>
         <div :class="$style.override">
            <span :class="$style.error_img_contain"> </span>
            <div :class="$style.error_help"></div>
         </div>
      </Container>
   </div>
</template>

<script>
import error_icon from './../static/error_favicon.svg'

export default {
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
@import '~/assets/scss/customs/mixin';
.pageNotFound {
   min-height: 100vh;
   position: relative;
   padding-top: 60px;
   width: 100%;
}
.override {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   @media screen and (min-width: $xl) {
      flex-direction: row;
   }
}
.error_help {
   text-align: center;
   @media screen and (min-width: $xl) {
      padding-left: 2rem;
   }
}
.error_img_contain {
   display: block;
   margin-top: 1rem;
   svg {
      width: 100%;
      height: auto;
   }
   @media screen and (min-width: $xl) {
      svg {
         width: 90%;
      }
   }
}
</style>
