import { Attachment } from "./Attachment";
import { User } from "./User";

export class Task {
    constructor(
        public id: number,
        public title: string,
        public description?: string,
        public assignees: User[] = [],
        public dueDate?: Date,
        public isCompleted: boolean = false,
        public comments: Comment[] = [],
        public attachments: Attachment[] = []
    ) {}

    isOverdue(): boolean {
        return this.dueDate ? this.dueDate < new Date() : false;
    }
}