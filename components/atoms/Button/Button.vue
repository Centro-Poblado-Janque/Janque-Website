<template>
   <button class="btn" :class="setMirror">{{ text }}</button>
</template>

<script>
export default {
   props: {
      text: String,
      type: String,
   },
   computed: {
      setMirror() {
         return {
            primary: this.type == null,
            secondary: this.type == 'secondary',
            'dt-secondary': this.type == 'dt-secondary',
         }
      },
   },
}
</script>

<style lang="scss">
.btn {
   display: inline-block;
   padding: 0.5rem 0.75rem;
   border-radius: 3px;
   font-weight: 600;
   &.dt-secondary {
      border: 2px solid lightblue;
   }
   &.primary {
      background-color: lightseagreen;
   }
   &.secondary {
      background-color: magenta;
   }
}
</style>
