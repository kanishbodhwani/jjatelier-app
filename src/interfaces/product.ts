export interface Product {
    _id: string;
    name: string;
    price: number;
    subHeading: string;
    description: string;
    category: string;
    stock: number;
    images: string[];
    includes: string[];
    fabrics: string;
    fitFinish: string;
    care: string;
}