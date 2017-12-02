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
  console.log("Here is All item for your purchase!")
  displayandBuy();
});

//=========================DISPLAY ALL ITEM==========================
function displayandBuy(){
      connection.query('SELECT * FROM products', function (err, res){
      console.log (res)
      //CREATE TABLE FOR DISPLAY
      // var table = new Table ({
      //   head: ['id', 'product_name', 'department_name', 'price', 'stock_quantity'],
      //   colWidths: [10, 40, 40, 10, 10]
      // });
      // console.log("ITEM FOR SALE")
      // console.log("=========================================")
      // for(i = 0; i < res.length; i++){
      //   table.push(res[i].id, res[i].product_name,res[i].department_name, res[i].price, res[i].stock_quantity)
      // }
      // console.log("==============================================")
      // console.log(table.toString())


//========================BUYING ITEM================================
inquirer.prompt([
  {
  name: "id",
  type: "input",
  message: "what id you want to buy"

  },

  {
  name: "Quantity",
  type: "input",
  message: "how many item?"

  }
]).then(function(answer){
  var choice = answer.id - 1;
  var chosenProduct = res[choice];
  var answerQuantity =answer.Quantity;
  //update the quantity after PURCHASE
  if(answerQuantity < res[choice].stock_quantity){
    console.log("Your Order has been placed")
    connection.query("UPDATE products SET ? WHERE ?", [{
      stock_quantity: res[choice].stock_quantity - answerQuantity
    },
    {
      id: res[choice].id
    }],
    function(err, res){
      displayandBuy();
    })


  }else {
    console.log("Sorry! we do not have enough item. Please choose other option!")
    displayandBuy();
  }
})
})
}
