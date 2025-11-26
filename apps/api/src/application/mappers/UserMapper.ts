// src/application/mappers/UserMapper.ts
import { User } from "../../domain/teams/User";
import { UserDto } from "../dtos/UserDto";

export class UserMapper {
    static toDto(user: User): UserDto {
        return {
            id: `${user.id.value}`,
            username: user.getUsername(),
            email: user.getEmail(),
            //avatarUrl: user.getAvatarUrl()
        };
    }

    static toDtoList(users: User[]): UserDto[] {
        return users.map(UserMapper.toDto);
    }
}