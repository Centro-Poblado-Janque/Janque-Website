<template>
   <footer id="main-footer" class="main_footer">
      <Container>
         <Grid :Rows="2" RowGap="1rem">
            <ViewBox class="footer_info">
               <FooterLogoOne />
               <ul class="address--declarations">
                  <li itemprop="address">Centro Poblado de Janque</li>
                  <li itemprop="address">Incahuasi - Lambayeque</li>
                  <li itemprop="address">Lambayeque - Peru</li>
               </ul>
            </ViewBox>
            <ViewBox class="footer_info">
               <FooterLogoTwo />
               <ul class="address--declarations">
                  <li itemprop="address">Centro Poblado de Janque</li>
                  <li itemprop="address">Incahuasi - Lambayeque</li>
                  <li itemprop="address">Lambayeque - Peru</li>
               </ul>
            </ViewBox>
         </Grid>
         <FollowIcons />
      </Container>
   </footer>
</template>

<script>
import { Grid } from '../container/Grid'
import FollowIcons from '../utils/FollowIcons.vue'
import FooterLogoOne from '../utils/svg/footer-logo-one.vue'
import FooterLogoTwo from '../utils/svg/footer-logo-two.vue'
export default {
   name: 'AppFooter',
   components: {
      Grid,
      FooterLogoOne,
      FooterLogoTwo,
      FollowIcons,
   },
}
</script>

<style lang="scss">
@import '~/assets/styles/mixin';
.main_footer {
   background-color: var(--light-second);
   padding: 2rem 0;
   font-weight: 400;
   font-size: 14px;
   color: var(--text-dark);
   align-self: flex-end;
   width: 100%;
}
.footer_info {
   padding: 0.5rem;
   display: flex;
   ul {
      position: relative;
      padding-left: 0.5em;
      list-style: none;
      &::before {
         content: '';
         position: absolute;
         width: 1px;
         height: 100%;
         background-color: currentColor;
         left: 0;
      }
   }
}
.svg-icon {
   height: 1em;
   width: 1em;
   margin-right: 0.5rem;
   display: inline-block;
   fill: currentcolor;
}
</style>
