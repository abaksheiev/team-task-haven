export class TaskId{
    constructor(private readonly value:number){}
    equals(other: TaskId):boolean{
        return this.value === other.value
    }
}