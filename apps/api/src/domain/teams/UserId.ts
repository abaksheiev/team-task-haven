export class UserId{
    constructor(public readonly value:string){}

    equals(other: UserId): boolean {
        return this.value === other.value;
    }
}