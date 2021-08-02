<template name="template__page-history">
   <MainContent class="p-page history-page">
      <SocialMediaSEO
         title="Conoce nuestra historia | Centro Poblado Janque"
         description="No hay una mejor manera de conocer un lugar, sino sabiendo su historia. El poblado de Janque sus raices tienen mucho que decir"
         url="historia"
      />
      <HistoryTemplate>
         <template #header> </template>
      </HistoryTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: {
      name: 'fade',
      mode: 'out-in',
   },
   components: {
      HistoryTemplate: () => import('@/components/templates/HistoryTemplate/HistoryTemplate.vue'),
   },
}
</script>

<style lang="scss"></style>
