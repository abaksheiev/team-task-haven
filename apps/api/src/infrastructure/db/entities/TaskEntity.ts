import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "tasks" })
export class TaskEntity {
  @PrimaryColumn("uuid")
  id!: string;

  @Column("varchar")
  title!: string;

  @Column("varchar")
  description!: string;

  @Column("varchar", { nullable: true })
  duedate?: string;

  @Column("numeric", { nullable: false })
  status: number = 0;

  @Column("uuid", { name: "assigneeid", nullable: true })
  assigneeId: string | null = null;
}