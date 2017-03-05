app.controller('HomeCtrl', function($scope, $stateParams) {
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
    $scope.addData = {};

    $scope.createclient = function(){
    	console.log($scope.addData);
    }
});