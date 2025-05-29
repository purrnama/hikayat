export interface Note {
  _id: string;
  title: string;
  content: any;
  createdAt: Date;
  linkedNotes: string[];
}
