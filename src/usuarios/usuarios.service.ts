import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    // Se não houver dados em dto
    if (!createUsuarioDto) {
      throw new BadRequestException('Nenhum dado em dto');
    }

    try {
      // Criar
      const usuario = await this.prisma.usuario.create({
        data: {
          ...createUsuarioDto,
        },
      });
      return usuario;
    } catch (error) {
      // Verificar se o erro tem uma mensagem
      console.log(error);
      const errorMessage = error.message || 'Erro Interno do Servidor';
      throw new InternalServerErrorException(`Erro: ${errorMessage}`);
    }
  }

  async findAll() {
    // Encontrar todos os usuarios
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios;
  }

  async findOne(id: number) {
    // Encontrar usuario
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Verificar se o usuario foi encontrado
    if (!usuario) {
      throw new BadRequestException(`Usuario com id ${id} não encontrado`);
    }

    // Retornar usuario
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    // Se não houver dados em dto
    if (!updateUsuarioDto) {
      throw new BadRequestException('Nenhum dado em dto');
    }

    // Obter dados atuais do usuario no DB
    const currentUsuario = await this.prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Se o usuario não foi encontrado no DB
    if (!currentUsuario) {
      throw new BadRequestException(`Usuario com id ${id} não encontrado`);
    }

    // Atualizar no DB
    const usuario = await this.prisma.usuario.update({
      where: {
        id: Number(id),
      },
      data: {
        ...updateUsuarioDto,
      },
    });

    // Retornar usuario atualizado
    return usuario;
  }

  async remove(id: number) {
    // Encontrar usuario
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Se o usuario não foi encontrado no DB
    if (!usuario) {
      throw new BadRequestException(`Usuario com id ${id} não encontrado`);
    }

    // Deletar no DB
    await this.prisma.usuario.delete({
      where: {
        id: Number(id),
      },
    });

    // Retornar 200
    return {
      message: 'Usuario removido',
    };
  }
}
