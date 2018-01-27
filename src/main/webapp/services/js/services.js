app.service('CountryService', function($http) {
	this.getCountries = function(){
		//return $http.get("http://www.w3schools.com/angular/customers.php");
		return $http({  
                        method : 'GET',  
                        url : 'rest/countries',  
                        //data : angular.toJson($scope.countryForm),  
                        headers : {  
                            'Content-Type' : 'application/json'  
                        }  
                    });
	}
	
	this.submitQuery = function(method,url,data) {
		return $http({  
            method : method,  
            url : url,  
            //data : angular.toJson($scope.countryForm),
            data : angular.toJson(data),
            headers : {  
                'Content-Type' : 'application/json' 
            }  
        });
	}
});