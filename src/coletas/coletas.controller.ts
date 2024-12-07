import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { ColetasService } from './coletas.service';
import { CreateDto, UpdateDto } from './dto';

@Controller('coletas')
export class ColetasController {
  constructor(private readonly coletasService: ColetasService) {}

  @Get('/')
  async findAll() {
    return this.coletasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.coletasService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateDto) {
    return this.coletasService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDto) {
    return this.coletasService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.coletasService.remove(id);
  }
}
