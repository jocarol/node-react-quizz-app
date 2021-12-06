import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzsModule } from './quizzs/quizzs.module';

@Module({
  imports: [QuizzsModule,MongooseModule.forRoot('mongodb://admin:secret@localhost/quizz-app')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
