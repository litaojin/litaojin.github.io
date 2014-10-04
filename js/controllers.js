angular.module('iApp', [])
    .controller('IController', ['$scope', function($scope) {
        var today=new Date();
        $scope.t={text:today.getFullYear()+'/'+Number(today.getMonth()+1)+'/'+today.getDate()+"    "+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()};

    }]);