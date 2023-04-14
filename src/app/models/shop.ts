import { Address } from "./address";

export class Shop {
    id! : number;
    name!: string;
    addressDTO!: Address;
    code_type!: string;
    latitude!: Float32Array;
    longitude!: Float32Array;
}
