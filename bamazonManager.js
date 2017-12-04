var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Tiger1932",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  // start()
  // display()
  AddNewProduct();
});
//==============================Function Start===============================
function start(){
  inquirer
    .prompt({
      name: "select",
      type: "rawlist",
      message: "Choose your line",
      choices: ["View Product Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    })
    .then(function(answer){

    })
}


//==============================Display Product For Sale=======================
function display() {
  connection.query('SELECT * FROM products', function (err, res) {
    console.log("PRODUCT FOR SALE")
    console.log("============================")
    console.log (res);
  })
}

connection.query ('update From product Set ? where = ? ' , function(err, res))
//===============================Function choose product======================
function AddNewProduct(){
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "name of the product"
      },
      {
        name: "category",
        type: "input",
        message: "insert category"
      },
      {
        name: "price",
        type: "input",
        message:"Product Price"
      },
      {
        name: "quantity",
        type: "input",
        message: "quantity of product"
      }
    ])
    .then(function(answer){
      connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.item,
          department_name: answer.category,
          price: answer.price,
          stock_quantity: answer.quantity
        }
      )
      console.log("Your item had been Added")
      // display()
    })
}
//=================================Function update Inventory============================
