import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Post('login')
    async login(@Body( new ValidationPipe() ) updateUserDto: UpdateUserDto) {
      return await this.userService.login(updateUserDto);
    }
  
    @Post('signUp')
    async signUp(@Body( new ValidationPipe() ) createUsuarioDto: CreateUserDto) {
      return await this.userService.signUp(createUsuarioDto);
    }

  @Post()
  create(@Body( new ValidationPipe() ) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id_user')
  findOne(@Param('id_user') id_user: number) {
    return this.userService.findOne(id_user);
  }

  @Patch(':id_user')
  update(@Param('id_user') id_user: number, @Body( new ValidationPipe() ) updateUserDto: UpdateUserDto) {
    return this.userService.update(id_user, updateUserDto);
  }

  @Delete(':id_user')
  remove(@Param('id_user') id_user: number) {
    return this.userService.remove(id_user);
  }
}
