import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("coffee")
export class MyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column()
  category: string;

  @Column()
  recipe: string;
}
