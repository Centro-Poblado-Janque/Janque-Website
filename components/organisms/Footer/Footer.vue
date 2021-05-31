<template>
   <footer id="main-footer" class="m-footer">
      <Container>
         <ViewBox class="md-grid md-grid-2">
            <FooterSection
               title="Sobre el sitio"
               :icon="faGlobe"
               :items="{ 1: 'Centro Poblado de Janque', 2: 'Incahuasi - Lambayeque', 3: 'Lambayeque - Peru' }"
            />
            <FooterSection
               title="Cultura"
               :icon="faBranch"
               :items="{ 1: 'Hacienda Janque', 2: 'Cultura Mochica', 3: 'Misterios' }"
            />
         </ViewBox>
         <FollowIcons />
      </Container>
   </footer>
</template>

<script>
import './_footer.scss'
import { faGlobe } from '@/components/utils/icons/faGlobe'
import { faBranch } from '@/components/utils/icons/faBranch'
export default {
   name: 'MainFooter',
   components: {
      FooterSection: () => import('@/components/molecules/FooterSection/FooterSection.vue'),
      FollowIcons: () => import('@/components/utils/FollowIcons.vue'),
   },
   data: () => ({
      faGlobe,
      faBranch,
   }),
}
</script>
