<template>
   <ViewBox :class="[$style.switchContainer]">
      <div :class="[$style.switch]">
         <input type="checkbox" id="theme__toggle" :class="$style.checkbox" v-model="checked" />
         <label for="theme__toggle" :class="[$style.dot, $style.fixedLeft]">
            <FontAwesomeIcon :icon="checked ? faSun : faMoon" :class="$style['icon']" />
         </label>
         <label for="theme__toggle" :class="$style['after']" />
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
         checked: true,
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
   width: 90px;
   top: 0;
   left: 0;
   z-index: 110;
   height: 100%;
   @include cross-center;
}
.switch {
   border: thin solid #3b3b3b;
   width: 64px;
   background-color: var(--switch-bg);
   border-radius: 25px;
   padding: 6px;
}
.after {
   position: absolute;
   top: 31%;
   left: 52%;
   border-radius: 25px;
   height: 24px;
   width: 24px;
   transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
   background-color: silver;
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
      left: 21%;
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
