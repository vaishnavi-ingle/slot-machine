const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid Deposit amount, try again!")
        }else{
            return numberDepositAmount;
        }
    }
    
};


const getNumberLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines(1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines >3 || numberOfLines <=0){
            console.log("Invalid number of lines, try again!")
        }else{
            return numberOfLines;
        }
    }
    
};

const getBet = (balance, lines) =>{
    while(true){
        const bet = prompt("Enter the total bet: ");
        const numberBet= parseFloat(bet);

        if(isNaN(numberBet) || numberBet > balance / lines || numberBet <=0){
            console.log("Invalid bet, try again!")
        }else{
            return numberBet;
        }
    }
    
};

const spin = () =>{
    const symbols =[];
    for (symbol of Object.entries(SYMBOLS_COUNT)){
        
    }
}

let balance = deposit();
const numberOfLines = getNumberLines();
const bet = getBet(balance, numberOfLines);