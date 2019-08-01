export interface HashProvider {
    provideHash(...values: string[]): string
}