import { expect, test } from "vitest";
import { Product } from "./product";
import { randomUUID } from "crypto";

test("Criar um produto", () => {
    const product = new Product(randomUUID(), "X-Tudo", 24.5, 0);

    expect(product).toBeInstanceOf(Product);
});

test("Não pode criar um produto com preço menor ou igual a zero", () => {
    expect(() => {
        return new Product(randomUUID(), "X-Tudo", 0, 0);
    }).toThrow();
});

test("Não pode criar um produto com desconto maior ou igual ao valor do produto", () => {
    expect(() => {
        return new Product(randomUUID(), "X-Tudo", 0, 0);
    }).toThrow();
});
