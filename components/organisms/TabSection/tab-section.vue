<template>
   <div class="overfow-x tab-container">
      <button v-for="(item, index) in items" :key="index" class="btn-tab">
         <NuxtLink :to="{ path: path, query: { tags: item[property[0]] } }">
            {{ item[property[1]] }}
         </NuxtLink>
      </button>
   </div>
</template>

<script>
export default {
   props: {
      items: {
         type: Array,
         required: true,
      },
      property: Array,
      path: String,
   },
}
</script>

<style lang="scss">
.btn-tab a {
   padding: 0.5rem;
   display: inline-flex;
   font-weight: 600;
   text-transform: uppercase;
   background-color: var(--bg-light-100);
   margin-right: 0.25rem;
   color: var(--color-footer);
   &:hover {
      background-color: var(--bg-atention);
      color: #ebebeb;
   }
}
.tab-container {
   padding-bottom: 4px;
   border-bottom: 1px solid var(--bg-light-100);
}
</style>
