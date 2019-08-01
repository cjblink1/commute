import {AbstractCommuteLogger} from "../interactor/AbstractCommuteLogger";
import {Commute} from "../model/Commute";

export class GoogleMapsCommuteLogger extends AbstractCommuteLogger {
    protected createCommute(start: string, end: string): Commute {
        return undefined;
    }

}