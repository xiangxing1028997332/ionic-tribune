//定义一个模块  然后注入到app.js
angular.module('myService',[])

.service('getData',function($http,$rootScope){
	return{
//		服务中的获取文章数据的函数
		"articleData":function(){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a": "getPortalCate",
					"callback":"JSON_CALLBACK"
				}
			}).then(function(res){
//				console.log(res.data.result);
				$rootScope.$broadcast('articleData',res.data.result)
			},function(){
				console.log(error)
			})
		},
//		文章列表的数据请求
		"listData":function(catid,page){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a": "getPortalList",
					"callback":"JSON_CALLBACK",
					"catid": catid,
					"page": page
				}
			}).then(function(res){
//				console.log(res)
				$rootScope.$broadcast('listData',res.data.result)
			},function(){
				console.log(error);
			})
		},
		//文章详情的数据请求
		"detailData":function(aid){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a": "getPortalArticle",
					"callback":"JSON_CALLBACK",
					"aid":aid
				}
			}).then(function(res){
//				console.log(res)
				$rootScope.$broadcast('detailData',res.data.result)
			},function(){
				console.log(error);
			})			
		}
		
	}
})

//帖子的服务
.service('getPostData',function($http,$rootScope){
	return{
		"postData":function(){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a":"getThreadCate",
					"callback":"JSON_CALLBACK"
				}
			}).then(function(res){
				console.log(res)
				$rootScope.$broadcast('postData',res.data.result)
			},function(error){
				
			})
		},
		"postlistData":function(fid,page){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a": "getThreadList",
					"callback":"JSON_CALLBACK",
					"fid": fid,
					"page": page
				}
			}).then(function(res){
				console.log(res)
				$rootScope.$broadcast('postlistData',res.data.result)
			},function(){
				console.log(error);
			})
		},
		//帖子详情的数据请求
		"postdetailData":function(tid){
			$http.jsonp('http://www.phonegap100.com/appapi.php',{
				"params":{
					"a": "getThreadContent",
					"callback":"JSON_CALLBACK",
					"tid":tid
				}
			}).then(function(res){
				console.log(res)
				$rootScope.$broadcast('postdetailData',res.data.result)
			},function(){
				console.log(error);
			})			
		}
	}
})
