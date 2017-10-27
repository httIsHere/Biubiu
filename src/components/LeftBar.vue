<template>
	<div class="leftBar">
		<transition name="fade">
			<div class="alertBk"></div>
		</transition>
		<transition name="side">
			<div class="menuContent">
				<div class="menuTop">
					<div class="userInfo">
						<img :src="userInfo.avatar"/>
						<p class="username"><span>{{userInfo.name}}</span><span>LV{{userInfo.grade}}</span></p>
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
	export default {
		name: 'leftBar',
		props: {
			userInfo:{
				type: Object
			}
		}
	}
</script>