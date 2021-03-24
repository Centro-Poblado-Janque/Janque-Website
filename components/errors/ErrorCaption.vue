<template>
    <div :class="$style.caption_contain">
        <h5 :class="$style.error_caption">404 - Not Found</h5>
        <p :class="$style.p">La ruta <span :class="$style.error_route">{{ route }}</span> parece no estar en el mapa</p>
    </div>
</template>

<script>
export default {
    name: 'ErrorCaption',
    methods: {
        getRoute () {
            this.route = window.location.href;
        }
    },
    mounted () {
        this.getRoute()
    },
    data: () => ({
        route: ''
    })
}
</script>

<style lang="scss" module>
.caption_contain{
    padding: 1rem;
}
.error_caption{
    color: rgb(204, 91, 16);
    font-size: 2.8rem;
    padding: 0;
    margin: .5rem 0;
}
.p{
    font-size: 1rem;
    color: silver;
    padding: .5rem 0;
    .error_route{
        color: teal;
        font-weight: 600;
        text-decoration: underline;
    }
}
</style>