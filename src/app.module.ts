import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColetasModule } from './coletas/coletas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ColetasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
