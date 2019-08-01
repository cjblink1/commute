import {Route} from "../model/Route";
import {NameFactory} from "./NameFactory";
import {Step} from "../model/Step";
import {HashProvider} from "./HashProvider";
import {Name} from "../model/Name";
import {Location} from "../model/Location"

export class RouteBuilder {

    private currentSteps: Step[] = [];
    private currentStart: Location;
    private currentEnd: Location;
    private currentFriendlyName: Name;

    constructor(private hashProvider: HashProvider,
                private nameFactory: NameFactory) {}

    addStep(step: Step): RouteBuilder {
        this.currentSteps.push(step);
        return this;
    }

    start(start: Location) {
        this.currentStart = start;
        return this;
    }

    end(end: Location) {
        this.currentEnd = end;
        return this;
    }

    friendlyName(friendlyName: string): RouteBuilder {
        this.currentFriendlyName = this.nameFactory.createName(friendlyName);
        return this;
    }

    build(): Route {
        const hash = this.hashProvider.provideHash(this.currentSteps.map(step => step.hash)
            .reduce((prev, current) => prev + current));
        this.assertNotEmpty(this.currentSteps);
        this.assertDefined(this.currentStart);
        this.assertDefined(this.currentEnd);
        this.assertDefined(this.currentFriendlyName);

        const route = new Route(this.currentSteps,
            this.currentStart,
            this.currentEnd,
            this.currentFriendlyName,
            hash);

        this.currentSteps = [];
        this.currentStart = undefined;
        this.currentEnd = undefined;
        this.currentFriendlyName = undefined;
        return route;
    }

    private assertNotEmpty(arr: ArrayLike<any>) {
        if (!arr.length) {
            throw Error('Array is empty.');
        }
    }

    private assertDefined(val: any) {
        if (!val) {
            throw Error('Value is not defined.');
        }
    }
}