import { Module } from '@nestjs/common';
import { ColetasController } from './coletas.controller';
import { ColetasService } from './coletas.service';

@Module({
  controllers: [ColetasController],
  providers: [ColetasService],
})
export class ColetasModule {}
