var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});
var namePrompt=[]
var operations = {
    loopProducts: function () {
        console.log("Displaying all inventory\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (let i = 0; i < res.length; i++) {
               var nameData=res[i].productName+",";
                namePrompt.push(nameData);

            }
            console.log(namePrompt)
            
            
        }); inquirer.prompt([



            {
                type: "list",
                name: "doingThis",
                message: "Welcome, what would you like to do?",
                choices: [namePrompt.forEach(element=> {
                    
                })]

            },

        ]).then(function (result) {
            // if (result.doingThis === "pant") {
                operations.readProducts();
            // } 

           
        })
         connection.end();
    },
    readProducts: function () {
        console.log("Displaying all inventory\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (let i = 0; i < res.length; i++) {
               

                console.log("Id:" + res[i].id + "\n" + "Name:" + res[i].productName + "\n" + "Department:" + res[i].departmentName + "\n" + "Price:" + res[i].price + "\n" + "Quantity:" + res[i].stockQuantity);
            }
            
            connection.end();
        });
    },

    lowInventory: function () {
        console.log("Displaying All Low-Inventory Items\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (let i = 0; i < res.length; i++) {
                if (res[i].stockQuantity < 5) {

                    console.log("Id:" + res[i].id + "\n" + "Name:" + res[i].productName + "\n" + "Department:" + res[i].departmentName + "\n" + "Price:" + res[i].price + "\n" + "Quantity:" + res[i].stockQuantity);
                }
            }
            connection.end();
        });
    },

    // lowInventory()
    // readProducts()
    updateInventory: function () {
        console.log("Updating inventory quantaties of blank" + "\n");
        var query = connection.query(
        "UPDATE products SET ? WHERE ?",
            [
                {
                    stockQuantity: 200
                },
                {
                    productName: "your"
                }
            ],
            function (err, res) {
                console.log(res.affectedRows + " products updated!\n");
                // Call deleteProduct AFTER the UPDATE completes

            }
        );
            connection.end();



    },
    //  updateInventory();
    createProduct: function () {
        console.log("Inserting a new product...\n");
         query = connection.query(
            "INSERT INTO products SET ?",
            {
                productName: "yo",
                departmentName: "r",
                price: 3.00,
                stockQuantity: 50,
            },
            function (err, res) {
                console.log((res.affectedRows) + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        
        
    }
        );connection.end(); 
        
      
    },
    reset: function () {

    }
      
}
   

// logs the actual query being run





module.exports = operations;
