var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function ($scope) {

    // controllers.html
    $scope.name = "Narasimha",
    $scope.age = 22;
    weight = 65; // not accessable in index.html since we are not attaching to the scope


    // filters.html
    $scope.employees= [
        {
            fname: 'Narasimha',
            lname: 'shenoi',
            salary: 5000
        },
        {
            fname: 'Narasimharupa',
            lname: 'Caitanya',
            salary: 4000
        },
        {
            fname: 'Achut',
            lname: 'Krishna',
            salary: 3000
        },
    ];

    // ng-show and ng-hide.html
    $scope.firstname = "Narasimha";
    $scope.lastname = "Shenoy";
    $scope.fullname =  function () {
        return $scope.firstname+ " " + $scope.lastname;
    };
    $scope.isSpy = true;
    $scope.codename = "ns068002";

    // ngClick.html
    $scope.count = 0;
    $scope.show = true;
    $scope.hideCounter = function () {
        $scope.show = !$scope.show;
    };

    // form.html
    $scope.reviews = [
        {
            comment: "Hello, this is the first msg",
            by: "Narasimha@cerner.com",
        },
        {
            comment: "Welcome to mayapur",
            by: "Vijay@mayapur.com",
        },
    ];
    $scope.form = {};
    $scope.addReview = function () {
        $scope.reviews.push($scope.form);
        $scope.form = {};
    }
}]);