import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "./create-product";
import { Product } from "../entities/product";
import { InMemoryRepository } from "../repositories/in-memory-repository";

describe("Criar Produto", () => {
    it("Deria ser possivel criar um produto", () => {
        const sut = new CreateProductUseCase(new InMemoryRepository());

        expect(
            sut.execute({
                name: "X-Tudo",
                price: 24.5,
                deduction: 0,
            })
        ).resolves.toBeInstanceOf(Product);
    });
});
