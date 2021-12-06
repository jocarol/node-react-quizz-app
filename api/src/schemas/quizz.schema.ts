
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mixed } from 'mongoose';
import { modelOptions, mongoose, Severity } from "@typegoose/typegoose";

export type QuizzDocument = Quizz & Document;
@modelOptions({
  options: {
    allowMixed: Severity.ALLOW,
  },
})

@Schema()
export class Quizz {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  questions: Mixed
}

export const QuizzSchema = SchemaFactory.createForClass(Quizz);
