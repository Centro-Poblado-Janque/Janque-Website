<template>
   <div :class="[$style.switchContainer]" class="ly-flex fl-center">
      <div :class="[$style.switch]">
         <input type="checkbox" id="theme__toggle" :class="$style.checkbox" v-model="checked" />
         <label for="theme__toggle" :class="$style['after']" />
      </div>
   </div>
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
@import '~/assets/scss/customs/settings';
.switchContainer {
   height: 40px;
   width: 40px;
}
.switch {
   width: 38px;
   height: 24px;
   border-radius: 12px;
   border: 1px solid #f0852d;
   background-color: #f0852d;
   position: relative;
}
.after {
   position: absolute;
   top: 3px;
   left: 16px;
   border-radius: 8px;
   height: 16px;
   width: 16px;
   transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
   background-color: white;
}
.fixedLeft {
   font-size: 20px;
}
.checkbox {
   display: none;
   &:checked + .dot {
      margin-left: 28px;
   }
   &:checked ~ .after {
      left: 2px;
   }
}
.dot {
   height: 100%;
   transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.icon {
   color: var(--theme-dot);
}
</style>
