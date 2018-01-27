var app = angular.module("CountryManagement", []);
         
            //Controller Part
            app.controller("CountryController", function($scope, $http, CountryService) {
         
               
                $scope.countries = [];
                $scope.countryForm = {
                    id : -1,
                    countryName : "",
                    population : ""
                };
         
                //Now load the data from server
                _refreshCountryData(CountryService);
         
                //HTTP POST/PUT methods for add/edit country 
                // with the help of id, we are going to find out whether it is put or post operation
                
                $scope.submitCountry = function() {
                	//var CountryService = require('services/js/services');
         
                    var method = "";
                    var url = "";
                    if ($scope.countryForm.id == -1) {
                        //Id is absent in form data, it is create new country operation
                        method = "POST";
                        url = 'rest/countries';
                     
                    } else {
                        //Id is present in form data, it is edit country operation
                        method = "PUT";
                        url = 'rest/countries';
                    }
         
                    CountryService.submitQuery(method,url,$scope.countryForm).then( _success, _error );
                };
         
                //HTTP DELETE- delete country by Id
                $scope.deleteCountry = function(country) {
                    $http({
                        method : 'DELETE',
                        url : 'rest/countries/' + country.id
                    }).then(_success, _error);
                };
 
             // In case of edit, populate form fields and assign form.id with country id
                $scope.editCountry = function(country) {
                  
                    $scope.countryForm.countryName = country.countryName;
                    $scope.countryForm.population = country.population;
                    $scope.countryForm.id = country.id;
                };
         
                /* Private Methods */
                //HTTP GET- get all countries collection
                function _refreshCountryData(CountryService) {
                	CountryService.getCountries().then(function successCallback(response) {
                        $scope.countries = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
                }
         
                function _success(response) {
                    _refreshCountryData(CountryService);
                    _clearFormData()
                }
         
                function _error(response) {
                    console.log(response.statusText);
                }
         
                //Clear the form
                function _clearFormData() {
                    $scope.countryForm.id = -1;
                    $scope.countryForm.countryName = "";
                    $scope.countryForm.population = "";
                
                };
            });