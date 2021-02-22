<template>
	<ButtonContainer class="dt-btn">
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
import styled from 'vue-styled-components';

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
	z-index: 1000
`;

const ToggleButton = styled.div`
    position: relative;
    margin: 0 4px 0 0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    width: 24px;
    height: 18px;
	.dt{
		display: block;
		position: absolute;
		height: 3px;
		width: 50%;
		background-color: var(--dt-color);
		opacity: 1;
		transform: rotate(0deg);
		transition: .25s ease-in-out;
	}
	.dt:nth-child(odd){
		left: 0px;
    	border-radius: 9px 0 0 9px;
	}
	.dt:nth-child(even){
		left: 50%;
    	border-radius: 0 9px 9px 0;
	}
	.dt:nth-child(1), .dt:nth-child(2){
		top: 0;
	}
	.dt:nth-child(3), .dt:nth-child(4){
		top: 7px;
	}
	.dt:nth-child(5), .dt:nth-child(6){
		top: 14px;
	}
`;


export default {
	name: 'Toggle',
	components:{
		ToggleButton,
		ButtonContainer
	},
	props:{
		className: String
	}
}
</script>
