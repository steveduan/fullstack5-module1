(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.Msg="";
  $scope.test=test(4);
  $scope.checkMe=function(){
    var textbox=document.getElementById("lunch-menu");
    var message=document.getElementById("lunch-message");
    if($scope.dishes==""){
      $scope.Msg="Please enter data first";
      textbox.style.border="1px red solid";
      message.style.color="red";
    }else{
      textbox.style.border="1px green solid";
      message.style.color="green";
    var userDishes=$scope.dishes.split(",");
    if(userDishes.length<=3){
      $scope.Msg="Enjoy!";
    }else{
      $scope.Msg="Too much!";
    }
  }

  }

  $scope.clearMsg=function(){
    $scope.Msg="";
  }
}  

function test(n){
  var summ=0;

for(var i=1;i<=n;i++){
  //计算阶乘i！
  var sum=1;
  for(var j=1;j<=i;j++){
      sum=sum*j;
  }
  //计算summ=summ+i！
  summ=summ+sum;
}
return summ;
}

})();
