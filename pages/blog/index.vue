<template>
    <MainContent class="page blog-page">
        <header class="blog-head">
            <Container>
                <Caption title="Nuestro Blog" />
            </Container>
        </header>

        <section class="blog-center">
            <Container class="container-reset">
                <h1 class="blog-caption">Tenemos muchos articulos para usted</h1>
                <ul class="blog-card-container">
                    <li v-for="article of articles" :key="article.slug" class="blog-card">
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
            </Container>
        </section>
    </MainContent>
</template>

<script>
import BlogViews from '../../components/blog/BlogViews.vue'
import MainContent from '../../components/layout/MainContent.vue'
import Container from './../../components/container/Container.vue'
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Blogs | Centro Poblado Janque',
    }),
    components: {
        Container,
        Caption,
        BlogViews,
        MainContent
    },
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
            .sortBy('createdAt', 'asc')
            .fetch()
        return {
            articles
        }
    }
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.blog-page{
    padding-bottom: 2rem;
}
.blog-head {
    background-image: url('./../../assets/img/blog_background.jpg');
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all 0.1s ease-in-out;
    @include normalize_img;
    /*  animation: change_banner 14s infinite linear;  */
}
.blog-center{
    padding: 3rem 0;
}
.container-reset{
    padding: .5rem;
}
.blog-card-container{
    display: grid;
    padding: .5rem;
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, minmax(450px, 500px));
    grid-gap: var(--gap);
    @media screen and(min-width: $tablet_breakpoints) {
        grid-template-columns: repeat(2, calc(50% - var(--gap)*2/2));
        grid-template-rows: repeat(2, auto);
    }
    @media screen and(min-width: $desktop_breakpoints) {
        grid-template-columns: repeat(3, calc(33.3333% - var(--gap)*2/3));
        grid-template-rows: repeat(2, 450px);
    }
}
.blog-card{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border: 1px solid var(--card-border-bg);
    @media screen and(min-width: $desktop_breakpoints) {
        &:nth-child(1){
            grid-column: 1 / span 2;
        }
    }
    &:hover{
        p{
            height: auto;
            opacity: 1; 
        }
    }
}
.blog-caption{
    font-family: var(--blog-title-font);
    color: var(--blog-title-color);
    font-size: 3em;
}
</style>
