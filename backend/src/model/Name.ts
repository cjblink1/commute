
export class Name {
    constructor(readonly value: string,
                readonly hash: string) {}

    equals(other: Name): boolean {
        return this.hash === other.hash;
    }
}