import { Task } from "./Task";
import { User } from "./User";

export class Activity {
    constructor(
        public id: number,
        public type: "task_created" | "task_updated" | "comment_added",
        public user: User,
        public task: Task,
        public createdAt: Date = new Date()
    ) {}
}