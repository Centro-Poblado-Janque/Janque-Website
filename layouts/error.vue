<template>
    <div class="page-not-found">
        <Container>
            <div class="override">
                <span class="error_img_contain">
                    <ErrorLogo />
                </span>
                <div class="error_help">
                    <ErrorCaption/>
                    <HelpErrorButton />
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
import Container from '../components/container/Container.vue'
import ErrorCaption from '../components/errors/ErrorCaption.vue'
import ErrorLogo from '../components/errors/ErrorLogo.vue'
import HelpErrorButton from '../components/errors/HelpErrorButton.vue'
import error_icon from './../static/error_favicon.svg'

export default {
    head () {
        return{
            title: this.error_title,
            meta: [
                { name: 'description', content: 'Error page' }
            ],
            link:[{ hid:'favicon' ,rel:'icon', href: error_icon}]
        }
    },
    data: () => ({
        error_title: 'Buscando el camino que has digitado...'
    }),

    mounted () {
        this.error_title = 'Error 404 - Not Found';
        console.log(this);
    },
    components: { 
        Container, 
        ErrorLogo,
        ErrorCaption,
        HelpErrorButton
    }
}
</script>

<style lang="scss" scoped>
@import './../static/libs/theme';
.page-not-found{
    background-image: url('./../assets/img/error_bg.jpg');
    @include normalize_img;
    min-height: 100vh;
/*     position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999; */
    a{
        display: block;
        padding: 1.5rem;
        background-color: rgb(180, 76, 28);
        color: whitesmoke;
        border-radius: 2px;
    }
}
.override{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: $desktop_breakpoints) {
        flex-direction: row;
    }
}
.error_help{
    text-align: center;
    @media screen and (min-width: $desktop_breakpoints) {
        padding-left: 2rem;
    }
}
.error_img_contain{
    display: block;
    svg{
        width: 200px;
        height: 300px;
    }
}
</style>