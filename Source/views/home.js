app.controller("HomeCtrl", ['$scope', 'recorderInitializerFactory', function ($scope, recorderInitializerFactory) {
    $scope.name = "Home Controller";
    recorderInitializerFactory.InitAudio();
    $scope.toggleRecording = function (ev) {
        recorderInitializerFactory.ToggleRecording(ev.target);
    }
}
]);