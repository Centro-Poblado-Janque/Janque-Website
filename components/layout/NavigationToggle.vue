<template>
  <div class="nav_toggle">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './../../static/libs/theme';
.nav_toggle{
    min-height: 64px;
    background-color: #121514;
    @media screen and(min-width: $desktop_breakpoints){
        background-color:  transparent;
        display: none;
    }

}
</style>