export interface Note {
  title: string;
  content: string;
  createdAt: Date;
  editedAt: null | Date;
}

export type NoteAction =
  | "create"
  | "delete"
  | "update"
  | "edit";
