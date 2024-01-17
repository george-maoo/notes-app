import NoteForm from "./NoteForm.tsx";
import NotesContainer from "./NotesContainer.tsx";
import noteService from "./services/noteService.ts";
import { useEffect, useState } from "react";
import { notes } from "./types.ts";
import { NotesContext } from "./contexts/notesContext.ts";

const App = () => {
  const [notes, setNotes] = useState<notes>([]);

  useEffect(() => {
    noteService.getNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <div className="container">
        <h1 className="header">Notes</h1>
        <NoteForm />
        <NotesContainer />
      </div>
    </NotesContext.Provider>
  );
};

export default App;
