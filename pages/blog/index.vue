<template>
    <MainContent class="page blog-page">
        <header class="blog-head">
            <Container>
                <p class="title">Blog de Janque</p>
            </Container>
        </header>

        <section class="blog-center">
            <Container class="container-reset">
                
                <ul class="blog-card-container">
                    <li v-for="article of articles" :key="article.slug" class="blog-card">
                        <PostCards
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
import PostCards from '../../components/blog/PostCards.vue'
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Blogs | Centro Poblado Janque',
    }),
    components: {
        Caption,
        PostCards
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
@import '~/assets/styles/mixin';
.blog-page{
    padding-bottom: 2rem;
}
.blog-head {
    background-image: radial-gradient(circle at 33% 41%, rgba(250, 250, 250,0.03) 0%, rgba(250, 250, 250,0.03) 50%,rgba(37, 37, 37,0.03) 50%, rgba(37, 37, 37,0.03) 100%),radial-gradient(circle at 76% 49%, rgba(28, 28, 28,0.03) 0%, rgba(28, 28, 28,0.03) 50%,rgba(187, 187, 187,0.03) 50%, rgba(187, 187, 187,0.03) 100%),radial-gradient(circle at 41% 99%, rgba(247, 247, 247,0.03) 0%, rgba(247, 247, 247,0.03) 50%,rgba(120, 120, 120,0.03) 50%, rgba(120, 120, 120,0.03) 100%),radial-gradient(circle at 66% 27%, rgba(17, 17, 17,0.03) 0%, rgba(17, 17, 17,0.03) 50%,rgba(156, 156, 156,0.03) 50%, rgba(156, 156, 156,0.03) 100%),linear-gradient(0deg, rgb(18, 81, 88),rgb(39, 101, 99)) ,url('~assets/img/janque-day.png');
    @include normalize_img;
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all 0.1s ease-in-out;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(37, 37, 37);
    font-size: 3rem;
    font-weight: 600;
    font-family: var(--nunito-sans-font);
}
.blog-center{
    padding: 3rem 0;
}
.container-reset{
    padding: .5rem;
}
.blog-card-container{
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 400px;
    grid-gap: var(--grid-gap);
    @media screen and(min-width: 800px) {
        grid-template-columns: repeat(3, calc(33.3333% - var(--gap)*2/3));
    }
}
.blog-card{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border: 1px solid var(--card-border-bg);
    @media screen and(min-width: 800px) {
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
