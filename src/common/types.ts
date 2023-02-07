import { Request, Response } from 'express';

type Endpoint = {
  create?: (req: Request, res: Response) => Promise<void>;
  readById: (req: Request, res: Response) => Promise<void>;
  readAll: (req: Request, res: Response) => Promise<void>;
  update?: (req: Request, res: Response) => Promise<void>;
  destroy?: (req: Request, res: Response) => Promise<void>;
};

export type { Endpoint };
