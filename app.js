var app=angular.module("myAplication",[])
/*app.provider("exampleProvider",function(){
	var myObj={};
	myObj.name="Savi Sharma";

	myObj.getName=function(){
		return this.name ;
	}
	
	this.$get=function(){
		return myObj;
	}
})

app.service("customService",function(){
	this.getCustomerDetails=function(){
		return "This will return customer details !!"
	}
})*/


/*app.config(["customServiceProvider",function(exampleProvider){
	console.log(exampleProvider.$get().name);
	console.log(exampleProvider.$get().getName());
}])*/

/*app.run(["customService",function(customdetails){
	console.log(customdetails.getCustomerDetails());
	
}])*/

app.controller("myController",["$scope","exampleProvider","customService","customFactory","AppName","ApplVersion",function($scope,exampleProvider,customService,customFactory,AppName,ApplVersion){
	console.log("MyController - Provider:"+exampleProvider.name);
	//Passing a custom service exampleProvider
	console.log(exampleProvider.getName());
	console.log(customService.getCustomerDetails());
	$scope.message=customService.getCustomerDetails();
	$scope.message=customFactory;
	AppName="Hello";
	console.log(AppName);

	//console.log(ApplVersion);
}])