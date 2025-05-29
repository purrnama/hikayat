import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { NgxEditorModule } from "ngx-editor";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      NgxEditorModule.forRoot({
        locals: {
          bold: "Bold",
          italic: "Italic",
          code: "Code",
          blockquote: "Blockquote",
          underline: "Underline",
          strike: "Strike",
          bullet_list: "Bullet List",
          ordered_list: "Ordered List",
          heading: "Heading",
          h1: "Header 3",
          h2: "Header 2",
          h3: "Header 3",
          h4: "Header 4",
          h5: "Header 5",
          h6: "Header 6",
          align_left: "Left Align",
          align_center: "Center Align",
          align_right: "Right Align",
          align_justify: "Justify",
          text_color: "Text Color",
          background_color: "Background Color",

          // popups, forms, others...
          url: "URL",
          text: "Text",
          openInNewTab: "Open in new tab",
          insert: "Insert",
          altText: "Alt Text",
          title: "Title",
          remove: "Remove",
          enterValidUrl: "Please enter a valid URL",
        },
      }),
    ),
  ],
};
