<template>
    <div :class="$style.pageNotFound">
        <Container>
            <div :class="$style.override">
                <span :class="$style.error_img_contain">
                    <ErrorLogo />
                </span>
                <div :class="$style.error_help">
                    <ErrorCaption/>
                    <HelpErrorButton />
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
import ErrorCaption from '../components/errors/ErrorCaption.vue'
import ErrorLogo from '../components/errors/ErrorLogo.vue'
import HelpErrorButton from '../components/errors/HelpErrorButton.vue'
import error_icon from './../static/error_favicon.svg'

export default {
    head () {
        return{
            title: this.error_title,
            meta: [
                { hid: 'description', name: 'description', content: 'This page no exicts with response 404 - Not Found' }
            ],
            link:[
                { hid:'favicon' , rel:'icon', href: error_icon}
            ]
        }
    },
    data: () => ({
        error_title: 'Buscando el camino que has digitado...'
    }),

    mounted () {
        this.error_title = 'Error 404 - Not Found';
    },
    components: {
        ErrorLogo,
        ErrorCaption,
        HelpErrorButton
    }
}
</script>

<style lang="scss" module>
@import '~/assets/styles/mixin';
.pageNotFound{
    min-height: 100vh;
    position: relative;
    width: 100%;
    a{
        display: block;
        padding: 1.5rem;
        background-color: rgb(180, 76, 28);
        color: whitesmoke;
        border-radius: 2px;
    }
    &::after{
        content: '';
        display: block;
        background-image: url('./../assets/img/error_bg.jpg');
        @include normalize_img;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        filter: brightness(0.2);
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