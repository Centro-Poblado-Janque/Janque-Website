<template>
   <header v-scroll="handleScroll" :class="['ly-relative', activeMenu && 'drawer-out']">
      <section class="header-wide" :class="css_by_events">
         <div class="header l-section ly-flex fl-center">
            <ThemeButton />
            <BrandLogotype />
            <nav class="menu-desktop">
               <Menu />
            </nav>
            <ToggleButton @open="OpenMenu" :class="activeMenu && 'is_active'" />
         </div>
      </section>
      <nav :class="[activeMenu && 'is_active']" class="menu-mobile">
         <div class="menu-background pt-1">
            <Menu @close="HideMenu" />
         </div>
      </nav>
   </header>
</template>

<script>
import './_header.scss'
export default {
   name: 'MainHeader',
   components: {
      Menu: () => import('@/components/molecules/Menu/Menu.vue'),
      BrandLogotype: () => import('@/components/utils/MovilBrand.vue'),
      ToggleButton: () => import('@/components/utils/ToggleButton.vue'),
      ThemeButton: () => import('@/components/utils/theme-buttom.vue'),
   },
   methods: {
      handleScroll() {
         let current = window.pageYOffset
         this.downUpScroll > current ? (this.hidden = true) : (this.hidden = false)
         window.pageYOffset > 2 ? (this.activeScroll = true) : (this.activeScroll = false)
         this.downUpScroll = window.pageYOffset
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
         downUpScroll: null,
         hidden: false,
         activeMenu: false,
         activeScroll: false,
      }
   },
   computed: {
      css_by_events() {
         return [this.activeScroll && 'active-scroll', (this.hidden && 'visible') || 'not-visible']
      },
   },
   mounted() {
      this.downUpScroll = window.pageYOffset
   },
}
</script>
