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
   height: 24px;
   width: 24px;
   z-index: 1000;
   &.is_active {
      .dt:nth-child(1) {
         left: 0.75px;
         top: 3.5px;
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
         top: 10.75px;
         transform: rotate(45deg);
      }
   }
   @media only screen and (min-width: 992px) {
      display: none;
   }
`

const ToggleButton = styled.span`
   position: relative;
   transform: rotate(0deg);
   transition: all 0.5s cubic-bezier(0, 0, 0.38, 0.9);
   width: 20px;
   height: 18px;
   .dt {
      display: block;
      position: absolute;
      height: 2px;
      width: 10px;
      background-color: var(--bg-primary);
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
      top: 2px;
   }
   .dt:nth-child(3),
   .dt:nth-child(4) {
      top: 8px;
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
