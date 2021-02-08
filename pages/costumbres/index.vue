<template>
    <section class="page costumer-page">
        <header class="costumer-head">
            <Container>
                <div class="position_left costumer-caption">
                    <h2 class="text-caption">
                        Welcome to costumer page
                    </h2>
                </div>
            </Container>
        </header>
        <div>
            <ul class="blog-card-container">
                <li
                    v-for="article of articles"
                    :key="article.slug"
                    class="blog-card"
                >
                    <BlogViews
                        :slug="article.slug"
                        :img="article.img"
                        :alt="article.slug"
                        :title="article.title"
                        :time="article.time"
                        :date="article.date"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import BlogViews from '../../components/blog/BlogViews.vue'
import Container from './../../components/container/Container.vue'

export default {
    head: () => ({
        title: 'Janque - Nuestras costumbres',

    }),
    components: {
        Container,
        BlogViews
    },
    async asyncData({ $content, params }) {
        const articles = await $content('costumbres', params.slug)
            .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
            .sortBy('createdAt', 'asc')
            .fetch()
        return{ articles }
    },
    data() {
        return {
            article: [],
        }
    },
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.page {
    color: var(--text-body);
}
.costumer-head {
    background-color: var(--grey-300);
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all 0.1s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    
}
</style>>
