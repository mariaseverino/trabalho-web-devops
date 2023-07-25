import { ProductRepository } from "./../repositories/product-repository";
import { Product } from "../entities/product";

type ListProductResponse = Product[];

export class ListProductUseCase {
    constructor(private repository: ProductRepository) {}
    async execute(): Promise<ListProductResponse> {
        const products = this.repository.list();
        return products;
    }
}
