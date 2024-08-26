// src/services/baseService.ts

import { IRepository } from '../interfaces/IRepository';

export class BaseService<T> {
    constructor(private repository: IRepository<T>) {}

    create(data: Partial<T>): Promise<T> {
        return this.repository.create(data as T);
    }

    findAll(): Promise<T[]> {
        return this.repository.findAll();
    }

    findById(id: string | number): Promise<T | null> {
        return this.repository.findById(id);
    }

    update(id: string | number, data: Partial<T>): Promise<T | null> {
        return this.repository.update(id, data as T);
    }

    delete(id: string | number): Promise<T | null> {
        return this.repository.delete(id);
    }
}
