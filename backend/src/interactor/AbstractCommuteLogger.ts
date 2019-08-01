import {Commute} from "../model/Commute";
import {AbstractRepository} from "./AbstractRepository";

export abstract class AbstractCommuteLogger {

    protected constructor(private repository: AbstractRepository) {}

    public logCommute(start: string, end: string) {
        const commute: Commute = this.createCommute(start, end);
        this.repository.addCommute(commute);
    }

    protected abstract createCommute(start: string, end: string): Commute
}