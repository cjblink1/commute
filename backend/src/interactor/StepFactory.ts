import {Step} from "../model/Step";
import {Point} from "../model/Point";
import {HashProvider} from "./HashProvider";

export class StepFactory {

    constructor(private hashProvider: HashProvider) {}

    createStep(start: Point, end: Point): Step {
        const hash = this.hashProvider.provideHash(start.hash, end.hash);
        return new Step(start, end, hash);
    }
}