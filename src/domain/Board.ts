import { List } from "./List";
import { Team } from "./Team";

export class Board {
    constructor(
        public id: number,
        public name: string,
        public team: Team,
        public lists: List[] = []
    ) {}
}