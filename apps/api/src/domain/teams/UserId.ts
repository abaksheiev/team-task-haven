export class UserId{
    constructor(private readonly value:string | null){}
    /**
     * Get the raw primitive value (number) for this ID.
     */
    getValue(): string | null {
        return this.value;
    }

    /**
     * Check if two UserIds are equal.
     */
    equals(other: UserId): boolean {
        return this.value === other.value;
    }

    toString(): string | null {

        if(this.value == null)
            return null;

        return this.value.toString();
    }
}