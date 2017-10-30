<template>
	<div class="mainView firstpage">
		<nav-bar></nav-bar>
		<banner-view></banner-view>
	</div>
</template>

<script>
	import BannerView from './BannerView'
	import NavBar from './NavBar'
	export default {
		components: {
			BannerView,
			NavBar
		}
	}
</script>