import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository( User )
    private userRepository: Repository<User>
  ){}

  async login(updateUser: UpdateUserDto) {
    try {
      const user: User = await this.userRepository.findOneBy({ email: updateUser.email });
      if (user && await bcrypt.compare(updateUser.password, user.password)) {
        return user;
      }
      return false;
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    }
  }

    async signUp(createUsuario: CreateUserDto) {
      try {
        const existingUser = await this.userRepository.findOneBy({ email: createUsuario.email });
        if (existingUser) {
          return false;
        }
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUsuario.password, saltOrRounds);
        const newUser = this.userRepository.create({
          ...createUsuario,
          password: hash
        });
        return await this.userRepository.save(newUser);
  
      } catch (error) {
        return false;
      }
    }

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash( createUserDto.password, saltOrRounds);
    //encriptar contraseña
    const register = { ...createUserDto, password: hash };
    //crear usuario
    const new_user = this.userRepository.create( register );
    return await this.userRepository.save( new_user );
  }

  async update(id_user: number, updateUserDto: UpdateUserDto) {
    ( updateUserDto.password ) && ( async () => {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash( updateUserDto.password, saltOrRounds);

      const register = { ...updateUserDto, password: hash };

      return await this.userRepository.update( id_user, register );
    })();
      return await this.userRepository.update( id_user, updateUserDto);
  }

  async findOne(id_user: number) {
    return await this.userRepository.findBy({ id_user })
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async remove(id_user: number) {
    return await this.userRepository.delete( id_user );
  }
}
