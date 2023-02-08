#!/usr/bin/env node
import inquirer from "inquirer";
let convertion = {
    "pkr": {
        "usd": 0.0044,
        "gbp": 12,
        "pkr": 1
    },
    "gbp": {
        "usd": 2.34,
        "gbp": 1,
        "pkr": 218
    },
    "usd": {
        "usd": 1,
        "gbp": 35,
        "pkr": 250
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["pkr", "gbp", "usd"],
        message: "select currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["pkr", "gbp", "usd"],
        message: "select currency"
    },
    {
        type: "number",
        name: "amount",
        message: "enter amount"
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
