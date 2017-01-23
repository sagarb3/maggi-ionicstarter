angular.module('maggi.datepicker',[]).directive('mobi-datepicker',function(){
    debugger;
    return {
        restrict:'A',
        scope:{
            'option':'=',
            'theme':'='
        },
        link:function(scope,element,attrs){
            element.val('').scroller('destroy').scroller($.extend(attrs.date,attrs.theme));
        }
    };

})