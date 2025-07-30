var app = angular.module('validationApp', []); app.controller('validationCtrl', function($scope) {
    // Initialize user object
    $scope.user = { email: '',
    username: '', password: ''
    };
    
    
    // Debug flag
    $scope.showDebug = false;
    
    
    // Function to reset the form
    $scope.resetForm = function() {
    
     
    $scope.user = { email: '',
    username: '', password: ''
    };
    
    
    // Reset form state
    if ($scope.userForm) {
    $scope.userForm.$setPristine();
    $scope.userForm.$setUntouched();
    }
    };
    });
    
    