export interface Note {
  title: string;
  content: string;
  createdAt: number;
  _id: string;
}

export type NoteAction =
  | "create"
  | "delete"
  | "update"
  | "edit";
