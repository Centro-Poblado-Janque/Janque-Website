<template>
   <p :class="setClass">
      {{ content }}
      <slot></slot>
   </p>
</template>

<script>
export default {
   name: 'Typography',
   props: {
      type: String,
      content: String,
   },
   computed: {
      setClass() {
         return {
            normal: this.type == undefined || null,
            sumarry: this.type == 'sumarry',
         }
      },
   },
}
</script>

<style></style>
