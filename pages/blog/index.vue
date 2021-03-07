<template>
    <MainContent class="page blog-page">
        <header class="blog-head">
            <Container>
                <h1 class="title">Welcome to Blog Center of This Page</h1>
            </Container>
        </header>

        <section class="blog-center">
            <Container class="container-reset">
                
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
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Blogs | Centro Poblado Janque',
    }),
    components: {
        Caption,
        BlogViews
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
.blog-page{
    padding-bottom: 2rem;
}
.blog-head {
    background-image: url('~assets/img/principal.png');
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all 0.1s ease-in-out;
    /*  animation: change_banner 14s infinite linear;  */
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
    padding: .5rem;
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, minmax(450px, 500px));
    grid-gap: var(--gap);
    @media screen and(min-width: 800px) {
        grid-template-columns: repeat(2, calc(50% - var(--gap)*2/2));
        grid-template-rows: repeat(2, auto);
    }
    @media screen and(min-width: 800px) {
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
