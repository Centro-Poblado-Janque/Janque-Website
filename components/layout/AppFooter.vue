<template>
    <footer id="main-footer" class="main_footer">
        <Container>
            <Grid>
                <div class="footer_info">
                    <footer-logo-one />
                    <footer-details />
                </div>
                <div class="footer_info">
                    <footer-logo-two />
                    <footer-details />
                </div>
            </Grid>
            <h5 class="copyright">Copyright {{date}} &copy | Janque - All right reserved</h5>
        </Container>
    </footer>
</template>

<script>
import Container from '../container/Container.vue'
import Grid from '../container/Grid.vue'
import FooterLogoOne from '../utils/footer-logo-one.vue'
import FooterLogoTwo from '../utils/footer-logo-two.vue'
import FooterDetails from './FooterDetails.vue'
export default {
    name: 'AppFooter',
    components: { 
        Container,
        Grid,
        FooterLogoOne,
        FooterLogoTwo,
        FooterDetails 
    },
    methods:{
        getYear(){
            this.date =  new Date().getFullYear()
        }
    },
    data: () => ({
        date: 0,
    }),
    mounted(){
        this.getYear()
    }
}
</script>

<style lang="scss" scoped>
.main_footer{
    background-color: var(--light-second);
    padding: 2rem 0;
    font-weight: 400;
    font-size: 14px;
    color: var(--text-dark);
}
.footer_info{
    padding: .5rem;
    display: flex;
    ul{
        position: relative;
        padding-left: .5em;
        list-style: none;
        &::before{
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: currentColor;
            left: 0;
        }
    }
}
.copyright{
    padding-top: 1rem;
    font-size: 1em;
    text-align: center;
    @media screen and(min-width: 1000px) {
        text-align: left;
    }
}
.svg-icon{
    height: 1em;
    width: 1em;
    margin-right: .5rem;
    display: inline-block;
    fill: currentcolor;
}
</style>