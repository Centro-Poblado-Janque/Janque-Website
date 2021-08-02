<template>
   <div>
      <Copyright>
         No es pagina oficial de Janque
         <br />
         Hecho con 😘 por
         <a href="http://alexsegundo.com" target="_blank" rel="noopener noreferrer">Alex Segundo</a> | 2020 -
         {{ date }} ©
      </Copyright>
      <IconContainer>
         <BrandLink href="#" class="ly-flex">
            <BrandIcon :icon="faFacebook" />
         </BrandLink>
         <BrandLink href="#" class="ly-flex">
            <BrandIcon :icon="faInstagram" />
         </BrandLink>
         <BrandLink href="#" class="ly-flex">
            <BrandIcon :icon="faYoutube" />
         </BrandLink>
         <BrandLink href="#" class="ly-flex">
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
   font-size: 1.25rem;
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
   padding: 1.25rem 0;
   @media (min-width: 1200px) {
      text-align: left;
   }
   a {
      &:hover {
         color: var(--bg-primary);
      }
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
