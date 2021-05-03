<template>
	<header v-scroll="handleScroll" :class="['Header', activeMenu && 'drawer-out']">
		<ThemeButton />
		<nav :class="[activeMenu && 'is_active', activeScroll && 'active-scroll']" class="MenuContainer">
			<div class="container md-grid nav-grid-wrapper">
				<BrandLogotype />
				<Menu @close="HideMenu" />
			</div>
		</nav>
		<ToggleButton @open="OpenMenu" :class="activeMenu && 'is_active'" />
		<ViewBox class="no-desktop">
			<div class="menu-background top" />
			<div class="menu-background bottom" />
		</ViewBox>
	</header>
</template>

<script>
import ThemeButton from '@/components/utils/theme-buttom.vue'
import ToggleButton from '@/components/utils/ToggleButton.vue'
import BrandLogotype from '@/components/utils/BrandLogotype.vue'
import Menu from '@/components/molecules/Menu/Menu.vue'

export default {
	name: 'MainHeader',
	components: {
		Menu,
		BrandLogotype,
		ToggleButton,
		ThemeButton,
	},
	methods: {
		handleScroll() {
			window.pageYOffset > 2 ? (this.activeScroll = true) : (this.activeScroll = false)
		},
		OpenMenu() {
			this.activeMenu = !this.activeMenu
		},
		HideMenu() {
			this.activeMenu = false
		},
	},
	data() {
		return {
			activeMenu: false,
			activeScroll: false,
		}
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.nav-grid-wrapper {
	@media screen and(min-width: $desktop_breakpoints) {
		grid-template-columns: 3fr 6fr;
		grid-template-rows: 100%;
	}
	grid-template-rows: 64px 1fr;
	height: inherit;
}
.MenuContainer {
	height: calc(100vh - 64px);
	width: 100%;
	position: absolute;
	top: 0;
	pointer-events: none;
	z-index: 3;
	color: teal;
	transition: all 0.25s ease-in-out;
	@media screen and(min-width: $desktop_breakpoints) {
		top: 0;
		height: 100px;
		pointer-events: auto;
		transform: translateX(0);
	}
	&.is_active {
		transform: translateX(0);
		pointer-events: auto;
	}
	&.active-scroll {
		background-color: var(--bg-color-second);
		height: 64px;
		border-bottom: 1px solid var(--dt-grey);
	}
}
.Header {
	width: 100%;
	position: fixed;
	top: 0;
	right: 0;
	height: 64px;
	z-index: 999;
	transition: all 0.25s ease-in-out;
	left: 0;
}

.menu-background {
	width: 300%;
	height: 250px;
	position: absolute;
	left: -120%;
	top: 20vh;
	z-index: -1;
	background-color: var(--bg-drawer);
	visibility: hidden;
	transition: all 0.25s cubic-bezier(0.83, 0.65, 0.47, 1);
	&.top {
		transform: rotate(-45deg) translateY(-300%) scaleY(0);
	}
	&.bottom {
		transform: rotate(-45deg) translateY(330%) scaleY(0);
	}
}
.drawer-out {
	.MenuContainer {
		@media only screen and(max-width: $desktop_breakpoints) {
			background-color: var(--bg-color-second);
			height: 64px;
			border-bottom: 1px solid var(--dt-grey);
		}
	}
	.menu-background {
		transition: all 0.5s cubic-bezier(0.83, 0.65, 0.47, 1);
		visibility: visible;
		&.bottom {
			transform: rotate(-45deg) translateY(250%) scaleY(4.1);
		}
		&.top {
			transform: rotate(-45deg) translateY(-150%) scaleY(4.1);
		}
	}
	.Menu--item {
		opacity: 1;
		transform: translateX(0px);
		transition: transform 0.35s, opacity 0.5s ease-in;
		&:nth-child(2) {
			transition-delay: 0.2s;
		}
		&:nth-child(3) {
			transition-delay: 0.3s;
		}
		&:nth-child(4) {
			transition-delay: 0.4s;
		}
		&:nth-child(5) {
			transition-delay: 0.5s;
		}
		&:nth-child(6) {
			transition-delay: 0.6s;
		}
	}
	.Menu--search {
		opacity: 1;
		transform: translateX(0px);
		transition: transform 0.35s, opacity 0.5s ease-in;
		transition-delay: 0.1s;
	}
}
</style>
