import { createContext } from "react";
import { notes } from "../types.ts";

type NoteContext = {
  notes: notes;
  setNotes: (notes: notes) => void;
};

export const NotesContext = createContext<NoteContext>({
  notes: [],
  setNotes: () => {},
});
