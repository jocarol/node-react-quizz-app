import { Module } from '@nestjs/common';
import { QuizzsService } from './quizzs.service';
import { QuizzsController } from './quizzs.controller';
import { Quizz } from './entities/quizz.entity';
import { QuizzSchema } from 'src/schemas/quizz.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Quizz.name, schema: QuizzSchema }])],
  controllers: [QuizzsController],
  providers: [QuizzsService]
})
export class QuizzsModule {}
