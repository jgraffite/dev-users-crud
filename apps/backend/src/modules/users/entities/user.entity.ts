import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column({name: 'email'})
  email: string;

  @Column({name: 'password', nullable: true})
  password: string;


  @Column({name: 'created_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: string;
}