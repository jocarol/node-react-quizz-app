import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizzDocument } from 'src/schemas/quizz.schema';
import { CreateQuizzDto } from './dto/create-quizz.dto';
import { Quizz } from './entities/quizz.entity';

@Injectable()
export class QuizzsService {
  constructor(@InjectModel(Quizz.name) private quizzModel: Model<QuizzDocument>) { }

  async create(createQuizzDto: CreateQuizzDto): Promise<Quizz> {
    return new this.quizzModel(createQuizzDto).save();
  }

  async findAll() {
    return this.quizzModel.find();
  }
}
