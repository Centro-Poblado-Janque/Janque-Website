<template>
   <article class="o-card-template:blog">
      <img :src="img" :alt="alt" class="a-Image is-abs-full-size bg" />
      <section class="o-card-meta">
         <div class="blog-metadates">
            <span class="read-time">
               <FontAwesomeIcon :icon="faClock" />
               {{ time }} minutos
            </span>
            <span class="current-time">
               <FontAwesomeIcon :icon="faCalendar" />
               {{ date }}
            </span>
         </div>
         <h2>{{ title }}</h2>
         <NuxtLink class="a-Button a-Button--info" :to="{ name: 'blog-slug', params: { slug: slug } }">
            Seguir Leyendo
         </NuxtLink>
      </section>
   </article>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'
export default {
   name: 'BlogViews',
   components: {
      FontAwesomeIcon,
   },
   props: {
      slug: String,
      img: String,
      alt: String,
      title: String,
      time: Number,
      date: String,
   },
   data: () => ({
      faClock,
      faCalendar,
   }),
}
</script>
