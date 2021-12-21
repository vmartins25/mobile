export interface User {
    address: string;
    age: NonNullable<string | number | undefined>;
    email: string;
    name: string; 
    userPassword: string;
}

export interface ProductList {
    id?: number;
    name: string;
    price: number;
    amount: number;
    factory : ProductListFactory;
}

export interface ProductListFactory {
    id?: number;
    name: string;
}
