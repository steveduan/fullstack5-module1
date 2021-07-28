(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.Msg="";
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

})();
