import { Request, Response } from 'express';
import { Endpoint } from '../../common/types';

const Product: Endpoint = {
  readById: async (req: Request, res: Response) => {
    res.status(200).send('product readById');
  },
  readAll: async (req: Request, res: Response) => {
    res.status(200).send('product readAll');
  },
};

export default Product;
