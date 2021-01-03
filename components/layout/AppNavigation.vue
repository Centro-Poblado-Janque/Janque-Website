<template>
  <nav>
      <NavigationToggle />
      <NavigationLinks ref="nav" />
  </nav>
</template>

<script>
import NavigationLinks from './NavigationLinks.vue'
import NavigationToggle from './NavigationToggle.vue'
export default {
  name: 'AppNavigation',
  components: { 
    NavigationLinks,
    NavigationToggle 
  },
  mounted () {
    window.addEventListener('scroll', this.changeNavState);
  },
  onmounted () {
    window.removeEventListener('scroll', this.changeNavState);
  },
  methods: {
    changeNavState (e) {
      if(window.pageYOffset > 100){
        this.$refs.nav.$el.classList.add('bg_dark')
      }
      else{
        this.$refs.nav.$el.classList.remove('bg_dark')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
  min-height: 64px;
  width: 100%;
  position: fixed;
}
</style>
