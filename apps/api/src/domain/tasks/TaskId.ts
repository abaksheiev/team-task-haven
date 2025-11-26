export class TaskId{
    constructor(public readonly value:string){}
    getValue(): string {
        return this.value;
    }

    equals(other: TaskId): boolean {
        return this.value === other.value;
    }

    toString(): string | null {

        if(this.value == null)
            return null;

        return this.value.toString();
    }
}