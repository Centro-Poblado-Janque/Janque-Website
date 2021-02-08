<template>
	<ToggleButton role="button" href="javascript:void(0)" >
		<ButtonChild :top="top_one"  class="className"/>
		<ButtonChild :top="top_two"  class="className"/>
		<ButtonChild :top="top_tree" class="className"/>
	</ToggleButton>
</template>

<script>
import styled from 'vue-styled-components';

const propsBtn = {
	top: String
}

const ButtonChild = styled("div", propsBtn)`
    display: inline-block;
	width: 30px;
	height: 2px;
	border-radius: 1px;
	position: absolute;
	transition: all .35s;
	background-color: silver;
	left: 20px;
	top: ${props => props.top || '17px' };
`;

const ToggleButton = styled.a`
    display: inline-block;
	width: 70px;
	transition: all .5s ease;
	position: absolute;
	z-index: 900;
	height: 64px;
	top: 0;
	right: 0;
	::after{
		content: '';
		display: block;
		width: 70%;
		height: 60%;
		border: 1px solid var(--grey-border);
		margin: 20% 15%;
	}
`;
export default {
	name: 'Toggle',
	components:{
		ToggleButton,
		ButtonChild
	},
	data(){
		return{
			top_one : '23px',
			top_two : '32px',
			top_tree : '41px'
		}
	},
	props:{
		className: String
	}
}
</script>
