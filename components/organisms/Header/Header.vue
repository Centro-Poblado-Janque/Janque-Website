<template>
   <header v-scroll="handleScroll" :class="['module--header', activeMenu && 'drawer-out']">
      <section class="header-wide" :class="[activeScroll && 'active-scroll']">
         <div class="header container md-flex fl-center">
            <ThemeButton />
            <BrandLogotype />
            <nav class="menu-desktop">
               <Menu />
            </nav>
            <ToggleButton @open="OpenMenu" :class="activeMenu && 'is_active'" />
         </div>
      </section>
      <nav :class="[activeMenu && 'is_active']" class="menu-mobile pt-1">
         <Menu @close="HideMenu" />
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
   mounted() {
      console.log(this.$router)
   },
}
</script>
