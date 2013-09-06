var carList = new Array(
	new Car("Ford", "Escape", "2013", "V4 engine, 30mpg, Gray", "$18,000"),
	new Car("BMW", "323", "2013", "V6 engine, 22mpg, White", "$35,000"),
	new Car("Toyota", "Corolla", "2012", "V4 engine, 32mpg, Black", "$16,000"),
	new Car("Ford", "F-150", "2013", "V8 engine, 18mpg, Charcoal", "$24,000"),
	new Car("Nissan", "Pathfinder", "2012", "V6 engine, 20mpg, Pearl", "$32,000")	
);

$(document).on('pagebeforeshow', "#cars", function( event, ui ) {
	var len = carList.length;
	var list = $("#cars-list");
	list.empty();
	var car;
	for (var i=0; i < len; ++i){
		car = carList[i];
		list.append("<li><a href=\"#\">" + 
			"<h2>" + car.make + " " + car.model +  "</h2>" + 
			"<p><strong> Year: " + car.year + "</strong></p>" + 
			"<p>" + car.description + "</p>" +
			"<p class=\"ui-li-aside\">" + car.price + "</p>" +
			"</a></li>");
	}
	list.listview("refresh");
});
