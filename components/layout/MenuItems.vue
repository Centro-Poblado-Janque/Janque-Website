<template>
   <nav class="MenuContainer" @click="$emit('close')" role="navigation">
      <Container class="Container--override">
         <SimpleGrid Columns="2fr 8fr" RowGap="0" ColumnGap="0">
            <ViewBox class="logo_contain">
               <Logo />
            </ViewBox>
            <ViewBox class="Menu ly-flex">
               <SearchModel />
               <NextLink to="/" data-action="home" css="Menu--item" :icon="faHome" content="Inicio" />
               <NextLink to="/costumbres" data-action="customs" css="Menu--item" :icon="faSlidersH" content="Costumbres" />
               <NextLink to="/historia" data-action="history" css="Menu--item" :icon="faLandmark" content="Historia" />
               <NuxtLink to="/about" data-action="about" class="Menu--item">
                  <BrandIconSvg class="size svg-inline--fa fa-w-16" />
                  <span>Sobre Janque</span>
               </NuxtLink>
               <NextLink to="/blog" data-action="blog" css="Menu--item" :icon="faBlog" content="Blog" />
            </ViewBox>
         </SimpleGrid>
      </Container>
   </nav>
</template>

<script>
import Logo from '../utils/Logo.vue'
import '~/assets/styles/index.scss';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faLandmark, faBlog, faBreadSlice, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import BrandIconSvg from '../utils/brand-icon.svg.vue'
import { SimpleGrid } from '../container/Grid'
import SearchModel from '../widgets/SearchModel.vue'

export default {
   name: 'Menu',
   components: {
      Logo,
      FontAwesomeIcon,
      BrandIconSvg,
      SimpleGrid,
      SearchModel,
   },
   data: () => ({
      faHome,
      faBreadSlice,
      faBlog,
      faLandmark,
      faSlidersH,
   }),
}
</script>

<style lang="scss">
@import '~/assets/styles/mixin';
.MenuContainer {
   height: calc(100vh - 64px);
   height: -webkit-calc(100vh - 64px);
   width: 100%;
   position: relative;
   pointer-events: none;
   z-index: 3;
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
      font-family: 'Viga', sans-serif;
      position: relative;
      color: var(--nav-color);
      &:hover {
         opacity: .8;
      }
   }
   .nav_search {
      padding: 0.75rem;
      width: 90%;
      margin: 0.5rem auto;
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
      a {
         background-color: transparent;
         text-transform: capitalize;
         border: none;
         position: relative;
         font-size: 1.1rem;
         transform: translateX(0);
         opacity: 1;
         font-family: var(--nav-font);
         text-align: left;
         color: var(--dark-primary);
         &::before {
            content: '';
            display: block;
            opacity: 0.1;
            position: absolute;
            right: 0;
            top: 0;
            left: 0;
            transform: scale3d(0, 0, 0);
            width: 100%;
            height: 100%;
            border-radius: 3px;
            background-color: currentColor;
            transition: 0.1s;
         }
      }
      .nav_search {
         display: none;
      }
   }
}
[aria-current="page"]{
   position: relative;
   background-color: transparent !important;
   @media screen and (min-width: $desktop_breakpoints) {
      &::after {
         position: absolute;
         content: '';
         padding: 0.5rem;
         width: 90%;
         margin: 17px auto;
         left: 20px;
         bottom: 0;
         height: 30px;
         border-radius: 3px;
         background-color: var(--dark-active-link);
      }
   }
}
.logo_contain {
   display: none;
   @media screen and (min-width: $desktop_breakpoints) {
      display: block;
      width: 100%;
      height: 100%;
   }
}
@media screen and (min-width: $desktop_breakpoints) {
   .bg_dark {
      background-color: var(--bg-color-second);
      height: 64px;
      border-bottom: 1px solid var(--grey-border);
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
