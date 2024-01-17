import { note, notes } from "./types.ts";
import { useContext, useState } from "react";
import { NotesContext } from "./contexts/notesContext.ts";
import noteService from "./services/noteService.ts";

const Note = ({
  note,
  toggleNoteImportance,
}: {
  note: note;
  toggleNoteImportance: (note: note) => void;
}) => {
  return (
    <li className="note">
      {note.message}{" "}
      <button onClick={() => toggleNoteImportance(note)}>
        {note.important ? "important" : "not important"}
      </button>
    </li>
  );
};

const NotesContainer = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [showImportantOnly, setShowImportantOnly] = useState<boolean>(false);

  const toggleNoteImportance = (note: note) => {
    const changedNote = {
      ...note,
      important: !note.important,
    };

    noteService.updateNote(changedNote).then((note) => {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    });
  };

  const filteredNotes: notes = showImportantOnly
    ? notes.filter((note) => note.important)
    : notes;

  return (
    <div className="notes-container">
      <button onClick={() => setShowImportantOnly(!showImportantOnly)}>
        Show {showImportantOnly ? "all" : "important only"}
      </button>

      <ul className="notes-list">
        {filteredNotes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              toggleNoteImportance={toggleNoteImportance}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NotesContainer;
