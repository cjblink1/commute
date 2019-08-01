import {Point} from "../model/Point";
import {NameFactory} from "./NameFactory";
import {HashProvider} from "./HashProvider";
import {Location} from '../model/Location'

export class LocationFactory {
    constructor(private hashProvider: HashProvider,
                private nameFactory: NameFactory) {}

    createLocation(name: string, point: Point) {
        const _name = this.nameFactory.createName(name);
        const _hash = this.hashProvider.provideHash(_name.hash, point.hash);
        return new Location(_name, point, _hash);
    }
}