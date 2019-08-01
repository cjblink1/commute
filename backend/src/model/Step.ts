import {Point} from "./Point";

export class Step {
    constructor(readonly start: Point,
                readonly end: Point,
                readonly hash: string) {}

    equals(other: Step): boolean {
        return this.hash === other.hash;
    }
}