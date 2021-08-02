<template>
   <div>
      <!-- //========//do the implementation later
         <label class="send-btn" for="search-input">
         <FontAwesomeIcon :icon="faSearch" />
      </label> -->

      <form class="nav_search" @submit="getPosts">
         <input
            id="search-input"
            class="nav-input-search"
            type="search"
            placeholder="Que desea buscar"
            v-model="searchQuery"
         />
         <button class="button">
            <FontAwesomeIcon :icon="faSearch" />
         </button>
      </form>

      <ul v-if="searchArray.length !== 0" class="search-results">
         <li v-for="(items, index) in searchArray.articles" :key="index" class="search-item articles">
            <NuxtLink
               @click.native="$emit('close')"
               :to="{ name: 'blog-slug', params: { slug: items.slug } }"
            >
               {{ items.title }}
            </NuxtLink>
            <span>articulos</span>
         </li>

         <li v-for="items in searchArray.notices" :key="items.path" class="search-item notices">
            <NuxtLink
               @click.native="$emit('close')"
               :to="{ name: 'noticias-slug', params: { slug: items.slug } }"
            >
               {{ items.title }}
            </NuxtLink>
            <span>noticias</span>
         </li>
      </ul>
   </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// FALTA HACER MAS IMPLEMENTACIONES
export default {
   name: 'SeachModel',
   components: {
      FontAwesomeIcon,
   },
   methods: {
      async getPosts(e) {
         e.preventDefault()
         if (this.searchQuery != '' && this.searchQuery.length > 4) {
            const articles = await this.$content('articles')
               .only(['title', 'slug'])
               .search(this.searchQuery)
               .limit(3)
               .fetch()

            const notices = await this.$content('notices')
               .only(['title', 'slug'])
               .search(this.searchQuery)

               .fetch()
            this.searchArray = { articles, notices }
         }
         this.searchQuery = ''
      },
   },
   data() {
      return {
         faSearch,
         searchQuery: '',
         searchArray: [],
      }
   },
}
</script>
<style lang="scss">
@import '~/assets/scss/customs/settings';
.search--controller {
   height: 100%;
}
.nav_search {
   //background-color: var(--bg-color-acent);
   border-radius: 3px;
   font-family: var(--navigation-font);
   display: flex;
   height: inherit;
   justify-content: space-between;
   align-items: center;
   border: 1px solid var(--nav-border-bottom);
   padding: 0.5rem;
   .nav-input-search {
      background-color: transparent;
      width: 100%;
      height: 100%;
      color: #adadad;
   }
   .button {
      color: grey;
   }
   @media screen and(min-width: $lg) {
      margin: 0;
      background-color: transparent;
      border: none;
      padding: 0;
      .nav-input-search {
         width: 0;
         height: 0;
      }
      .button {
         display: none;
      }
   }
}
.send-btn {
   background-color: var(--bg-primary);
   width: 3rem;
   height: rem(30);
   display: inline-flex;
   align-items: center;
   justify-content: center;
   border-radius: rem(15);
   color: white;
}
.search-item {
   padding: 0.5rem;
   border-radius: 3px;
   margin-top: 1rem;
   max-height: 40px;
   text-overflow: ellipsis;
   display: flex;
   justify-content: space-between;
   align-content: center;
   &.articles {
      background-color: #02b69e;
   }
   &.notices {
      background-color: var(--bg-primary);
   }
   span {
      display: inline-block;
      text-align: left;
   }
   a {
      max-width: 300px;
      color: white;
      overflow: hidden;
   }
}
</style>
