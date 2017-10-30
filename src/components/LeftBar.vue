<template>
	<div class="leftBar" v-show="isShow">
		<transition name="fade">
			<div class="alertBk" @click.stop="hideMenu"></div>
		</transition>
		<transition name="side">
			<div class="menuContent">
				<div class="menuTop">
					<div class="userInfo">
						<img :src="userInfo.avatar"/>
						<p class="username"><span>{{userInfo.name}}</span><span>LV{{userInfo.grade}}</span></p>
						<p class="balance"><span>硬币：{{userInfo.coins}} B币：{{userInfo.bCoins}}</span></p>
					</div>
					<div class="extraInfo">
						<i class="icon-account_balance_wallet"></i>
						<i class="icon-share"></i>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import store from '../store'
	export default {
		name: 'leftBar',
		props: {
			userInfo:{
				type: Object
			}
		},
		data () {
			return {
				isShow: this.$store.getters.getShowLeftBar
			}
		},
		methods: {
			hideMenu () {
				console.log('hideLeftBar')
				store.dispatch('HideLeftBar')
			}
		}
	}
</script>