<template>
    <footer id="main-footer" class="main_footer">
        <Container>
            <Grid :grids="2" RowGap="1rem">
                <div class="footer_info">
                    <FooterLogoOne />
                    <footer-details />
                </div>
                <div class="footer_info">
                    <FooterLogoTwo />
                    <footer-details />
                </div>
            </Grid>
            <FollowIcons />
        </Container>
    </footer>
</template>

<script>
import Container from '../container/Container.vue'
import { Grid } from '../container/Grid'
import FollowIcons from '../utils/FollowIcons.vue'
import FooterLogoOne from '../utils/svg/footer-logo-one.vue'
import FooterLogoTwo from '../utils/svg/footer-logo-two.vue'
import FooterDetails from './FooterDetails.vue'
export default {
    name: 'AppFooter',
    components: { 
        Container,
        Grid,
        FooterLogoOne,
        FooterLogoTwo,
        FooterDetails,
        FollowIcons 
    }
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.main_footer{
    background-color: var(--light-second);
    padding: 2rem 0;
    font-weight: 400;
    font-size: 14px;
    color: var(--text-dark);
    align-self: flex-end;
    width: 100%;
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
.svg-icon{
    height: 1em;
    width: 1em;
    margin-right: .5rem;
    display: inline-block;
    fill: currentcolor;
}
</style>