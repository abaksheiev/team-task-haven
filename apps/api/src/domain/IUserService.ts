import { User } from "./teams/User";

export interface IUserService {
  getAllUsers(): Promise<User[]>;
}