<template>
    <MainContent class="page costumer-page">
        <header class="costumer-head">
            <Container>
                <div class="position_left costumer-caption">
                    <h2 class="text-caption">
                        Welcome to costumer page
                    </h2>
                </div>
            </Container>
        </header>
    </MainContent>
</template>

<script>

export default {
    head: () => ({
        title: 'Nuestras costumbres | Centro Poblado Janque',

    }),
    components: {
    }
}
</script>

<style lang="scss">
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
