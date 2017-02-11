app.controller('HoroscopeCtrl', function($scope, $stateParams, $ionicModal, $timeout) {
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            //$scope.modal.hide();
        }, 2000);
    };
});