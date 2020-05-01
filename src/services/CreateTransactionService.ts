import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Request): Transaction {
    // Lista de transações
    const allTransaction = this.transactionsRepository.getBalance();
    // Verificação do balance total
    if (type === "outcome" && allTransaction.total < value) {
      throw Error('Não há dinheiro suficiente em caixa');
    }
    // Criando transação
    const transaction = this.transactionsRepository.create({ title, type, value });
    // Retorno de resposta
    return transaction;
  }
}

export default CreateTransactionService;
