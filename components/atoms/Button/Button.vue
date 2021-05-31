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
