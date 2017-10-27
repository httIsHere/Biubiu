var bannerData;
$.ajax({
	async: true,
	url: "https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695",
	type: "GET",
	dataType: "jsonp", // 返回的数据类型，设置为JSONP方式
	jsonp: 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
	jsonpCallback: 'handleResponse', //设置回调函数名
	data: {
		q: "javascript",
		count: 1
	},
	success: function(response, status, xhr) {
		bannerData = response
	}
});