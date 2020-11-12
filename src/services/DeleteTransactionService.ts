import { getCustomRepository } from 'typeorm'

import AppError from '../errors/AppError';

import Transactionsrepository from '../repositories/TransactionsRepository'

class DeleteTransactionService {
  public async execute(id:string): Promise<void> {

    const transactionsRepository = getCustomRepository(Transactionsrepository);  
    
    const transactionExists = await transactionsRepository.findOne(id)

    if(!transactionExists){
      throw new AppError('Transaction not found')
    }

    await transactionsRepository.remove(transactionExists); 

  }
}

export default DeleteTransactionService;
