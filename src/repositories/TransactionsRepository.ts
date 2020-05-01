import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;

    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "income") {
        income += this.transactions[i].value;
      } else {
        outcome += this.transactions[i].value;
      }
    }

    const balance = {
      income,
      outcome,
      total: income - outcome
    }

    return balance;
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({title, type, value});

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
