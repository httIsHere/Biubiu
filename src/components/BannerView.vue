<template>
	<div class="bannerView">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="str in bannerData" :style="{ backgroundImage: 'url(' + str.pic + ')' }">
					<span>{{str.name}}</span>
				</div>
			</div>
			<div class="swiper-pagination swiper-pagination-white"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		data () {
			return {
				bannerData: this.$store.getters.getBannerData
			}
		},
		mounted () {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 2000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
			})
		},
	}
</script>