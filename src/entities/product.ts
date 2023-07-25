export class Product {
    constructor(id: string, name: string, price: number, deduction: number) {
        if (price <= 0) {
            throw new Error("Valor invalido para produto");
        }

        if (deduction >= price) {
            throw new Error("Desconto invalido para produto");
        }
    }
}
