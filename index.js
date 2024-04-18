import inquirer from "inquirer";
const result = await inquirer.prompt([
    {
        Message: "Enter Your First Number",
        type: "number",
        name: "firstNumber",
    },
    {
        Message: "Enter Your Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select Any One Operator To Perform Action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(result);
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Select Valid Operator To Perform Your Action And Try Again");
}
