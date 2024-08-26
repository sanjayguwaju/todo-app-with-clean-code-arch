// src/data/source/ioc/container.ts

class Container {
    private services: Map<string, any> = new Map();

    public register(name: string, service: any): void {
        this.services.set(name, service);
    }

    public resolve<T>(name: string): T {
        const service = this.services.get(name);

        if (!service) {
            throw new Error(`Service not found: ${name}`);
        }

        return service;
    }
}

export default new Container();
