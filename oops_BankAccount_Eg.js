class BankAccount {
  #balance;
  #accountNumber;
  static #nextId = 1000;

  constructor(initialBalance = 0, holderName) {
    if (initialBalance < 0) throw new Error("Initial Bal cannot be negative");

    if (!holderName || typeof holderName != "string") {
      throw new Error("Please provide valid holder name");
    }

    this.holderName = holderName;
    this.#balance = initialBalance;
    this.#accountNumber = BankAccount.#generateAccountNumber();
  }

  get balance() {
    return this.#balance;
  }

  set balance(balance) {
      this.#balance = balance;
  }

  static #generateAccountNumber() {
    return ++BankAccount.#nextId;
  }

  get accountNumber() {
    return `****${this.#accountNumber.toString().slice(-4)}`;
  }

  static fromConfig(config){
    return new BankAccount(config.initialBalance, config.holderName);
  }

  async deposit(amount){
    if(typeof amount!='number' || amount<=0){
        throw new Error('Deposit amount must be positive number');
    }

    // const isClean = await this.
  }

  async #verifyTransaction(amount){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(amount<100000), 50);
    });
  }
}
const anveAccount = new BankAccount(100, 'Anvesha');

console.log(anveAccount.balance);
console.log(anveAccount.accountNumber);
anveAccount.balance = 500;
console.log(anveAccount.balance);