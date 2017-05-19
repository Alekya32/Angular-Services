app.config(["AppName",function(AppName){
	console.log("This is config:"+AppName);
	AppName="New Angular.......";
	console.log("Value::"+ApplVersion);
}])

app.run(["AppName","ApplVersion",function(AppName,ApplVersion){
	console.log("This is Run:"+AppName);
	console.log("Value::"+ApplVersion);

}])

app.provider("exampleProvider",function(){
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
})
app.factory("customFactory",function(){
	
	return "Factory Service..........";
	
})
app.constant("AppName","AngularService");
app.value("ApplVersion","1.0.2.3");