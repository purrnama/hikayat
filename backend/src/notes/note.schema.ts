import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
  @Prop({ type: String, required: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Object, required: true })
  content: any;

  @Prop({ type: [String], ref: 'Note' })
  linkedNotes: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
