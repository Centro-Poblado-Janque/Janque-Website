# STYLE GUIDE FOR JANQUE WEBSITE

## Color Palette

- primary : `#02b69e` <span class="dot c-primary"></span>
- branding : `#f0852d` <span class="dot c-branding"></span>

## CSS Naming

- ### Base Styles

  > Not named because they only use HTML tags, include `normalize.scss`

- ### Layout Styles

  > These styles are for layout. They do not define behavior. They are general styles, and do not mix with components

  - **Normal** `prefix = 'ly'` example `class="l-section ly-grid"`
  - **Modidy** `symbol = ':'` example `class="grid-col:md-12"`
  - **Override** `suffix = '--mut'` example `class="l-section ly-grid--mut"`

- ### Modular Styles

  1. #### Sass files only
     - **Normal** `prefix = 'mod'` example `class="mod-bg-primary"`
  2. #### Vue Components only

     > Normally used in the composition of `Atoms`, `Molecules`, `Organisms`

     ```html
     <template>
       <div :class="$style['switch'] class="ly-flex ly-center">
         <input type="checkbox" id="theme__toggle" :class="$style['checkbox']" v-model="checked" />
         <label for="theme__toggle" :class="[$style['switch_dot'], checked && 'is-checked']" />
       </div>
     </template>
     <script>
       export default {
         name: 'Switch',
         data(){
           return {
             checked: false;
           }
         }
       }
     </script>
     <style lang="scss" module>
       /* import settings module { mixin, media sass-vars }  */
       @import '~/assets/scss/settings.scss';
       /* It is not necessary to put md- because css-modules generates it */
       .switch {
         position: relative;
         width: 3.25rem;
         height: 2rem;
         border: thin solid var(--bg-orange-acent);
         border-radius: var(--radius-normal);
       }
       .checkbox {
         display: none;
       }
       .switch__dot {
         position: absolute;
         top: calc(0.25rem - 2px);
         width: 1.5rem;
         height: 1.5rem;
         border-radius: 50%;
         transform: translateX(0.25rem)
         transition: transform 0.25s cubic-bezier(0.345, 1, 0.9, 1.125);
         &.is-checked {
           transform: translateX(3rem);
         }
       }
     </style>
     ```

  - **Normal** `prefix = 'md'` example `class="md-[type]--[hash:base32]"`

<style> 
.dot{
  width: 3rem;
  height:  1rem;
  display: inline-block;
  border-radius: .25rem;
}
.c-primary{
  background-color: #02b69e;
}
.c-branding{
  background-color: #f0852d;
}
</style>
