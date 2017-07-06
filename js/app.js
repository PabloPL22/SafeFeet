(function() {
    'use strict';
    var config = {
        apiKey : "AIzaSyBGqOCqavWFA9Bt_PMnMAV8EzMjkjPC1dc",
        databaseURL : "https://lunar-landing-169819.firebaseio.com/"
    };
    
    firebase.initializeApp(config);

    var angularModule = angular.module('app', ['firebase'])
        .controller('MyCtrl', MyCtrlF);
}());