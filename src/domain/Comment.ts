import { User } from "./User";

export class Comment {
    constructor(
        public id: number,
        public user: User,
        public text: string,
        public createdAt: Date = new Date()
    ) {}
}