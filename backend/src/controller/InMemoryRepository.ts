import {AbstractRepository, CommuteHashOptions} from "../interactor/AbstractRepository";
import {Commute} from "../model/Commute";
import {Point} from "../model/Point";
import {Route} from "../model/Route";
import {Step} from "../model/Step";
import {Name} from "../model/Name";
import {Location} from "../model/Location";

export class InMemoryRepository extends AbstractRepository {
    getCommute(commuteHash: string): Commute {
        return undefined;
    }

    getCommuteHashes(options: CommuteHashOptions): string[] {
        return [];
    }

    getLocation(locationHash: string): Location {
        return undefined;
    }

    getPoint(pointHash: string): Point {
        return undefined;
    }

    getRoute(routeHash: string): Route {
        return undefined;
    }

    getStep(stepHash: string): Step {
        return undefined;
    }

    storeCommuteEntity(commute: Commute) {
    }

    storeLocationEntity(location: Location) {
    }

    storeNameEntity(name: Name) {
    }

    storePointEntity(point: Point) {
    }

    storeRouteEntity(route: Route) {
    }

    storeStepEntity(step: Step) {
    }
}