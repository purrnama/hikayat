import { Component, inject } from "@angular/core";
import { NoteComponent } from "./note/note.component";
import { CommonModule } from "@angular/common";
import { NotesService } from "./notes.service";
import { NoteEditorComponent } from "./note-editor/note-editor.component";

@Component({
  selector: "app-root",
  imports: [NoteEditorComponent, NoteComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  notesService = inject(NotesService);

  constructor() {}

  newNote(): void {
    this.notesService.newNote();
  }
}
