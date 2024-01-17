import NoteForm from "./NoteForm.tsx";
import noteService from "./services/noteService.ts";
import { useEffect, useState } from "react";
import { notes } from "./types.ts";

const App = () => {
  const [notes, setNotes] = useState<notes>([]);

  useEffect(() => {
    noteService.getNotes().then((notes) => setNotes(notes));
  }, []);

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm />
    </div>
  );
};

export default App;
