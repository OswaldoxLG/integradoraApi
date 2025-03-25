import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum rolUsuario {
  ADMIN = "admin",
  USUARIO = "usuario",
}

export enum sexoUsuario {
  FEMENINO = "femenino",
  MASCULINO = "masculino",
  OTRO = "otro"
}
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  username: string;

  @Column()
  nombre: string;

  @Column()
  app: string;

  @Column()
  apm: string;

  @Column()
  email: string;

  @Column()
  pass: string;

  @Column()
  sexo: sexoUsuario;

  @Column()
  fecha_nac: Date;

  @Column()
  telefono: string;

  @Column()
  rol: rolUsuario;

  @Column({ type: 'text'})
  imagenPerfil: string;
  
}
