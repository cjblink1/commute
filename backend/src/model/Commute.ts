import {Route} from "./Route";

export class Commute {
    constructor(readonly time: string, readonly route: Route, readonly hash: string) {}

    equals(other: Commute) {
        return this.hash === other.hash;
    }
}