<template>
  <header class="main-header" aria-label="main-header" ref="header">
    <!-- Mobile Markup -->
      <div class="nav_toggle" ref="toggle">
        <ToggleButton @click.native="OpenNav" ref="toggleBtn" />
        <LogoJanque />
      </div>
    <!-- Mobile Markup end  -->
      <NavigationLinks ref="nav" @click.native="HideNav" />
      <ThemeButton />
      <div class="no-desktop">
        <div class="menu-background top" />
        <div class="menu-background bottom" />
      </div>
  </header>
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
      this.active = true;
      this.$refs.nav.$el.classList.toggle('is_active')
      this.$refs.header.classList.toggle('drawer-out')
      this.$refs.toggleBtn.$el.classList.toggle('is_active')
    },
    HideNav () {
      this.active = false;
      this.$refs.nav.$el.classList.remove('is_active')
      this.$refs.toggleBtn.$el.classList.remove('is_active')
      this.$refs.header.classList.remove('drawer-out')
    }
  },
  data() {
    return{
      active: ""
    }
  }
}
</script>

<style lang="scss" >
@import './../../assets/styles/theme';
.nav_toggle{
  min-height: 64px;
  height: 64px;
  position: fixed;
  margin: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 11;
  background-color: var(--light-second);
  border-bottom: 1px solid var(--grey-border);
  @media screen and(min-width: $desktop_breakpoints){
    display: none;
  }
} 

.no-desktop{
  @media screen and(min-width: $desktop_breakpoints){
    display: none;
  }
}
.main-header{
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 64px;
  z-index: 999;
  left: 0;
}
.dt-btn.is_active{
    .dt:nth-child(1) {
			left: 1.25px;
      top: 2px;
			transform: rotate(45deg);
		}
		.dt:nth-child(2) {
			left: calc(50% - 3px);
      top: 2px;
      transform: rotate(45deg)
		}
		.dt:nth-child(3) {
			left: -50%;
      opacity: 0;
		}

    .dt:nth-child(4) {
			left: 100%;
      opacity: 0;
		}
		.dt:nth-child(5) {
			left: 1.25px;
      top: 11px;
      transform: rotate(45deg)
		}
		.dt:nth-child(6) {
			left: calc(50% - 2px);
      top: 11px;
      transform: rotate(45deg)
		}
}
.menu-background{
    width: 300%;
    height: 250px;
    position: absolute;
    left: -120%;
    top: 100px;
    background-color: var(--light-primary);
    visibility: hidden;
    transition: all 0.25s cubic-bezier(0.83, 0.65, 0.47, 1);
    &.top{
      transform: rotate(-45deg) translateY(-300%) scaleY(0);
    }
    &.bottom{
      transform: rotate(-45deg) translateY(330%) scaleY(0);
    }
}
.drawer-out{
  .menu-background {
    transition: all 0.5s cubic-bezier(0.83, 0.65, 0.47, 1);
    visibility: visible;
    &.bottom {
      transform: rotate(-45deg) translateY(250%) scaleY(4.1);
    }
    &.top{
      transform: rotate(-45deg) translateY(-150%) scaleY(4.1);
    }
  }
  .nav_item{
    opacity: 1;
    transform: translateX(0px);
    transition: transform 0.35s, opacity 0.5s ease-in;
    &:nth-child(1){
      transition-delay: 0.1s;
    }
    &:nth-child(2){
      transition-delay: 0.2s;
    }
    &:nth-child(3){
      transition-delay: 0.3s;
    }
    &:nth-child(4){
      transition-delay: 0.4s;
    }
    &:nth-child(5){
      transition-delay: 0.5s;
    }
    &:nth-child(6){
      transition-delay: 0.6s;
    }
  }

}
</style>
