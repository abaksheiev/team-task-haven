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

  @Column("varchar", { nullable: false })
  status: string = "new";

  @Column("uuid", { name: "assigneeid", nullable: true })
  assigneeId: string | null = null;
}