import { FormEvent, useState } from "react";
import noteService from "./services/noteService.ts";
import { note, notes } from "./types.ts";

const NoteForm = ({
  setNotes,
  notes,
}: {
  setNotes: React.Dispatch<any>;
  notes: notes;
}) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newNote: note = { message, important: false };

    noteService.createNote(newNote).then((note) => {
      setNotes(notes.concat(note));
      console.log(note);
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
