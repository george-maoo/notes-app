import { FormEvent, useState } from "react";

const NoteForm = () => {
  const [noteMessage, setNoteMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log(noteMessage);

    setNoteMessage("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="note-message">Message:</label>{" "}
      <input
        id="note-message"
        type="text"
        onChange={(e) => setNoteMessage(e.target.value)}
        value={noteMessage}
        name="note-message"
      />
      <button type="submit">Create note</button>
    </form>
  );
};

export default NoteForm;
