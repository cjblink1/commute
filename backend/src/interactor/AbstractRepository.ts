import {Point} from "../model/Point";
import {Step} from "../model/Step";
import {Route} from "../model/Route";
import {Commute} from "../model/Commute";
import {Name} from "../model/Name";
import {Location} from "../model/Location"

export class CommuteHashOptions {
    startDateTime: string;
    endDateTime: string;
    startLocation: string;
    endLocation: string;
    limit: number = 10;
}

export abstract class AbstractRepository {
    private addPoint(point: Point) {
        this.storePointEntity(point);
    }

    private addLocation(location: Location) {
        this.addPoint(location.point);
        this.addName(location.name);
        this.storeLocationEntity(location);
    }

    private addStep(step: Step) {
        this.addPoint(step.start);
        this.addPoint(step.end);
        this.storeStepEntity(step);
    }

    private addRoute(route: Route) {
        route.steps.forEach(step => this.addStep(step));
        this.addLocation(route.start);
        this.addLocation(route.end);
        this.addName(route.friendlyName);
        this.storeRouteEntity(route);
    }

    private addName(name: Name) {
        this.storeNameEntity(name);
    }

    public addCommute(commute: Commute) {
        this.addRoute(commute.route);
        this.storeCommuteEntity(commute);
    }

    abstract storePointEntity(point: Point): void;
    abstract storeLocationEntity(location: Location): void;
    abstract storeStepEntity(step: Step): void;
    abstract storeRouteEntity(route: Route): void;
    abstract storeNameEntity(name: Name): void;
    abstract storeCommuteEntity(commute: Commute): void;

    abstract getPoint(pointHash: string): Point;
    abstract getLocation(locationHash: string): Location;
    abstract getStep(stepHash: string): Step;
    abstract getRoute(routeHash: string): Route;
    abstract getCommute(commuteHash: string): Commute;
    abstract getCommuteHashes(options: CommuteHashOptions): string[];
}