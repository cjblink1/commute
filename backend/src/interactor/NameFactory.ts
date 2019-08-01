import {Name} from "../model/Name";
import {HashProvider} from "./HashProvider";

export class NameFactory {

    constructor(private hashProvider: HashProvider) {}

    createName(value: string): Name {
        const hash = this.hashProvider.provideHash(value);
        return new Name(value, hash);
    }
}