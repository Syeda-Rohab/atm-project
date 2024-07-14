#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1512;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
if (operationAns.operation === "withdraw") { }
let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter you amount",
        type: "number",
    }
]);
// = += -=
myBalance -= amountAns.amount;
console.log("your remaining balance is " + myBalance);
if (operationAns.operation === "check balance") {
    console.log(`your remaining balance is ${myBalance}`);
}
else {
    console.log("Incorrect pin code");
}
