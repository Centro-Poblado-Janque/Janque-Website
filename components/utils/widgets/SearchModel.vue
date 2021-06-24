<template>
   <form class="nav_search">
      <input class="nav-input-search" type="text" placeholder="Que desea buscar" />
      <input type="submit" value="" id="send" hidden />
      <label for="send" class="send-search" role="button">
         <FontAwesomeIcon :icon="faSearch" />
      </label>
   </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
   name: 'SeachModel',
   components: {
      FontAwesomeIcon,
   },
   data: () => ({
      faSearch,
   }),
}
</script>
<style lang="scss">
@import '~/assets/scss/customs/mixin';
.nav_search {
   margin-top: 1.5rem;
   background-color: var(--bg-color-acent);
   padding: 0.5rem;
   border-radius: 3px;
   font-family: var(--viga-font);
   display: flex;
   justify-content: space-between;
   align-items: center;
   .nav-input-search {
      background-color: transparent;
      width: 100%;
      height: 100%;
      color: #4f5050;
   }
   @media screen and(min-width: $desktop_breakpoints) {
      order: 4;
      margin: 0;
      background-color: none;
      .nav-input-search {
         width: 0;
         height: 0;
      }
   }
}
.Menu--search {
   opacity: 0;
   transform: translateX(-100px);
}
</style>
