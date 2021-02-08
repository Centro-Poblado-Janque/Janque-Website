<template>
    <div class="blog-post-container ly_grid ly_grid_10">
        <article class="blog-content lg_grid_7 card-template pg-4">
            <slot></slot>

        </article>
        <section class="aside-content lg_grid_3">
            <article class="autor-content card-template top-blue pg-3">
                <slot name="autor-content"></slot>

            </article>
            <div class="others-blogs card-template top-blue pg-3">
                <slot name="others-blog"></slot>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ArticleViews'
}
</script>

<style lang="scss">
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
    position: relative;
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
    margin-top: calc(var(--gap) / 2 );
    @media screen and (min-width: 1024px){
        padding: 1.5rem; 
        margin: 0;  
    }
}
.top-blue{
    &::after{
        content: "";
        position: absolute;
        background: var(--blue-depth);
        left: 0;
        height: .20rem;
        width: 100%;
        border-radius: 2rem 2rem 0 0;
        top: 0;
    }
}
.others-blogs{
    margin-top: calc(var(--gap) / 2 );
    position: sticky;
    top: calc(4rem + 32px);
}
</style>