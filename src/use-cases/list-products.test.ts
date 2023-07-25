import { InMemoryRepository } from "./../repositories/in-memory-repository";
import { describe, expect, it } from "vitest";

import { ListProductUseCase } from "./list-products";
import { CreateProductUseCase } from "./create-product";

describe("Listar Produtos", () => {
    it("Deria ser possivel listar dos os produtos", async () => {
        const inMemoryRepository = new InMemoryRepository();

        const create = new CreateProductUseCase(inMemoryRepository);

        create.execute({
            name: "X-Tudo",
            price: 24.5,
            deduction: 0,
        });

        const sut = new ListProductUseCase(inMemoryRepository);

        const products = await sut.execute();

        expect(products).toBeInstanceOf(Array);
    });
});
