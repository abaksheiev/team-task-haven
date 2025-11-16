export class UserId{
    constructor(private readonly value:number){}
    /**
     * Get the raw primitive value (number) for this ID.
     */
    getValue(): number {
        return this.value;
    }

    /**
     * Check if two UserIds are equal.
     */
    equals(other: UserId): boolean {
        return this.value === other.value;
    }

    toString(): string {
        return this.value.toString();
    }
}