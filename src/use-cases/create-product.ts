import { randomUUID } from "crypto";
import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

interface CreateProductRequest {
    name: string;
    price: number;
    deduction: number;
}

type CreateProductResponse = Product;

export class CreateProductUseCase {
    constructor(private repository: ProductRepository) {}
    async execute(
        request: CreateProductRequest
    ): Promise<CreateProductResponse> {
        const product = new Product(
            randomUUID(),
            request.name,
            request.price,
            request.deduction
        );

        this.repository.create(product);

        return product;
    }
}
