import { createContext } from "react";
import { NoteContext } from "../types.ts";

export const NotesContext = createContext<NoteContext>({
  notes: [],
  setNotes: () => {},
});
