<template>
   <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      class="bg-teal svg-inline--fa fa-calendar fa-w-16"
      fill="none"
   >
      <path v-for="path in icon.xml.path" :key="path" :d="path" class="m8-calendar" />
   </svg>
</template>

<script>
export default {
   name: 'FontAwesone',
   props: {
      icon: {
         type: Object,
      },
   },
}
</script>

<style lang="scss">
.m8-calendar {
   fill: currentColor;
   &:nth-child(1) {
      stroke: currentColor;
      fill: none;
   }
}
</style>
