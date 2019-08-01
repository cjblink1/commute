import 'mocha'
import { expect } from 'chai'
import * as crypto from 'crypto'
import {HashProvider} from '../src/interactor/HashProvider';
import {PointFactory} from "../src/interactor/PointFactory";
import {Point} from "../src/model/Point";
import {StepFactory} from "../src/interactor/StepFactory";
import {LocationFactory} from "../src/interactor/LocationFactory";
import {NameFactory} from "../src/interactor/NameFactory";
import {RouteBuilder} from "../src/interactor/RouteBuilder";

class StringHashProvider implements HashProvider {
    // provideHash(...values: string[]): string {
    //     return values.reduce((prev, current) => prev + current);
    // }

    provideHash(...values: string[]): string {
        const hash = crypto.createHash('sha256');
        values.forEach(value => hash.update(value));
        return hash.digest().toString();
    }
}

describe('Route', () => {
    it('routes built from same data should equal each other', () => {

        const pointFactory = new PointFactory(new StringHashProvider());
        const pointA: Point = pointFactory.createPoint(42.8, -37.4);
        const pointB: Point = pointFactory.createPoint(47.3, -38.9);

        const stepFactory = new StepFactory(new StringHashProvider());
        const step = stepFactory.createStep(pointA, pointB);

        const locationFactory = new LocationFactory(new StringHashProvider(), new NameFactory(new StringHashProvider()));
        const routeOneStart = locationFactory.createLocation('Foo', pointA);
        const routeOneEnd = locationFactory.createLocation('Bar', pointB);
        const routeTwoStart = locationFactory.createLocation('Foo', pointA);
        const routeTwoEnd = locationFactory.createLocation('Bar', pointB);

        const nameFactory = new NameFactory(new StringHashProvider());

        const routeBuilder = new RouteBuilder(new StringHashProvider(), nameFactory);
        const routeOne = routeBuilder
            .addStep(step)
            .start(routeOneStart)
            .end(routeOneEnd)
            .friendlyName('Foo to Bar')
            .build();
        const routeTwo = routeBuilder
            .addStep(step)
            .start(routeTwoStart)
            .end(routeTwoEnd)
            .friendlyName('Foo to Bar')
            .build();

        expect(routeOne.equals(routeTwo)).to.be.true;

    });

    it('routes built different data should equal each other', () => {

        const pointFactory = new PointFactory(new StringHashProvider());
        const pointA: Point = pointFactory.createPoint(42.8, -37.4);
        const pointB: Point = pointFactory.createPoint(47.3, -38.9);
        const pointC: Point = pointFactory.createPoint(43.2, -33.7);

        const stepFactory = new StepFactory(new StringHashProvider());
        const stepOne = stepFactory.createStep(pointA, pointB);
        const stepTwo = stepFactory.createStep(pointA, pointC);

        const locationFactory = new LocationFactory(new StringHashProvider(), new NameFactory(new StringHashProvider()));
        const routeOneStart = locationFactory.createLocation('Foo', pointA);
        const routeOneEnd = locationFactory.createLocation('Bar', pointB);
        const routeTwoStart = locationFactory.createLocation('Foo', pointA);
        const routeTwoEnd = locationFactory.createLocation('Baz', pointC);

        const namefactory = new NameFactory(new StringHashProvider());

        const routeBuilder = new RouteBuilder(new StringHashProvider(), namefactory);
        const routeOne = routeBuilder
            .addStep(stepOne)
            .start(routeOneStart)
            .end(routeOneEnd)
            .friendlyName('Foo to Bar')
            .build();
        const routeTwo = routeBuilder
            .addStep(stepTwo)
            .start(routeTwoStart)
            .end(routeTwoEnd)
            .friendlyName('Foo to Baz')
            .build();

        expect(routeOne.equals(routeTwo)).to.be.false;

    });
});