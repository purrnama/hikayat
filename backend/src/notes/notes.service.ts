import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/notes/note.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<Note>,
  ) {}

  async getNotes(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async createNote(note: Note): Promise<Note> {
    return this.noteModel.create(note);
  }

  async updateNote(id: string, payload: Note): Promise<Note | null> {
    return this.noteModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  async deleteNote(id: string): Promise<Note | null> {
    return this.noteModel.findByIdAndDelete(id);
  }
}
