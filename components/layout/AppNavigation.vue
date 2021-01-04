<template>
  <nav>
      <div class="nav_toggle" ref="toggle">
        <ToggleButton @click.native="OpenNav" ref="toggleBtn" />
        <LogoJanque />
      </div>
      <NavigationLinks ref="nav" />
  </nav>
</template>

<script>
import LogoJanque from '../utils/LogoJanque.vue';
import ToggleButton from '../utils/ToggleButton.vue';
import NavigationLinks from './NavigationLinks.vue'
export default {
  name: 'AppNavigation',
  components: { 
    NavigationLinks,
    ToggleButton,
    LogoJanque
  },
  mounted () {
    window.addEventListener('scroll', this.changeNavState);
  },
  onmounted () {
    window.removeEventListener('scroll', this.changeNavState);
  },
  methods: {
    changeNavState (e) {
      if(window.pageYOffset > 60){
        this.$refs.nav.$el.classList.add('bg_dark')
      }
      else{
        this.$refs.nav.$el.classList.remove('bg_dark')
      }
    },
    OpenNav () {
      this.$refs.nav.$el.classList.toggle('is_active')
      console.log(this.$refs.toggleBtn)
      this.$refs.toggleBtn.$el.classList.toggle('is_active')
    }
  }
}
</script>

<style lang="scss" >
@import './../../static/libs/theme';
.nav_toggle{
  min-height: 64px;
  height: 64px;
  background-color: #121514;
  border-bottom: .5px solid #696969;
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
			top: 30px;
			transform: rotate(45deg);
		}
		.className:nth-child(2) {
			top: 28px;
			opacity: 0;
		}
		.className:nth-child(3) {
			top: 30px;
			transform: rotate(-45deg);
		}
}
</style>
