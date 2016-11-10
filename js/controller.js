//项目控制器列表
angular.module('myController',[])

//文章分类的控制器
.controller('articleCtrl',function($scope,getData,$ionicLoading){
    //加载框
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	
	
	getData.articleData();
	$scope.$on('articleData',function(event,data){
		$scope.articleData = data;
		$ionicLoading.hide();
	})
	
})
//文章列表的控制器
.controller('articlelistCtrl',function($scope,getData,$stateParams,$ionicLoading){
	var page = 0 ; //定义page初始值为0
	$scope.listData = [];
	$scope.ifEmpty = true;
	
	//load弹出框
	$ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	
//	getData.listData($stateParams.id,page);//这里不调用
	$scope.$on('listData',function(event,data){
		$scope.ifEmpty = data.length;
		$scope.listData = $scope.listData.concat(data);//把后面页面的数据追加
		
		$ionicLoading.hide();
		//广播上拉加载完成的事件，一定要把请求道的数据付给页面上后，再来广播
		$scope.$broadcast('scroll.infiniteScrollComplete')
	})
//	console.log($stateParams)
	$scope.loadMore = function(){
		++page;//初始值为0，加载数据后调用第一页的数据
		getData.listData($stateParams.id,page);
	}
	
})

//文章详情的控制器
.controller('articledetailCtrl',function($scope,$stateParams,getData,$ionicLoading){
	//load弹出框
	$ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	getData.detailData($stateParams.aid);
	$scope.$on('detailData',function(event,data){
		$scope.detailData = data;
		$ionicLoading.hide();//当数据加载完隐藏load弹出框
//		console.log($scope.detailData);
	})
//	console.log($stateParams)
})

//帖子的控制器
//帖子分类
.controller('postCtrl',function($scope,$stateParams,getPostData,$ionicLoading){
	//load弹出框
	$ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	
	getPostData.postData();
	$scope.$on('postData',function(event,data){
		$scope.postData = data;
		$ionicLoading.hide();//当数据加载完隐藏load弹出框
	})
	
})
//帖子列表
.controller('postlistCtrl',function($scope,$stateParams,getPostData,$ionicLoading){
	var page = 0;
	$scope.postlistData = [];
	$scope.ifEmpty = true; //判断上拉加载是否移除
	
	
	$ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	
//	getPostData.postlistData($stateParams.fid,1);
	$scope.$on('postlistData',function(event,data){
		$scope.ifEmpty = data.length //当数据为空的时候，移除上拉加载html代码，停止上拉加载
		$scope.postlistData =$scope.postlistData.concat(data);
		$ionicLoading.hide();//当数据加载完隐藏load弹出框
		//广播上拉加载完成的事件，一定要把请求道的数据付给页面上后，再来广播
		$scope.$broadcast('scroll.infiniteScrollComplete')
	})
	$scope.loadMore = function(){
		++page;//初始值为0，加载数据后调用第一页的数据
		getPostData.postlistData($stateParams.fid,page);
	}
})
//帖子详情
.controller('postdetailCtrl',function($scope,$stateParams,getPostData,$ionicLoading){
	//load弹出框
	$ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    })
	
	getPostData.postdetailData($stateParams.tid);
	$scope.$on('postdetailData',function(event,data){
		$scope.postdetailData = data;
		$ionicLoading.hide();//当数据加载完隐藏load弹出框
	})
})
