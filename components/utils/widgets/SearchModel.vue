<template>
   <div class="search--controller">
      <form class="nav_search" @submit="getPosts">
         <input class="nav-input-search" type="text" placeholder="Que desea buscar" v-model="search" />
         <button class="send-btn">
            <FontAwesomeIcon :icon="faSearch" />
         </button>
      </form>
      <ul>
         <li v-for="(items, index) in searchArray.articles" :key="index" class="search-item articles">
            <NuxtLink
               @click.native="$emit('close')"
               :to="{
                  name: 'blog-slug',
                  params: {
                     slug: items.path
                        .split('/')
                        .slice(2, 3)
                        .join(''),
                  },
               }"
            >
               {{ items.title }}
            </NuxtLink>
            <span>articulos</span>
         </li>

         <li v-for="(items, index) in searchArray.notices" :key="index" class="search-item notices">
            <NuxtLink
               @click.native="$emit('close')"
               :to="{
                  name: 'noticias-slug',
                  params: {
                     slug: items.path
                        .split('/')
                        .slice(2, 3)
                        .join(''),
                  },
               }"
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

export default {
   name: 'SeachModel',
   components: {
      FontAwesomeIcon,
   },
   methods: {
      async getPosts(e) {
         e.preventDefault()
         if (this.search != '') {
            const articles = await this.$content('articles')
               .only(['title', 'path'])
               .search(this.search)
               .fetch()

            const notices = await this.$content('notices')
               .only(['title', 'path'])
               .search(this.search)
               .fetch()
            this.searchArray = { articles, notices }
         }
         console.log(this.search, this.searchArray, this.$router)
         this.search = ''
      },
   },
   data() {
      return {
         faSearch,
         search: '',
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
   background-color: var(--bg-color-acent);
   border-radius: 3px;
   font-family: var(--navigation-font);
   display: flex;
   height: inherit;
   justify-content: space-between;
   align-items: center;
   border: 1px solid grey;
   padding: 0.5rem;
   .nav-input-search {
      background-color: transparent;
      width: 100%;
      height: 100%;
      color: #4f5050;
   }
   @media screen and(min-width: $lg) {
      margin: 0;
      background-color: none;
      border: none;
      .nav-input-search {
         width: 0;
         height: 0;
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
   }
}
.search-item {
   padding: 0.5rem;
   border-radius: 3px;
   margin-top: 1rem;
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
      color: white;
   }
}
.Menu--search {
   opacity: 0;
   transform: translateX(-100px);
}
</style>
