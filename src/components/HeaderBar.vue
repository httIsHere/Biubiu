<template>
	<div class="headerBar">
		<div class="headerLeft">
			<i class="icon-menu" @click="showLeftBar"></i>
			<img :src="userInfo.avatar"  class="userHead" />
		</div>
		<div class="headerRight">
			<i class="icon-share"></i>
			<i class="icon-videogame_asset"></i>
			<i class="icon-cloud_download"></i>
			<i class="icon-search"></i>
		</div>
	</div>
</template>

<script>
	import store from '../store'
	export default {
		props: {
			userInfo: {
				type: Object
			}
		},
		data () {
			return {
				bannerData: this.$store.getters.getBannerData
			}
		},
		methods: {
			showLeftBar () {
				store.dispatch('ShowLeftBar')
			}
		}
	}
</script>