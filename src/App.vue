<template>
	<div id="app">
		<router-view></router-view>
		<header-bar :userInfo="userInfo"></header-bar>
		<left-bar :userInfo="userInfo"></left-bar>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import HeaderBar from './components/HeaderBar'
	import LeftBar from './components/LeftBar'
	import FooterBar from './components/FooterBar'
	import './assets/css/style.css'
	import '../static/font/style.css'
	import store from './store'
	import { mapGetters } from 'vuex'
	export default {
		name: 'app',
		data () {
			return {
				userInfo: this.$store.getters.getUserInfo
			}
		},
		components: {
			HeaderBar,
			LeftBar,
			FooterBar
		}
	}
</script>