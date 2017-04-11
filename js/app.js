var ytApp=angular.module('myApp', ['ngMaterial','ngMessages','ngRoute','ngResource','ngStorage','jkAngularCarousel'])

.controller('appCtrl', function($scope,$http){
    $http.get('data/product.json').then(function(res){
    $scope.products = res.data; 
  });
    $http.get('data/logos.json').then(function(res){
    $scope.logos = res.data; 
  });
    $scope.data=[
    {
      'id':0,
      'price':6432,
      'img':'http://www.paulshark.it/wp-content/uploads/2015/06/PaulShark_SmartCasual_FallWinter15_Man_Outfit_12_00-desktop.jpg'
    },
    {
      'id':1,
      'price':664,
      'img':'https://4.bp.blogspot.com/-i0ATAFb0uro/WN4M7jUQsrI/AAAAAAAAKRc/2yV4w8iBvuYewLyMDxmlmnUIRpkRc_uZwCLcB/s640/yuvraj.jpeg.jpg'
    },
    {
      'id':2,
      'price':1664,
      'img':'./img/1.png'
    },
    {
      'id':3,
      'price':9664,
      'img':'https://images.alphacoders.com/693/thumb-1920-693150.jpg'
    }
    ]
        $scope.dataArray = [
        [
      {
        src: 'http://www.paulshark.it/wp-content/uploads/2015/06/PaulShark_SmartCasual_FallWinter15_Man_Outfit_12_00-desktop.jpg'
      },
      {
        src: 'http://www.paulshark.it/wp-content/uploads/2015/06/PaulShark_SmartCasual_FallWinter15_Man_Outfit_12_00-desktop.jpg'
      },
      {
        src: 'http://www.paulshark.it/wp-content/uploads/2015/06/PaulShark_SmartCasual_FallWinter15_Man_Outfit_12_00-desktop.jpg'
      }
    ],[
      
      {
        src: 'https://4.bp.blogspot.com/-i0ATAFb0uro/WN4M7jUQsrI/AAAAAAAAKRc/2yV4w8iBvuYewLyMDxmlmnUIRpkRc_uZwCLcB/s640/yuvraj.jpeg.jpg'
      },
      {
        src: 'https://4.bp.blogspot.com/-i0ATAFb0uro/WN4M7jUQsrI/AAAAAAAAKRc/2yV4w8iBvuYewLyMDxmlmnUIRpkRc_uZwCLcB/s640/yuvraj.jpeg.jpg'
      },
      {
        src: 'https://4.bp.blogspot.com/-i0ATAFb0uro/WN4M7jUQsrI/AAAAAAAAKRc/2yV4w8iBvuYewLyMDxmlmnUIRpkRc_uZwCLcB/s640/yuvraj.jpeg.jpg'
      }
    ],[
      {
        src: './img/1.png'
      },
      {
        src: './img/1.png'
      },
      {
        src: './img/1.png'
      }
    ],
    [
      {
        src: 'https://images.alphacoders.com/693/thumb-1920-693150.jpg'
      },
      {
        src: 'https://images.alphacoders.com/693/thumb-1920-693150.jpg'
      },
      {
        src: 'https://images.alphacoders.com/693/thumb-1920-693150.jpg'
      }
    ]
    ]
    console.log($scope.dataArray[0].src);
    $scope.act=1;
    $scope.activeTab=function(val){
      $scope.act=val;
      return val;
    }
    $scope.activeImg=function(){
      return $scope.act;
    }

        $scope.dataArray2=$scope.dataArray[1];
      $scope.$watch('act', function() {
        $scope.dataArray2=$scope.dataArray[$scope.act];
      console.log($scope.dataArray2[0].src  + "   $rootScope.SessionStatus");
      }, true);
})

