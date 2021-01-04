<template>
  <div class="a-grid">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import './../../static/libs/theme';
.a-grid{
    display: grid;
    row-gap: var(--gap);
    @media screen and(min-width: $tablet_breakpoints) {
        grid-template-columns: repeat(2,calc(50% - var(--gap)*3/4))
    }
    
}
</style>