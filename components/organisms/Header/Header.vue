<template>
   <header v-scroll="handleScroll" :class="['Header', activeMenu && 'drawer-out']">
      <ThemeButton />
      <nav :class="[activeMenu && 'is_active', activeScroll && 'active-scroll']" class="MenuContainer">
         <div class="container md-grid nav-grid-wrapper">
            <BrandLogotype />
            <Menu @close="HideMenu" />
         </div>
      </nav>
      <ToggleButton @open="OpenMenu" :class="activeMenu && 'is_active'" />
      <ViewBox class="no-desktop">
         <div class="menu-background top" />
         <div class="menu-background bottom" />
      </ViewBox>
   </header>
</template>

<script>
import './_header.scss'
export default {
   name: 'MainHeader',
   components: {
      Menu: () => import('@/components/molecules/Menu/Menu.vue'),
      BrandLogotype: () => import('@/components/utils/BrandLogotype.vue'),
      ToggleButton: () => import('@/components/utils/ToggleButton.vue'),
      ThemeButton: () => import('@/components/utils/theme-buttom.vue'),
   },
   methods: {
      handleScroll() {
         window.pageYOffset > 2 ? (this.activeScroll = true) : (this.activeScroll = false)
      },
      OpenMenu() {
         this.activeMenu = !this.activeMenu
      },
      HideMenu() {
         this.activeMenu = false
      },
   },
   data() {
      return {
         activeMenu: false,
         activeScroll: false,
      }
   },
}
</script>
