<template>
   <ButtonContainer class="dt-btn" @click="$emit('open')">
      <ToggleButton role="button">
         <span class="dt"></span>
         <span class="dt"></span>
         <span class="dt"></span>
         <span class="dt"></span>
         <span class="dt"></span>
         <span class="dt"></span>
      </ToggleButton>
   </ButtonContainer>
</template>

<script>
import styled from 'vue-styled-components'

const ButtonContainer = styled.div`
   flex: 0 0 auto;
   padding-right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   right: 0;
   height: 100%;
   width: 64px;
   position: absolute;
   z-index: 1000;
   &.is_active {
      .dt:nth-child(1) {
         left: 1.5px;
         top: 3px;
         transform: rotate(45deg);
      }
      .dt:nth-child(2) {
         left: calc(50% - 3px);
         top: 2px;
         transform: rotate(45deg);
      }
      .dt:nth-child(3) {
         left: -50%;
         opacity: 0;
      }
      .dt:nth-child(4) {
         left: 100%;
         opacity: 0;
      }
      .dt:nth-child(5) {
         left: 1.25px;
         top: 11px;
         transform: rotate(45deg);
      }
      .dt:nth-child(6) {
         left: calc(50% - 2px);
         top: 11px;
         transform: rotate(45deg);
      }
   }
   @media only screen and (min-width: 1200px) {
      display: none;
   }
`

const ToggleButton = styled.div`
   position: relative;
   margin: 0 4px 0 0;
   transform: rotate(0deg);
   transition: 0.5s ease-in-out;
   width: 24px;
   height: 18px;
   .dt {
      display: block;
      position: absolute;
      height: 3px;
      width: 50%;
      background-color: var(--toggle-btn);
      opacity: 1;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
   }
   .dt:nth-child(odd) {
      left: 0px;
      border-radius: 9px 0 0 9px;
   }
   .dt:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
   }
   .dt:nth-child(1),
   .dt:nth-child(2) {
      top: 0;
   }
   .dt:nth-child(3),
   .dt:nth-child(4) {
      top: 7px;
   }
   .dt:nth-child(5),
   .dt:nth-child(6) {
      top: 14px;
   }
`

export default {
   name: 'Toggle',
   components: {
      ToggleButton,
      ButtonContainer,
   },
}
</script>
