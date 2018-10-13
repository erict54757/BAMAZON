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
       
        
    })


