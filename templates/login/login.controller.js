angular.module('maggi').controller('LoginCtrl',loginController);

function loginController ($http,$scope,$state,$rootScope,$location,$timeout){ 

  
    $scope.dateOption = {
    preset:'date',
    minDate:new Date(1970, 1, 1, 0,0,0),
    maxDate:new Date(2014,12,12,0,0,0)
    };
    $scope.dateTheme = {
        theme:'android-ics light',
        mode: 'mixed',
        display:'modal', 
        lang:''
    }
};
