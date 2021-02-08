<template>
  <nav>
      <div class="nav_toggle" ref="toggle">
        <ToggleButton @click.native="OpenNav" ref="toggleBtn" />
        <LogoJanque />
      </div>
      <NavigationLinks ref="nav" @click.native="HideNav" />
      <ThemeButton />
  </nav>
</template>

<script>
import LogoJanque from '../utils/LogoJanque.vue';
import ThemeButton from '../utils/theme-buttom.vue';
import ToggleButton from '../utils/ToggleButton.vue';
import NavigationLinks from './NavigationLinks.vue'
export default {
  name: 'AppNavigation',
  components: { 
    NavigationLinks,
    ToggleButton,
    LogoJanque,
    ThemeButton
  },
  mounted () {
    console.log(this.isActive)
    window.addEventListener('scroll', this.changeNavState);
  },
  onmounted () {
    window.removeEventListener('scroll', this.changeNavState);
  },
  methods: {
    changeNavState () {
      window.pageYOffset > 2
        ? this.$refs.nav.$el.classList.add('bg_dark')
        : this.$refs.nav.$el.classList.remove('bg_dark')
    
    },
    OpenNav () {
      this.$refs.nav.$el.classList.toggle('is_active')
      this.$refs.toggleBtn.$el.classList.toggle('is_active')
    },
    HideNav () {
      this.$refs.nav.$el.classList.remove('is_active')
      this.$refs.toggleBtn.$el.classList.remove('is_active')
    }
  }
}
</script>

<style lang="scss" >
@import './../../assets/styles/theme';
.nav_toggle{
  min-height: 64px;
  height: 64px;
  background-color: var(--light-second);
  border-bottom: 1px solid var(--grey-border);
  @media screen and(min-width: $desktop_breakpoints){
    background-color:  transparent;
    display: none;
  }
} 
nav{
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 64px;
  z-index: 999;
  left: 0;
}
a.is_active{
    .className:nth-child(1) {
			top: 32px;
			transform: rotate(45deg);
		}
		.className:nth-child(2) {
			top: 30px;
			opacity: 0;
		}
		.className:nth-child(3) {
			top: 32px;
			transform: rotate(-45deg);
		}
}
</style>
