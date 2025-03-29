import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum rolUsuario {
  ADMIN = "admin",
  USUARIO = "usuario",
}

export enum sexoUsuario {
  F = "F",
  M = "M"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ default: rolUsuario.USUARIO})
  rol: rolUsuario;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  sex: sexoUsuario;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true, type: 'tinyint', default: 1 })
  activo: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;

  @Column({ type: 'mediumtext', nullable: true})
  image: string;
}

