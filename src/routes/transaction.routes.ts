import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // Buscando todas as transações
    const Alltransaction = transactionsRepository.all();
    // Buscando balance das transações
    const transactionBalance = transactionsRepository.getBalance();

    // Criando estrutura da resposta
    const transaction = {
      transactions: Alltransaction,
      balance: transactionBalance,
    }

    // Enviando resposta ao usuário
    return response.status(200).json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // Recebendo dados do usuário
    const { title, type, value } = request.body;
    // Criando instancia do serviço
    const createTransaction = new CreateTransactionService(transactionsRepository);
    // Criando transação apartir do serviço
    const transaction = createTransaction.execute({ title, type, value });
    // Enviando resposta ao usuário caso tenha sucesso
    return response.status(201).json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
