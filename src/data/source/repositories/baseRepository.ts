export interface IBaseRepository<T> {
    create(data: Partial<T>): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string | number): Promise<T | null>;
    update(id: string | number, data: Partial<T>): Promise<T | null>;
    delete(id: string | number): Promise<T | null>;
}

export abstract class BaseRepository<T> implements IBaseRepository<T> {
    abstract create(data: Partial<T>): Promise<T>;
    abstract findAll(): Promise<T[]>;
    abstract findById(id: string | number): Promise<T | null>;
    abstract update(id: string | number, data: Partial<T>): Promise<T | null>;
    abstract delete(id: string | number): Promise<T | null>;
}
