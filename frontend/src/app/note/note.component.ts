import { Component, Input } from "@angular/core";
import { Note } from "../note";
import { CommonModule } from "@angular/common";
import { inject } from "@angular/core";
import { NotesService } from "../notes.service";

@Component({
  selector: "app-note",
  imports: [CommonModule],
  templateUrl: "./note.component.html",
  styleUrl: "./note.component.css",
})
export class NoteComponent {
  notesService = inject(NotesService);
  @Input() note!: Note;

  readNote() {
    this.notesService.readNote(this.note);
  }

  deleteNote() {
    this.notesService.deleteNote(this.note);
  }
}
