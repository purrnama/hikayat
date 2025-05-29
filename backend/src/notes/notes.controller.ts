import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.schema';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Get()
  async getAllNotes() {
    return this.notesService.getNotes();
  }

  @Post()
  async createNote(@Body() noteDto: Note): Promise<Note> {
    return this.notesService.createNote(noteDto);
  }

  @Patch(':id')
  async updateNote(@Param('id') id: string, @Body() updateNoteDto: Note) {
    return this.notesService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}
