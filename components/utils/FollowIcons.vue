<template>
   <div>
      <Copyright>Copyright 2020 - {{ date }} © | Centro Poblado Janque</Copyright>
      <IconContainer>
         <BrandLink href="#" class="md-flex">
            <BrandIcon :icon="faFacebook" />
         </BrandLink>
         <BrandLink href="#" class="md-flex">
            <BrandIcon :icon="faInstagram" />
         </BrandLink>
         <BrandLink href="#" class="md-flex">
            <BrandIcon :icon="faYoutube" />
         </BrandLink>
         <BrandLink href="#" class="md-flex">
            <BrandIcon :icon="faLinkedin" />
         </BrandLink>
      </IconContainer>
   </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'vue-styled-components'

const BrandIcon = styled(FontAwesomeIcon)`
   font-size: 1.5rem;
`

const BrandLink = styled.a`
   width: 40px;
   height: 40px;
   margin: 0 15px;
   border-radius: 50%;
   background-color: #f0852d;
   justify-content: center;
   align-items: center;
   color: white;
   &:hover {
      color: var(--bg-primary);
   }
`

const IconContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   @media (min-width: 1200px) {
      width: 30%;
      justify-content: space-around;
   }
`

const Copyright = styled.h5`
   font-size: 1em;
   text-align: center;
   @media (min-width: 1200px) {
      text-align: left;
   }
`

export default {
   name: 'FollowIcons',
   components: {
      BrandIcon,
      Copyright,
      IconContainer,
      BrandLink,
   },
   data: () => ({
      faFacebook,
      faTwitter,
      faInstagram,
      faYoutube,
      faLinkedin,
      date: 0,
   }),
   methods: {
      getYear() {
         this.date = new Date().getFullYear()
      },
   },
   mounted() {
      this.getYear()
   },
}
</script>
