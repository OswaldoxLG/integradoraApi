import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('login')
  async login(@Body( new ValidationPipe() ) updateUserDto: UpdateUsuarioDto) {
    return await this.usuarioService.login(updateUserDto);
  }

  @Post('signUp')
  async signUp(@Body( new ValidationPipe() ) createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.signUp(createUsuarioDto);
  }
  
  @Post()
  create(@Body( new ValidationPipe() ) createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id_usuario')
  findOne(@Param('id_usuario') id_usuario: number) {
    return this.usuarioService.findOne(id_usuario);
  }

  @Patch(':id_usuario')
  update(@Param('id_usuario') id_usuario: number, @Body( new ValidationPipe() ) updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id_usuario, updateUsuarioDto);
  }

  @Delete(':id_usuario')
  remove(@Param('id_usuario') id_usuario: number) {
    return this.usuarioService.remove(id_usuario);
  }
}
