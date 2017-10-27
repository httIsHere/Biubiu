<template>
	<div id="app">
		<!--<router-view></router-view>-->
		<header-bar :userInfo="userInfo"></header-bar>
		<left-bar :userInfo="userInfo"></left-bar>
		<!--<footer-bar></footer-bar>-->
	</div>
</template>
<script>
	import HeaderBar from './components/HeaderBar'
	import LeftBar from './components/LeftBar'
	import './assets/css/style.css'
	import '../static/font/style.css'
	import store from './store'
	export default {
		name: 'app',
		data () {
			return {
				userInfo: this.$store.getters.getUserInfo
			}
		},
		components: {
			HeaderBar,
			LeftBar
		},
		mounted () {
			let infoApi = 'https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695'
//			$.ajax({
//              async : true,
//              url : infoApi,
//              type : "GET",
//              dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
//              jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
//              jsonpCallback: 'handleResponse', //设置回调函数名
//              data : {
//                  q : "javascript", 
//                  count : 1
//              }, 
//              success: function(response, status, xhr){
//                  console.log(response);
//                  store.dispatch('set_BannerData', response)
//              }
//          })
			let localApi = '../static/data.json'
			this.axios.get(localApi).then(res => {
				store.dispatch('set_BannerData', res.data.bannerData)
				store.dispatch('set_UserInfo', res.data.user)
			})
		}
	}
</script>