<template>
   <li :class="[className, $style.item, forLink && $style.linkItem]">
      <slot></slot>
   </li>
</template>

<script>
export default {
   props: {
      className: String,
      forLink: Boolean,
   },
}
</script>

<style lang="scss" module>
@import '~/assets/scss/customs/mixin';
.item {
   display: list-item;
}
.linkItem {
   font-size: 1.6rem;
   text-transform: uppercase;
   font-weight: 500;
   margin-top: 1.5rem;
   transform: translateX(-100px);
   opacity: 0;
   font-family: var(--viga-font);
   @media screen and(min-width: $desktop_breakpoints) {
      background-color: transparent;
      text-transform: capitalize;
      font-size: 1.1rem;
      transform: translateX(0);
      opacity: 1;
      font-family: var(--noto-font);
      text-align: left;
      margin: 0;
   }
   :hover {
      background-color: rgba(0, 0, 0, 0.25);
   }
}
</style>
