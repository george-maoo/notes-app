import { note } from "./types.ts";
import { useContext } from "react";
import { NotesContext } from "./contexts/notesContext.ts";

const Note = ({ note }: { note: note }) => {
  return (
    <li className="note">
      {note.message}{" "}
      <button>{note.important ? "important" : "not important"}</button>
    </li>
  );
};

const NotesContainer = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="notes-container">
      <ul className="notes-list">
        {notes.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </ul>
    </div>
  );
};

export default NotesContainer;
