<template>
    <button :class="$style.button + ' ' + color">
      TE AMO
    </button>
</template>

<script>
export default {
  props: {
    color: ''
  }
}
</script>

<style module lang="scss">
.button{
    color: grey;
}
.teal{
  background-color: teal;
}
.green{
  background-color: green;
}
</style>

<style lang="scss">
.teal{
  background-color: teal;
}
</style>