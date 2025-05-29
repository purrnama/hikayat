import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  Editor,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  toDoc,
  Toolbar,
  Validators,
} from "ngx-editor";
import { NotesService } from "../notes.service";

@Component({
  selector: "app-note-editor",
  imports: [
    NgxEditorComponent,
    NgxEditorMenuComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./note-editor.component.html",
  styleUrl: "./note-editor.component.css",
  standalone: true,
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  notesService = inject(NotesService);
  html = "";
  editor: Editor = new Editor();
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
  ];
  form = new FormGroup({
    editorTitle: new FormControl(""),
    editorContent: new FormControl(null, Validators.required()),
  });

  saveNote(title: string) {
    this.notesService.note.title = title;
    this.notesService.saveNote();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
