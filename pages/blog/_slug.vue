<template>
   <MainContent class="post-main p-page">
      <SocialMediaSEO
         :title="article.title"
         :description="article.description"
         :url="'blog/' + article.slug"
      />
      <ViewSlug>
         <template #header>
            <img
               :src="'/resources/img/' + article.img"
               :alt="article.slug"
               class="absolute-wide img-background is-img"
            />
            <div class="l-section">
               <ArticleHeaderInfo :info="article" />
            </div>
         </template>

         <template #links>
            <div class="redirect_links ">
               <NuxtLink to="/"><FontAwesomeIcon :icon="faHome"/></NuxtLink>
               <NuxtLink class="after" :to="`./../blog`">Blog</NuxtLink>
               <NuxtLink class="after" :to="'/blog/' + article.slug">{{ article.title }}</NuxtLink>
            </div>
         </template>

         <template>
            <section class="blog-post grid--col-7">
               <CardContent :article="article" :document="true" />
            </section>
            <section class="grid--col-3">
               <CardContent class="_s-author ly-flex">
                  <img
                     class="avatar-model"
                     :src="'https://cp-janque.com/resources/img/' + article.avatar"
                     :alt="article.alt"
                  />
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
               </CardContent>
               <DisplayList class="ly-sticky" :list="id" :property="['id', 'text']" />
            </section>
            <div id="disqus_thread" class="disqus-comment grid--col-10 pd-especial discus"></div>
         </template>
      </ViewSlug>
   </MainContent>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default {
   components: {
      ViewSlug: () => import('@/components/templates/BlogTemplate/ViewSlug.vue'),
      CardContent: () => import('@/components/molecules/CardContent/CardContent.vue'),
      DisplayList: () => import('@/components/molecules/DisplayList/Display.vue'),
      ArticleHeaderInfo: () => import('@/components/organisms/Sections/ArticleHeaderInfo.vue'),
      FontAwesomeIcon,
   },
   head() {
      return {
         title: this.article.title,
         script: [{ src: './../disqus.js' }],
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
.img-background {
   width: 100%;
   filter: blur(1.5px) brightness(0.75);
   height: 100%;
   object-fit: cover;
}
.redirect_links {
   position: relative;
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
   color: whitesmoke;
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
   h2 {
      line-height: 1.7rem;
      font-size: 1.5rem;
      padding: 15px 5px;
      font-weight: bold;
      color: #f0852d;
      position: relative;
      &:nth-child(1) {
         padding-top: 0;
         padding-bottom: calc(5px + 1rem);
      }
   }
   @media screen and (min-width: 1024px) {
      h2 {
         font-size: 1.8rem;
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
   line-height: 1.5rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
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
      color: #17808b;
      i {
         padding-right: 4px;
         color: var(--blue-depth-200);
      }
   }
}
.blue-color {
   color: var(--blue-depth-200);
}
.disqus-comment {
   // background-color: rgba(58, 58, 58, 0.056);
   border-radius: 3px;
   border: 1px solid #8c858144;
   background-color: var(--bg-light);
}
._s-author {
   margin-bottom: 1.5rem;
   justify-content: center;
}
</style>
