var mysql = require("mysql");
var inquirer = require("inquirer")
var namePrompt= []
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

var operations = {
    loopProducts: function () {
        console.log("Displaying all inventory\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (let i = 0; i < res.length; i++) {
                nameData = res[i].productName;

                namePrompt.push(nameData);


            }
     
            operations.selectProduct();
        })
        
        
        
    },
    selectProduct: function () {
        inquirer.prompt([


            {
                type: "list",
                name: "doingThis",
                message: "What product would you like to change?",
                choices: namePrompt

            },
            {
                type: "input",
                name: "changeQuantity",
                message: "What should the new quantity be?",
                

            }

        ]).then(function (result) {
            productSelect=result.doingThis;
            changeQuantity= parseInt(result.changeQuantity)
            operations.updateInventory();

     })

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
        console.log("Updating inventory quantaties of "+productSelect + "\n");
        var query = connection.query(
           
            "UPDATE products SET ? WHERE ?",
            [
                {
                    stockQuantity: changeQuantity
                },
                {
                    productName: productSelect
                }
            ],
            function (err, res) {
                
                console.log(res.affectedRows + " products updated!\n");
                

            }
           
           
        );
          connection.end()



    },
    //  updateInventory();
    createProduct: function () {
        console.log("Inserting a new product...\n");
        query = connection.query(
            "INSERT INTO products SET ?",
            {
                productName: addProduct,
                departmentName: addDepartment,
                price: parseInt(addPrice),
                stockQuantity: parseInt(addQuantity),
            },
            function (err, res) {
                console.log((res.affectedRows) + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes


            }
        ); connection.end();


    },
    reset: function () {

    }

}


// logs the actual query being run





module.exports = operations;

