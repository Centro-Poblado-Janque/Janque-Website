<template>
    <div class="caption_contain">
        <h5 class="error_caption">404 - Not Found</h5>
        <p>La ruta <span class="error_route">{{ route }}</span> parece no estar en el mapa</p>
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

<style lang="scss" scoped>
.caption_contain{
    padding: 1rem;
}
.error_caption{
    color: rgb(204, 91, 16);
    font-size: 2.5rem;
}
p{
    font-size: .9rem;
    padding: 2.5rem 0;
    color: var(--dark-light-200);
    .error_route{
        color: var(--light-second)
    }
}
</style>