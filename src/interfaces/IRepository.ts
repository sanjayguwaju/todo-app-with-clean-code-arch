// src/interfaces/IRepository.ts

export interface IRepository<T> {
    create(data: Partial<T>): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string | number): Promise<T | null>;
    update(id: string | number, data: Partial<T>): Promise<T | null>;
    delete(id: string | number): Promise<T | null>;
}
