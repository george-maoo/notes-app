import { note, notes } from "./types.ts";

const Note = ({ note }: { note: note }) => {
  return (
    <li className="note">
      {note.message}{" "}
      <button>{note.important ? "important" : "not important"}</button>
    </li>
  );
};

const NotesContainer = ({ notes }: { notes: notes }) => {
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
