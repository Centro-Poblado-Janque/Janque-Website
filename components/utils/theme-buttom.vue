<template>
   <ViewBox :class="[$style.switchContainer]">
      <div :class="[$style.switch]">
         <input type="checkbox" id="theme__toggle" :class="$style.checkbox" v-model="checked" />
         <label for="theme__toggle" :class="[$style.dot, $style.fixedLeft]">
            <FontAwesomeIcon :icon="checked ? faSun : faMoon" />
         </label>
      </div>
   </ViewBox>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
export default {
   name: 'ThemeButton',
   components: {
      FontAwesomeIcon,
   },
   data() {
      return {
         faSun,
         faMoon,
         checked: false,
         getTheme: '',
      }
   },
   head() {
      return {
         htmlAttrs: {
            'data-theme': this.getContext(),
         },
      }
   },
   mounted() {
      this.getContext()
   },
   methods: {
      getContext() {
         if (this.checked) {
            return 'dark'
         } else {
            return 'light'
         }
      },
   },
}
</script>

<style lang="scss" module>
@import '~/assets/scss/customs/mixin';
.switchContainer {
   position: absolute;
   width: 100px;
   top: 0;
   height: 110%;
   overflow: hidden;
   @media (min-width: $desktop_breakpoints) {
      overflow: visible;
   }
}
.switch {
   position: absolute;
   top: -50px;
   left: -25px;
   z-index: 110;
   height: 140px;
   width: 70px;
   transform: rotate(45deg);
   background-color: #25454d;
   padding: 1rem;
}
.fixedLeft {
   transform: rotate(-45deg);
   position: absolute;
   bottom: 63px;
   right: 15px;
   color: var(--v-orange-primary);
   font-size: 1.25rem;
}
.checkbox {
   display: none;
   &:checked + .dot {
      background: #25454d;
      &::after {
         left: 33px;
      }
   }
}
</style>
