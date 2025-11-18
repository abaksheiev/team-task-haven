import { UserId } from "./UserId";

export class User {
    constructor(
        public id: UserId,
        public username: string,
        public email: string,
        public avatarUrl?: string
    ) {}

    getId(): UserId { return this.id; }
    getUsername(): string { return this.username; }
    getEmail(): string { return this.email; }
}