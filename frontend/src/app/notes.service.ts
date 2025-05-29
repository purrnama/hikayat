import { inject, Injectable } from "@angular/core";
import { Note } from "./note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  private http = inject(HttpClient);
  private nestUrl = "http://localhost:3000/notes";
  note: Note = {
    _id: "",
    title: "",
    content: "",
    linkedNotes: [],
    createdAt: new Date(),
  };
  noteList: Note[] = [];

  constructor() {
    this.getAllNotes();
  }

  newNote(): void {
    this.note = {
      _id: "",
      title: "",
      content: "",
      linkedNotes: [],
      createdAt: new Date(),
    };
  }

  saveNote() {
    if (this.note._id == "") {
      this.note._id = Date.now().toString();
      return this.http
        .post<Note>(this.nestUrl, this.note)
        .subscribe((savedNote) => {
          console.log("Note saved: ", savedNote);
          this.getAllNotes();
        });
    } else {
      return this.http
        .patch<Note>(this.nestUrl + "/" + this.note._id, this.note)
        .subscribe((updatedNote) => {
          console.log("Note updated: ", updatedNote);
          this.getAllNotes();
        });
    }
  }

  readNote(note: Note) {
    this.note._id = note._id;
    this.note.title = note.title;
    this.note.content = note.content;
    this.note.linkedNotes = note.linkedNotes;
    this.note.createdAt = note.createdAt;
  }

  getAllNotes(): void {
    this.http.get<Note[]>(this.nestUrl).subscribe((notes) => {
      this.noteList = notes;
    });
  }

  getNoteById(id: string): Note | undefined {
    return this.noteList.find((note) => note._id === id);
  }

  deleteNote(note: Note) {
    this.http
      .delete<Note>(this.nestUrl + "/" + note._id)
      .subscribe((deletedNote) => {
        console.log("Note deleted: ", deletedNote);
        this.getAllNotes();
      });
  }
}
