export type note = { message: string; important: boolean; id?: string };
export type notes = note[] | [];
export type NoteContext = {
  notes: notes;
  setNotes: (notes: notes) => void;
};
