/*Datepicker Directive For Ios-Styled Datepicker*/
angular.module('maggi.datepicker',[]).directive('mobiDatepicker',function(){
    return {
        restrict:'A',
        scope:{
           options:'=options'
        },
        link:function(scope,element,attrs){  
            var options = {
                dateOption:{
                    preset:'date',
                    minDate: new Date(1900, 1, 1, 0,0,0),
                    maxDate: new Date()
                },
                themeSet:{
                    theme:'android-ics light',
                    mode: 'scroller',
                    display:'bottom', 
                    lang:''
                }
            }
            angular.extend(options.dateOption, scope.options.dateOption);
            angular.extend(options.themeSet, scope.options.themeSet);
            $(element).val('').scroller('destroy').scroller($.extend(options.dateOption,options.themeSet));
        }
    };

});