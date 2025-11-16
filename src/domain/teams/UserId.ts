export class UserId{
    constructor(private readonly value:number){}
    equals(other: UserId):boolean{
        return this.value === other.value
    }
}