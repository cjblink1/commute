import {Point} from "../model/Point";
import {HashProvider} from "./HashProvider";

export class PointFactory {

    constructor(private hashProvider: HashProvider) {}

    createPoint(latitude: number, longitude: number): Point {
        const hash = this.hashProvider.provideHash(latitude.toString(), longitude.toString());
        return new Point(latitude, longitude, hash);
    }
}