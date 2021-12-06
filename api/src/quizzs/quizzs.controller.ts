import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuizzsService } from './quizzs.service';
import { CreateQuizzDto } from './dto/create-quizz.dto';

@Controller('quizzs')
export class QuizzsController {
  constructor(private readonly quizzsService: QuizzsService) { }

  @Post()
  create(@Body() createQuizzDto: CreateQuizzDto) {
    return this.quizzsService.create(createQuizzDto);
  }

  @Get()
  findAll() {
    return this.quizzsService.findAll();
  }
}
