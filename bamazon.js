//requiring npm packages
var mysql = require("mysql");
var prompt = require("prompt");


//creating connection of JS file to DB
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Atlanta@10",
	database: "bamazon"
});

//shows user is connected to the DB
connection.connect(function(err){
	if (err) {
		console.log(err);
	}//if end
	else {
	console.log("connected as id" + connection.threadId)
	}//else end
});//err function end

//query the info from the table in the DB
connection.query("SELECT * FROM products", function(err, res){
	console.log("------------BAMAZON PRODUCT LIST -----------");
	
	//loop through all items i the DB and log to console
	for (i = 0; i < res.length; i++) {
		console.log(res[i].item_id + "|" + res[i].product_name + "|" + res[i].department_name + "|" + res[i].price +
		 "|" + res[i].stock_quantity)
	}//for loop end

	//prompt the user for product id and number of units they want to order
	prompt.get(["Product_Id", "Number_of_units"], function(err, result) {
		if (err) {
			throw err;
		}//if end

		
		//loop through the results and check if the user's product select matches an item_id and if the number of units requested are available
		for (i = 0; i < res.length; i++) {
			if (res[i].item_id == result.Product_Id && result.Number_of_units < res[i].stock_quantity) {
				console.log("your order for " + result.Number_of_units + " unit(s) of " + res[i].product_name + " has been placed");
				var total = result.Number_of_units * res[i].price
				console.log("Your total cost is: $" + total);
							
				//subtract user's purchased units from total units and assign value to variable
				var newTotal = res[i].stock_quantity - result.Number_of_units;

				//update the DB with the new quantity
				connection.query("UPDATE products SET ? WHERE ?", [{
					stock_quantity: newTotal
				}, {
					item_id: res[i].item_id
				}], function (err, res) {
					if (err) {
						console.log(err);
					}
					else {
					//console.log(res);
					}
				});//query and function end 
			}//if end	

			//if units requested is greater than quantity, display this message
			else if (res[i].item_id == result.Product_Id && result.Number_of_units > res[i].stock_quantity)	{
				console.log("Insufficient quantity. Please try again");
			}
		}//for end

		//DB connection end
		connection.end();

	});//result function end

});//query function end


