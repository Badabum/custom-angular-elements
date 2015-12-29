angular.module("app",[]);
angular.module("app")
    .directive("numberInput",function(){
    function init(scope){
        if(!scope.step){
            scope.step = 1;
        }
    }
    return {
        restrict:"E",
        replace:true,
        template:'<div class="bz-input-number-wrapper">'+
                 '<input class="main-input" type="number" ng-model="value" min="min" max="max">'+
                 '<i class="ion-chevron-up up" ng-click="increase()"></i>'+
                 '<i class="ion-chevron-down down" ng-click="decrease()"></i>'+
                 '</div>',
        scope:{
            value:"=value",
            readonly:"=readonly",
            step:"=step",
            min:"=min",
            max:"=max"
        },
        link:function(scope,element,attrs,ngModel){
            init(scope);
            scope.increase = function(){
                if(!((scope.value+scope.step)>scope.max))
                scope.value+=scope.step;
            }
            scope.decrease = function(){
                if(!((scope.value-scope.step)<scope.min))
                scope.value-=scope.step;
            }
        }
    }
});