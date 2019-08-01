import {Step} from "./Step";
import {Location} from "./Location";
import {Name} from "./Name";

export class Route {
    constructor(readonly steps: Step[],
                readonly start: Location,
                readonly end: Location,
                readonly friendlyName: Name,
                readonly hash: string) {}

    equals(other: Route) {
        return this.hash === other.hash;
    }
}