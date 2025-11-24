import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  avatarUrl?: string;
}