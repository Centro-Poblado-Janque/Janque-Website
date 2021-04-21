<template>
   <MainContent class="post-main p-page">
      <SocialMediaSEO :title="article.title" :description="article.description" :url="'blog/' + article.slug" />
      <header class="post-head">
         <img :src="'./../resources/img/' + article.img" :alt="article.slug" class="img-background" />
         <Container class="container-reset">
            <div class="post-metadates">
               <h1 class="a-title is-light">{{ article.title }}</h1>
               <span class="read-time">
                  <FontAwesomeIcon :icon="faClock" />
                  {{ article.time }} minutos
               </span>
               <span class="current-time">
                  <FontAwesomeIcon :icon="faCalendar" />
                  {{ article.date }}
               </span>
            </div>
         </Container>
      </header>
      <section class="blog-post">
         <Container>
            <div class="redirect_links">
               <NuxtLink to="/"><FontAwesomeIcon :icon="faHome"/></NuxtLink>
               <NuxtLink class="after" :to="`./../blog`">Blog</NuxtLink>
               <NuxtLink class="after" :to="'/blog/' + article.slug">{{ article.title }}</NuxtLink>
            </div>
            <PostArticle>
               <template>
                  <NuxtContent :document="article" />
               </template>

               <template #autor-content>
                  <img class="avatar-model" :src="'./../avatar-img/' + article.avatar" :alt="article.alt" />
                  <span class="author-dates">
                     <p class="blog-author">{{ article.author }}</p>
                     <a
                        class="blog-contact"
                        :href="'https://twitter.com/' + article.twitter"
                        rel="noopeper"
                        target="_blank"
                     >
                        <FontAwesomeIcon :icon="faTwitter" class="blue-color" />
                        {{ article.twitter }}
                     </a>
                  </span>
               </template>

               <template #items-view>
                  <ul>
                     <li v-for="ids of id" :key="ids.id">
                        <a :href="`#${ids.id}`" class="content_item">
                           {{ ids.text }}
                        </a>
                     </li>
                  </ul>
               </template>
            </PostArticle>
            <div id="disqus_thread" class="disqus-comment"></div>
         </Container>
      </section>
   </MainContent>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default {
   components: {
      FontAwesomeIcon,
   },
   head() {
      return {
         title: this.article.title,
      }
   },
   async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article, id: article.toc }
   },
   data: () => ({
      faHome,
      faTwitter,
      faClock,
      faCalendar,
   }),
}
</script>
<style lang="scss">
.post-main {
   width: 100%;
}
.post-head {
   position: relative;
   top: 0;
   height: 80vh;
   .img-background {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      object-fit: cover;
      filter: brightness(0.5) blur(1.5px);
      width: 100%;
      height: 100%;
   }
}
.redirect_links {
   position: relative;
   padding: 0.5rem;
   margin-bottom: 1rem;
   a {
      color: var(--grey-200);
      &::after {
         display: none;
      }
   }
   .after::before {
      content: '\2192';
      font-family: Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif;
      color: #a9a9a9;
      display: inline-block;
      margin: 0 9px 0 7px;
   }
}
.post-metadates {
   color: var(--dark-light-100);
   position: absolute;
   padding: 0.5rem;
   bottom: 10%;
   .article-title {
      font-family: var(--blog-title-font);
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--blog-title-color-white);
      margin-bottom: 1rem;
   }
   .svg-icon {
      width: 0.9rem;
      height: 0.9rem;
      fill: var(--dark-light-100);
      margin-right: 4px;
   }
   .current-time {
      padding-left: 10px;
   }
}
.blog-post {
   padding-top: 3rem;
   margin-bottom: 3rem;
   font-family: var(--open-sans-font);
   h2 {
      font-family: var(--nunito-font);
      font-size: 1.5rem;
      padding: 15px 5px;
      font-weight: bold;
      color: var(--blog-title-color);
      position: relative;
      &:nth-child(1) {
         padding-top: 0;
         padding-bottom: calc(5px + 1rem);
      }
   }
   p {
      line-height: 1.8;
      font-size: 1rem;
      padding-bottom: 1.5rem;
   }
   @media screen and (min-width: 1024px) {
      p {
         font-size: 1.1rem;
      }
      h2 {
         font-size: 2rem;
      }
   }
}
.avatar-model {
   border-radius: 50%;
   width: 3rem;
   height: 3rem;
   object-fit: cover;
   object-position: 50% 50%;
   margin-right: 1rem;
}
.author-dates {
   text-align: center;
   line-height: 1;
   font-family: var(--noto-font);
   p {
      padding: 0;
   }
   .blog-author {
      text-transform: capitalize;
      font-weight: bold;
      color: var(--blue-depth);
   }
   .blog-contact {
      font-size: 0.85rem;
      color: var(--dark-light-200);
      i {
         padding-right: 4px;
         color: var(--blue-depth-200);
      }
   }
}
.content_item {
   display: block;
   color: var(--blue-depth);
   line-height: 1.5;
   margin-bottom: 0.5rem;
   padding: 0.25rem 1rem;
   &:hover {
      background-color: #2a3b47;
      border-radius: 0.25rem;
      color: silver;
   }
}
.blue-color {
   color: var(--blue-depth-200);
}
.disqus-comment {
   padding-top: 4rem;
   padding: 1rem;
}
</style>
