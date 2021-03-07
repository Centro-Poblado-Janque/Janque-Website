<template>
   <footer id="main-footer" class="Footer" role="footer">
      <Container>
         <Grid :Rows="2" RowGap="1rem" data-class="grid-system">
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
.Footer {
   background-color: var(--bg-color-second);
   padding: 2rem 0;
   font-weight: 400;
   font-size: .9rem;
   color: var(--txt-color-primary);
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
