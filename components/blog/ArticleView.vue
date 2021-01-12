<template>
    <div class="blog-post-container">
        <article class="blog-content lg_grid_7 card-template pg-4">
            <slot></slot>

        </article>
        <section class="aside-content lg_grid_3">
            <article class="autor-content card-template pg-3">
                <slot name="autor-content"></slot>

            </article>
            <aside class="others-blogs card-template pg-3">
                <slot name="others-blog"></slot>

            </aside>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ArticleViews'
}
</script>

<style lang="scss" scoped>
.blog-post-container{
    display: grid;
    grid-template-columns: 100%;
    column-gap: var(--gap);
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(10,calc(10% - var(--gap)*9/10)); 
    }
}
.lg_grid_7{
    @media screen and (min-width: 1024px){
        grid-column-end: span 7;  
    }
}
.lg_grid_3{
    @media screen and (min-width: 1024px){
        grid-column-end: span 3;  
    }
}
.card-template{
    background-color: var(--card-bg-blog);
    border-radius: .5rem;
    border: 1px solid var(--card-border-bg);
}
.autor-content{
    display: flex;
    align-items: center;
}
.pg-4{
    padding: 1rem;
    margin-top: var(--gap);
    @media screen and (min-width: 1024px){
        padding: 2rem;
        margin: 0;  
    }
}
.pg-3{
    padding: 1rem;
    margin-top: var(--gap);
    @media screen and (min-width: 1024px){
        padding: 1.5rem; 
        margin: 0;  
    }
}
</style>