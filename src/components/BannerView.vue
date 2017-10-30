<template>
	<div class="bannerView">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="str in getBannerData" :style="{ backgroundImage: 'url(' + str.pic + ')' }">
					<span class="bannerName">{{str.name}}</span>
				</div>
			</div>
			<div class="swiper-pagination swiper-pagination-white"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import { mapGetters } from 'vuex'
	export default {
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				speed: 600,
				autoplay: 1000,
				onTouchEnd: function() {
					swiper.startAutoplay()
				}
			})
			this.$store.dispatch('set_BannerData')
		},
		computed: {
			...mapGetters([
				'requesting',
				'error',
				'getBannerData'
			])
		},
	}
</script>