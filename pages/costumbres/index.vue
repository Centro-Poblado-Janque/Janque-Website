<template>
    <MainContent class="p-page costumer-page">
        <SocialMediaSEO 
            title="Nuestras costumbres | Centro Poblado Janque"
            description="La hacienda Janque es una localidad llena de costumbres y tradiciones. '!Descubrelo'"
            url="costumbres"
        />
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
    components: {
    }
}
</script>

<style lang="scss">
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
