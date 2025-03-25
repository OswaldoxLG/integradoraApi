import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository( Usuario )
    private usuarioRepository: Repository<Usuario>
  ){}

  async login( updateUsuario: UpdateUsuarioDto ){
    try{
        const usuario: Usuario = await this.usuarioRepository.findOneBy({ email: updateUsuario.email });
        return ( await bcrypt.compare( updateUsuario.pass, usuario.pass ) ? usuario : false );
    }catch(error){
      return false;
    }
  }

  async signUp(createUsuario: CreateUsuarioDto) {
    try {
      const existingUser = await this.usuarioRepository.findOneBy({ email: createUsuario.email });
      if (existingUser) {
        return false;
      }
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(createUsuario.pass, saltOrRounds);
      const newUser = this.usuarioRepository.create({
        ...createUsuario,
        pass: hash
      });
      return await this.usuarioRepository.save(newUser);

    } catch (error) {
      return false;
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash( createUsuarioDto.pass, saltOrRounds);
    //encriptar contraseña
    const register = { ...createUsuarioDto, password: hash };
    //crear usuario
    const new_usuario = this.usuarioRepository.create( register );
    return await this.usuarioRepository.save( new_usuario );
  }

  async update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    ( updateUsuarioDto.pass ) && ( async () => {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash( updateUsuarioDto.pass, saltOrRounds);
      //encriptar contraseña
      const register = { ...updateUsuarioDto, pass: hash };
      //crear usuario
      return await this.usuarioRepository.update( id_usuario, register );
    })();
      return await this.usuarioRepository.update( id_usuario, updateUsuarioDto);
  }

  async findOne(id_usuario: number) {
    return await this.usuarioRepository.findBy({ id_usuario })
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async remove(id_usuario: number) {
    return await this.usuarioRepository.delete( id_usuario );
  }
}
