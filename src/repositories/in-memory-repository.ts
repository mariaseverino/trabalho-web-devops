import { Product } from "../entities/product";
import { ProductRepository } from "./product-repository";

export class InMemoryRepository implements ProductRepository {
    public items: Product[] = [];

    async create(product: Product): Promise<void> {
        this.items.push(product);
    }
    async list(): Promise<Product[]> {
        return this.items;
    }
}
