var jade = require('jade');
var angularJade = angular.module('angularJade', [])
angularJade.constant('jade', jade);
angularJade.directive('jade', ["$compile", "$http", function($compile, $http) {
    return {
        restrict: 'E',
        link: function(scope, iElement, iAttrs) {
        	if ("src" in iAttrs) {
        		$http.get(iAttrs.src).success(function(code) {
		        	iElement.html(jade.compile(code)())
		            $compile(iElement.contents())(scope);
        		});
        	} else {
	        	iElement.html(jade.compile(iElement.html())())
	            $compile(iElement.contents())(scope);

        	}
        }
    }
}]);
