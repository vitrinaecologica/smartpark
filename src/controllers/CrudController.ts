import { Request, Response } from 'express';

// contract for CRUD operations
export abstract class CrudController {
    public abstract create(req: Resquest, res: Response): void;
    public abstract read(req: Request, res: Response): void;
    public abstract update(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;
}
