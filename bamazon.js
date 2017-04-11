//requiring npm packages
var mysql = require("mysql");
var prompt = require("prompt");

var productChoiceArray = [];

//creating connection to DB
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Atlanta@10",
	database: "bamazon"
});

connection.connect(function(err){
	if (err) {
		throw err;
	}//if end
	else {
	console.log("connected as id" + connection.threadId)
	}//else end
});//err function end

connection.query("SELECT * FROM products", function(err, res){
	console.log("------------BAMAZON PRODUCT LIST -----------");
	for (i = 0; i < res.length; i++) {
		console.log(res[i].item_id + "|" + res[i].product_name + "|" + res[i].department_name + "|" + res[i].price +
		 "|" + res[i].stock_quantity)
		productChoiceArray.push(res[i].item_id);
		console.log(productChoiceArray);
	}//for loop end
	prompt.get(["Product_Id", "Number_of_units"], function(err, result) {
		// if (err) {
		// 	throw err;
		// }//if end
		console.log(result.Product_Id);
		var chosenProduct;
		for (i = 0; i < res.length; i++) {
			if (res[i].item_id == result.Product_Id && result.Number_of_units < res[i].stock_quantity) {
				//chosenProduct = res[i];
				//console.log(chosenProduct);
				console.log("your order for " + result.Number_of_units + " units of " + res[i].product_name + " has been placed");
			}//if end

			// if (result.Number_of_units < chosenProduct.stock_quantity) {
			// 	console.log("your order has been placed");
			// }
			// else {
			// 	console.log("insufficient quantity");
			// }
			
		}//for end
		
		//if the product id entered by the user equals one of the product 
		// else if (result.Product_Id === ) {
		// 	console.log(result.Number_of_units);
		// }//else end
		// else {
		// 	console.log(result);
		// 	//console.log("That's an invalid id, please select another option");
		// }
	});//result function end
});//query function end
prompt.start();

connection.end();


