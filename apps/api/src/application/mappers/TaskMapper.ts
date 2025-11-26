// src/application/mappers/UserMapper.ts
import { time } from "console";
import { Task } from "../../domain/tasks/Task";
import { User } from "../../domain/teams/User";
import { UserDto } from "../dtos/UserDto";
import { TaskDto } from "../dtos/TaskDto";

export class TaskMapper {
    static toDto(task: Task): TaskDto {
        return {
            id: `${task.id.value}` ,
            title: task.title.value,
            description: task.description,
            status: task.status.value
        };
    }

    static toDtoList(users: Task[]): TaskDto[] {
        return users.map(TaskMapper.toDto);
    }
}