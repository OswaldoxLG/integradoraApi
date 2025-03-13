import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Decimal128, Document, SchemaTypes } from 'mongoose';

export enum rolUsuario {
  ADMIN = "admin",
  USUARIO = "usuario",
}

export enum sexoUsuario {
  FEMENINO = "femenino",
  MASCULINO = "masculino",
  NO_BINARIO = "no_binario"
}

@Schema({ timestamps: true })
export class Usuario extends Document {

  @Prop()
  username: string;

  @Prop()
  nombre: string;

  @Prop()
  apellido_paterno: string;

  @Prop()
  apellido_materno: string;

  @Prop({ required: true, unique: true})
  email: string;

  @Prop({ required: true, select: false })
  pass: string;

  @Prop({ enum: sexoUsuario })
  sexo: sexoUsuario;

  @Prop()
  fecha_nac: Date;

  @Prop()
  telefono: string;

  @Prop({  enum: rolUsuario, default: rolUsuario.USUARIO })
  rol: rolUsuario;

  @Prop({
    frecuencia_cardiaca: SchemaTypes.Decimal128,
    temperatura: SchemaTypes.Decimal128,
    spo2: SchemaTypes.Decimal128,
    required: true 
  })
  umbrales: {
    frecuencia_cardiaca: Decimal128;
    temperatura: Decimal128;
    spo2: Decimal128;
  };

  @Prop({ type: String })
  imagenPerfil: string;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);