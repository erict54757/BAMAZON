var mysql = require("mysql");
var inquirer = require("inquirer")
var operations = require("./bamazonCustomer.js");



inquirer.prompt([



    {
        type: "list",
        name: "doingWhat",
        message: "Welcome, what would you like to do?",
        choices: ["Show me my Inventory.", "Show me my Low-Inventory ", "I want to add a Product.", "I want to change my quantity of a product."]
    },




]).then(function (answers) {

    if (answers.doingWhat === "Show me my Inventory.") {
        operations.readProducts();
    }
    if (answers.doingWhat === "Show me my Low-Inventory ") {
        operations.lowInventory();
    }
    if (answers.doingWhat === "I want to change my quantity of a product.") {
        operations.loopProducts();
    }
    if (answers.doingWhat === "I want to add a Product.") {
        inquirer.prompt([
            {
                type: "input",
                name: "productName",
                message: "What is the product name?"
            },
            {
                type: "input",
                name: "departmentName",
                message: "In what department does it belong?"
            },
            {
                type: "input",
                name: "price",
                message: "What is the price?"
            },
            {
                type: "input",
                name: "stockQuantity",
                message: "How many are there?"
            },


        ]).then(function (result) {
            addProduct = result.productName;
            addDepartment = result.departmentName;
            addPrice = result.price;
            addQuantity = result.stockQuantity;

        }).then(function () {
            operations.createProduct();
        })

    }
})


