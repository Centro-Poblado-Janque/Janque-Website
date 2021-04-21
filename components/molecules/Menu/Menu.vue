<template data-component="Menu">
   <ul class="Menu md-flex">
      <Item :forLink="true" className="Menu--item" @click.native="$emit('close')">
         <NextLink
            path="/"
            content="Inicio"
            aria-label="Inicio"
            aria-hidden="false"
            data-action="home"
            :icon="faHome"
         />
      </Item>
      <Item :forLink="true" className="Menu--item" @click.native="$emit('close')">
         <NextLink
            path="/noticias"
            content="Noticias"
            aria-label="Noticias"
            data-action="news"
            :icon="faNewspaper"
         />
      </Item>
      <Item :forLink="true" className="Menu--item" @click.native="$emit('close')">
         <NextLink
            path="/historia"
            content="Historia"
            aria-label="Historia"
            data-action="history"
            :icon="faLandmark"
         />
      </Item>
      <Item :forLink="true" className="Menu--item" @click.native="$emit('close')">
         <NextLink
            path="/sobre-nosotros"
            content="Sobre Janque"
            aria-label="Sobre Janque"
            data-action="about"
            :icon="faBrand"
         />
      </Item>
      <Item :forLink="true" className="Menu--item" @click.native="$emit('close')">
         <NextLink
            path="/blog"
            content="Blog"
            aria-label="Blog"
            data-index="blog"
            data-action="blog"
            :icon="faBlog"
         />
      </Item>
   </ul>
</template>

<script>
import { faHome, faLandmark, faBlog, faBreadSlice, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faBrand } from '@/components/utils/icons/faBrand'

export default {
   name: 'Menu',
   data: () => ({
      faHome,
      faBreadSlice,
      faBlog,
      faLandmark,
      faNewspaper,
      faBrand,
   }),
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.Menu {
   width: 100%;
   height: 100%;
   flex-direction: column;
   @media screen and(min-width: $desktop_breakpoints) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
   }
}
.logo_contain {
   color: inherit;
   display: block;
   width: 80%;
   height: 100%;
   padding: 0.2rem;
   transition: all 0.5s ease;
}
</style>
