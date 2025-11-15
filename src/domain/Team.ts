import { User } from "./User";

export class Team {
    constructor(
        public id: number,
        public name: string,
        public members: User[] = []
    ) {}
}