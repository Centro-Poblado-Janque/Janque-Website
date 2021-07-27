<template>
   <div class="m-card-content u-radius:3 p-1">
      <ol class="list-container">
         <li v-for="(item, index) in list" :key="index">
            <a v-if="property !== null" :href="'#' + item[property[0]]" class="list--item">{{
               item[property[1]]
            }}</a>
         </li>
      </ol>
   </div>
</template>

<script>
export default {
   props: {
      list: {
         type: Array,
         required: true,
      },
      property: Array,
   },
}
</script>

<style lang="scss">
.list--item {
   display: block;
   color: #1b7568;
   line-height: 1.5;
   margin-bottom: 0.25rem;
   padding: 0.25rem 1rem;
   border-radius: 0.25rem;
   &:hover {
      background-color: #2a3b47;
      color: silver;
   }
}
</style>
