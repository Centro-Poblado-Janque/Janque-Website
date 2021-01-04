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
	width: 34px;
	height: 3px;
	border-radius: 1px;
	position: absolute;
	transition: all .35s;
	background-color: silver;
	left: 18px;
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
		width: 76%;
		height: 76%;
		border-radius: 2px;
		border: .5px solid #404040;
		margin: 12%;
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
			top_one : '21px',
			top_two : '30px',
			top_tree : '39px'
		}
	},
	props:{
		className: String
	}
}
</script>
