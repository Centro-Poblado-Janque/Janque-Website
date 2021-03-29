<template>
   <header class="Header main-header" ref="header" v-scroll="changeNavState" role="banner">
      <ThemeButton />
      <ViewBox class="movil-nav" ref="toggle">
         <ToggleButton @open="OpenMenu" ref="toggleBtn" />
         <LogoJanque />
      </ViewBox>
      <Menu ref="nav" @close="HideMenu" />
      <ViewBox class="DrawerOut--001">
         <div class="menu-background top" />
         <div class="menu-background bottom" />
      </ViewBox>
   </header>
</template>

<script>

import LogoJanque from '../utils/LogoJanque.vue'
import ThemeButton from '../utils/theme-buttom.vue'
import ToggleButton from '../utils/ToggleButton.vue'
import Menu from './MenuItems.vue'

export default {
   name: 'AppNavigation',
   components: {
      Menu,
      ToggleButton,
      LogoJanque,
      ThemeButton,
   },
   methods: {
      changeNavState() {
         window.pageYOffset > 2 ? this.$refs.nav.$el.classList.add('bg_dark') : this.$refs.nav.$el.classList.remove('bg_dark')
      },
      OpenMenu() {
         this.active = true
         this.$refs.nav.$el.classList.toggle('is_active')
         this.$refs.header.classList.toggle('drawer-out')
         this.$refs.toggleBtn.$el.classList.toggle('is_active')
      },
      HideMenu() {
         const ref = this.$refs.nav.$el
         ref.querySelectorAll('[data-action]').forEach(element => {
            element.onclick = () => {
               this.$refs.nav.$el.classList.remove('is_active')
               this.$refs.toggleBtn.$el.classList.remove('is_active')
               this.$refs.header.classList.remove('drawer-out')
            }
         })
         /* this.active = false;
      this.$refs.nav.$el.classList.remove('is_active')
      this.$refs.toggleBtn.$el.classList.remove('is_active')
      this.$refs.header.classList.remove('drawer-out') */
      },
   },
   data() {
      return {
         active: '',
      }
   },
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.movil-nav {
   min-height: 64px;
   height: 64px;
   z-index: 11;
   background-color: var(--bg-color-second);
   border-bottom: 1px solid var(--smoke-300);
   @media screen and(min-width: $desktop_breakpoints) {
      display: none;
   }
}

.DrawerOut--001 {
   @media screen and(min-width: $desktop_breakpoints) {
      display: none;
   }
}
.main-header {
   width: 100%;
   position: fixed;
   top: 0;
   right: 0;
   height: 64px;
   z-index: 999;
   left: 0;
}

.menu-background {
   width: 300%;
   height: 250px;
   position: absolute;
   left: -120%;
   top: 20vh;
   z-index: -1;
   background-color: var(--bg-drawer);
   visibility: hidden;
   transition: all 0.25s cubic-bezier(0.83, 0.65, 0.47, 1);
   &.top {
      transform: rotate(-45deg) translateY(-300%) scaleY(0);
   }
   &.bottom {
      transform: rotate(-45deg) translateY(330%) scaleY(0);
   }
}
.drawer-out {
   .menu-background {
      transition: all 0.5s cubic-bezier(0.83, 0.65, 0.47, 1);
      visibility: visible;
      &.bottom {
         transform: rotate(-45deg) translateY(250%) scaleY(4.1);
      }
      &.top {
         transform: rotate(-45deg) translateY(-150%) scaleY(4.1);
      }
   }
   .Menu--item {
      opacity: 1;
      transform: translateX(0px);
      transition: transform 0.35s, opacity 0.5s ease-in;
      &:nth-child(2) {
         transition-delay: 0.2s;
      }
      &:nth-child(3) {
         transition-delay: 0.3s;
      }
      &:nth-child(4) {
         transition-delay: 0.4s;
      }
      &:nth-child(5) {
         transition-delay: 0.5s;
      }
      &:nth-child(6) {
         transition-delay: 0.6s;
      }
   }
   .Menu--search{
      opacity: 1;
      transform: translateX(0px);
      transition: transform 0.35s, opacity 0.5s ease-in;
      transition-delay: 0.1s;
   }
}
</style>
