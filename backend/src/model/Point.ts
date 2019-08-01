
export class Point {
    constructor(readonly latitude: number,
                readonly longitude: number,
                readonly hash: string) {}

    equals(other: Point): boolean {
        return this.hash === other.hash;
    }
}