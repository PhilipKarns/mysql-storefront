//requiring npm packages
var mysql = require("mysql");
var prompt = require("prompt");

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
		 "|" + res[i].stock_quantity);
	}//for loop end
	prompt.get(["Id", "Units"], function(err, result) {
		if (err) {
			throw err;
		}//if end
		else {
			console.log(result);
		}//else end
	});//result function end
});//query function end
prompt.start();


