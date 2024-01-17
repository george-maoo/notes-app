import NoteForm from "./NoteForm.tsx";
import NotesContainer from "./NotesContainer.tsx";
import noteService from "./services/noteService.ts";
import { useEffect, useState } from "react";
import { notes } from "./types.ts";

const App = () => {
  const [notes, setNotes] = useState<notes>([]);

  useEffect(() => {
    noteService.getNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm />
      <NotesContainer notes={notes} />
    </div>
  );
};

export default App;
