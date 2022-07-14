import { Entity, Column, PrimaryColumn, OneToMany, Unique } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Clients")
export class Clients {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  email: string;

  @Column()
  personalId: string;

  @Column({ type: "varchar", length: 11, unique: true })
  cell: string;

  @Column()
  isAlocated: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
