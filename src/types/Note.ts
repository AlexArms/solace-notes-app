export interface Note {
  title: string;
  content: string;
  createdAt: Date;
  _id: string;
}

export type NoteAction =
  | "create"
  | "delete"
  | "update"
  | "edit";
