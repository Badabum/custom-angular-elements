angular.module("app").controller("Controller",function($scope){
    var vm = this;
    vm.value = 10;
    vm.step = 1;
    vm.max = 20;
    vm.min = 0;
    $scope.$watch("ctrl.value",function(){
        console.log(vm.value);
    })
});