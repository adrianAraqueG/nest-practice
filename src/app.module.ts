import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {}
