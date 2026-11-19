// BankAccount class with private balance field
class BankAccount{
    #balance;

    constructor(initialBalance){
        this.#balance=initialBalance;
    }

    // Add money to account
    deposit(amount){
        if(amount<=0 || !Number.isFinite(amount)){
            throw new Error("Please enter a valid deposit amount.");
        }

        this.#balance+=amount;
        console.log("Deposit successful:",amount);
    }

    // Withdraw money from account
    withdraw(amount){
        if(amount<=0 || !Number.isFinite(amount)){
            throw new Error("Please enter a valid withdrawal amount.");
        }

        if(amount>this.#balance){
            throw new Error("Insufficient balance.");
        }

        this.#balance-=amount;
        console.log("Withdrawal successful:",amount);
    }

    // Return current balance
    getBalance(){
        return this.#balance;
    }
}

// Create bank account
const account1=new BankAccount(5000);

console.log("Opening Balance:",account1.getBalance());

// Valid deposit
try{
    account1.deposit(2000);
    console.log("Current Balance:",account1.getBalance());
}catch(error){
    console.log("Error:",error.message);
}

// Valid withdrawal
try{
    account1.withdraw(1000);
    console.log("Current Balance:",account1.getBalance());
} catch(error){
    console.log("Error:",error.message);
}

// Invalid withdrawal
try{
    account1.withdraw(10000);
}catch (error){
    console.log("Withdrawal Failed:",error.message);
}

console.log("Final Balance:",account1.getBalance());
