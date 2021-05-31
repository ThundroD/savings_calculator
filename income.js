//Income Variables
//Salary Variables
let salaryIncome = Number(prompt("What is your monthly salary?")); //prompt set to number to make sure it's read as number
let salaryRecur = prompt("Does your salary reoccur monthly?").toLowerCase(); //to lower case to make sure that if statement can read all
if(salaryRecur == 'yes'){ //if statment to decide if it is true or false from yes or no question
    salaryRecur = true;
}
else{
    salaryRecur = false;
};
//Salary Object
let salary = {
    Name: "Salary",
    Income: salaryIncome,
    Reoccurs: salaryRecur
};

//Interest Variables
let interestIncome = Number(prompt("What is your monthly income from interests on money you have lent out?"));
let interestRecur = prompt("Does your interst income reoccur monthly?").toLowerCase();
if(interestRecur == 'yes'){
    interestRecur = true;
}
else{
    interestRecur = false;
};
//Interst Object
let interest = {
    Name: "Interest",
    Income: interestIncome,
    Reoccurs: interestRecur
};

//Dividend
let dividendIncome = Number(prompt("What is your monthly income from dividends?"));
let dividendRecur = prompt("Does your dividen reoccur monthly??").toLowerCase();
if(dividendRecur == 'yes'){
    dividendRecur = true;
}
else{
    dividendRecur = false;
};
//Dividen Object
let dividend = {
    Name: "Dividends",
    Income: dividendIncome,
    Reoccurs: dividendRecur
};

//Capital Gains Variable
let captialIncome = Number(prompt("What is your monthly income from capital gains?"));
let capitalRecur = prompt("Does your capital gains income reoccur monthly?").toLowerCase();
if(capitalRecur == 'yes'){
    capitalRecur = true;
}
else{
    capitalRecur = false;
};
//Capital Gains Object
let capitalGains = {
    Name: "Captial Gains",
    Income: captialIncome,
    Reoccurs: capitalRecur
};

//Rental Variables
let rentalIncome = Number(prompt("What is your monthly income from any rental properties you may have?"));
let rentalRecur = prompt("Does your rental income reoccur monthly?").toLowerCase();
if(rentalRecur == 'yes'){
    rentalRecur = true;
}
else{
    rentalRecur = false;
};
//Rental Object
let rental = {
    Name: "Rental",
    Income: rentalIncome,
    Reoccurs: rentalRecur
};

//User Income
let userIncomeStream = prompt(`Here are your income streams:
${JSON.stringify(salary)}
${JSON.stringify(interest)}
${JSON.stringify(dividend)}
${JSON.stringify(capitalGains)}
${JSON.stringify(rental)}
Please enter another income stream that you have:`);// stringify to show values of objects to display values
let userIncome = Number(prompt(`What is your monthly income from ${userIncomeStream}?`));
let userIncomeRecur = prompt(`Does your income from ${userIncomeStream} reoccur monthly?`);
if(userIncomeRecur == 'yes'){
    userIncomeRecur = true;
}
else{
    userIncomeRecur = false;
};

//User Income Object
let userGains = {
    Name: userIncomeStream,
    Income: userIncome,
    Reoccurs: userIncomeRecur
};


//Expense Variables and Objects

// Grocieries Variables
let groceryExpense = Number(prompt("How much do you spend per month on groceries?"));
let groceryRecur = prompt("Does your grocery expenses reoccur monthly?").toLowerCase();
if(groceryRecur == 'yes'){
    groceryRecur = true;
}
else{
    groceryRecur = false;
};
//Grocery Object
let grocery = {
    Name: "Groceries",
    Expense: groceryExpense,
    Reoccurs: groceryRecur
}


//Phone Bill Variables
let phoneExpense = Number(prompt("How much do you spend per month on phone bills?"));
let phoneRecur = prompt("Does your phone expenses reoccur monthly?").toLowerCase();
if(phoneRecur == 'yes'){
    phoneRecur = true;
}
else{
    phoneRecur = false;
};
//Phone Bill Object
let phone = {
    Name: "Phone",
    Expense: phoneExpense,
    Reoccurs: phoneRecur
}


//Mortage
let mortageExpense = Number(prompt("How much do you spend per month on your mortage/rent?"));
let mortageRecur = prompt("Does your mortage/rent expenses reoccur monthly?").toLowerCase();
if(mortageRecur == 'yes'){
    mortageRecur = true;
}
else{
    mortageRecur = false;
};
//Mortage Object
let mortage = {
    Name: "Mortage/Rent",
    Expense: mortageExpense,
    Reoccurs: mortageRecur
}

//Medical Insurance
let medicalExpense = Number(prompt("How much do you spend per month on medical insurance?"));
let medicalRecur = prompt("Does your medical insurance expenses reoccur monthly?").toLowerCase();
if(medicalRecur == 'yes'){
    medicalRecur = true;
}
else{
    medicalRecur = false;
};
//Mortage Object
let medical = {
    Name: "Medical",
    Expense: medicalExpense,
    Reoccurs: medicalRecur
}

//Internet
let wifiExpense = Number(prompt("How much do you spend per month on wifi?"));
let wifiRecur = prompt("Does your internet expenses reoccur monthly?").toLowerCase();
if(wifiRecur == 'yes'){
    wifiRecur = true;
}
else{
    wifiRecur = false;
};
let wifi = {
    Name: "Wifi",
    Expense: wifiExpense,
    Reoccurs: wifiRecur
}

let userExpenseFlow = prompt(`Here are your monthly expenses:
${JSON.stringify(grocery)}
${JSON.stringify(phone)}
${JSON.stringify(mortage)}
${JSON.stringify(medical)}
${JSON.stringify(wifi)}
Please enter another monthy expense you have:`);
let userExpense = Number(prompt(`How much do you spend per month on ${userExpenseFlow}?`));
let userExpenseRecur = prompt(`Does your ${userExpenseFlow} expense reoccur monthly?`);
if(userExpenseRecur == 'yes'){
    userExpenseRecur = true;
}
else{
    userExpenseRecur = false;
};

//User Income Object
let userDeduction = {
    Name: userExpenseFlow,
    Income: userExpense,
    Reoccurs: userExpenseRecur
}
//add income and expense values to create variables
const income = (salaryIncome + interestIncome + dividendIncome + captialIncome + rentalIncome + userIncome); 
const expenses = (groceryExpense + phoneExpense + mortageExpense + medicalExpense + wifiExpense + userExpense);
//alert disposible income by stringify income - expense
alert (`Your monthly disposible income is ${JSON.stringify(income - expenses)}.`);
//prompt neve variable how much to save of disposible income
const savings = Number(prompt("How much of you disposible income would you like to save per month?"));
//alert total disposibly monthly income after expenses and savings
alert (`After savings your total disposible monthly income is ${JSON.stringify(income - (expenses + savings))}.`);