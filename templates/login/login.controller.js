angular.module('maggi').controller('LoginCtrl',loginController);

function loginController ($http,$scope,$state,$rootScope,$location,$timeout){ 

   /*If no option provided then it will default to directory defaults*/
   $scope.dateOpt = {
        dateOption:{
            minDate:new Date(1970, 1, 1, 0,0,0),
            maxDate:new Date(2014,12,12,0,0,0)
        }
    }

  
   
};
