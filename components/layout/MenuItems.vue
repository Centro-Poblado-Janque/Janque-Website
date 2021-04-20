<template data-component="layout">
   <nav class="MenuContainer" role="navigation">
      <SimpleGrid Columns="2fr 6fr" RowGap="0" ColumnGap="0" class="Container">
         <ViewBox class="logo_contain">
            <BrandLogotipe />
         </ViewBox>
         <ul class="Menu md-flex">
            <SearchModel class="Menu--search" />
            <NextLink
               @click.native="$emit('close')"
               to="/"
               data-action="home"
               css="Menu--item"
               :icon="faHome"
               content="Inicio"
            />
            <NextLink
               @click.native="$emit('close')"
               to="/noticias"
               data-action="news"
               css="Menu--item"
               :icon="faNewspaper"
               content="Noticias"
            />
            <NextLink
               @click.native="$emit('close')"
               to="/historia"
               data-action="history"
               css="Menu--item"
               :icon="faLandmark"
               content="Historia"
            />
            <NextLink
               @click.native="$emit('close')"
               to="/sobre-nosotros"
               data-action="about"
               css="Menu--item"
               :icon="faBrand"
               content="Sobre Janque"
            />
            <NextLink
               @click.native="$emit('close')"
               to="/blog"
               data-action="blog"
               css="Menu--item"
               :icon="faBlog"
               content="Blog"
            />
         </ul>
      </SimpleGrid>
   </nav>
</template>

<script>
import BrandLogotipe from '../utils/Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faLandmark, faBlog, faBreadSlice, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faBrand } from '../utils/icons/faBrand'
import { SimpleGrid } from '../container/Grid'
import SearchModel from '../widgets/SearchModel.vue'

export default {
   name: 'Menu',
   components: {
      BrandLogotipe,
      FontAwesomeIcon,
      SimpleGrid,
      SearchModel,
   },
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
.MenuContainer {
   height: calc(100vh - 64px);
   width: 100%;
   position: relative;
   pointer-events: none;
   z-index: 3;
   color: teal;
   transition: all 0.25s ease-in-out;
   @media screen and(min-width: $desktop_breakpoints) {
      top: 0;
      height: 100px;
      pointer-events: auto;
      transform: translateX(0);
   }
   &.is_active {
      transform: translateX(0);
      pointer-events: auto;
   }
}
.Container--override {
   height: 100%;
}
.Menu {
   width: 100%;
   height: 100%;
   flex-direction: column;
   &--item {
      display: block;
      font-size: 1.6rem;
      text-transform: uppercase;
      padding: 1.25rem;
      font-weight: 500;
      transform: translateX(-100px);
      opacity: 0;
      font-family: var(--viga-font);
      position: relative;
      @media screen and(min-width: $desktop_breakpoints) {
         background-color: transparent;
         text-transform: capitalize;
         position: relative;
         font-size: 1.1rem;
         transform: translateX(0);
         opacity: 1;
         font-family: var(--noto-font);
         text-align: left;
         color: var(--dark-primary);
      }
      :hover {
         transform: translateY(-5px);
      }
   }
   .nav_search {
      padding: 0.75rem;
      width: 90%;
      margin: 1rem auto;
      transform: translateX(-100px);
      opacity: 0;
   }
   .size {
      margin-right: 0.5rem;
      width: 40px;
      text-align: center;
      color: var(--dark-light-200);
   }
   @media screen and(min-width: $desktop_breakpoints) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .nav_search {
         display: none;
      }
   }
}
.nuxt-link-exact-active {
   color: #0dc99a;
}

.logo_contain {
   display: none;
   @media screen and (min-width: $desktop_breakpoints) {
      color: inherit;
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.2rem;
      transition: all 0.5s ease;
   }
}
@media screen and (min-width: $desktop_breakpoints) {
   .bg_dark {
      background-color: var(--bg-color-second);
      height: 64px;
      border-bottom: 1px solid var(--dt-grey);
      .logo_contain {
         height: 100%;
         width: 80%;
      }
      &.nav_item span {
         color: var(--dark-light-100);
      }
   }
}
</style>
