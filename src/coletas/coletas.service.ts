import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateDto, UpdateDto } from './dto';

@Injectable()
export class ColetasService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDto) {
    // Se não houver dados em dto
    if (!dto) {
      throw new BadRequestException('Nenhum dado em dto');
    }

    try {
      // Criar
      const coleta = await this.prisma.coleta.create({
        data: {
          ...dto,
        },
      });
      return coleta;
    } catch (error) {
      // Verificar se o erro tem uma mensagem
      console.log(error);
      const errorMessage = error.message || 'Erro Interno do Servidor';
      throw new InternalServerErrorException(`Erro: ${errorMessage}`);
    }
  }

  async findAll() {
    // Encontrar todas as coletas
    const coletas = await this.prisma.coleta.findMany();
    return coletas;
  }

  async findOne(id: string) {
    // Encontrar coleta
    const coleta = await this.prisma.coleta.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Verificar se a coleta foi encontrada
    if (!coleta) {
      throw new NotFoundException(`Coleta com id ${id} não encontrada`);
    }

    // Retornar coleta
    return coleta;
  }

  async update(id: string, dto: UpdateDto) {
    // Se não houver dados em dto
    if (!dto) {
      throw new BadRequestException('Nenhum dado em dto');
    }

    // Obter dados atuais da coleta no DB
    const currentColeta = await this.prisma.coleta.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Se a coleta não foi encontrada no DB
    if (!currentColeta) {
      throw new NotFoundException(`Coleta com id ${id} não encontrada`);
    }

    try {
      // Atualizar
      const coleta = await this.prisma.coleta.update({
        where: {
          id: Number(id),
        },
        data: {
          ...dto,
        },
      });
      return coleta;
    } catch (error) {
      // Verificar se o erro tem uma mensagem
      console.log(error);
      const errorMessage = error.message || 'Erro Interno do Servidor';
      throw new InternalServerErrorException(`Erro: ${errorMessage}`);
    }
  }

  async remove(id: string) {
    // Encontrar coleta
    const coleta = await this.prisma.coleta.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Se a coleta não foi encontrada no DB
    if (!coleta) {
      throw new NotFoundException(`Coleta com id ${id} não encontrada`);
    }

    // Deletar no DB
    await this.prisma.coleta.delete({
      where: {
        id: Number(id),
      },
    });

    // Retornar 200
    return {
      message: 'Coleta removida',
    };
  }
}
