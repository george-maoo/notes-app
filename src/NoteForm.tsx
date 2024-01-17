import { FormEvent, useContext, useState } from "react";
import noteService from "./services/noteService.ts";
import { note } from "./types.ts";
import { NotesContext } from "./contexts/notesContext.ts";

const NoteForm = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newNote: note = { message, important: false };

    noteService.createNote(newNote).then((note) => {
      setNotes([...notes, note]);
    });

    setMessage("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="note-message">Message:</label>{" "}
      <input
        id="note-message"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="note-message"
      />
      <button type="submit">Create note</button>
    </form>
  );
};

export default NoteForm;
