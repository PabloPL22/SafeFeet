function MyCtrlF($firebaseObject, $scope) {
    $scope.rootRef = firebase.database().ref();
    $scope.ref = $scope.rootRef.child('Polideportivos');
    $scope.polideportivos = $firebaseObject($scope.ref);
}