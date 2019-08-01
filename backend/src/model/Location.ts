import {Point} from "./Point";
import {Name} from "./Name";

export class Location {
    constructor(readonly name: Name, readonly point: Point, readonly hash: string) {}

    equals(other: Location) {
        return this.hash === other.hash;
    }
}