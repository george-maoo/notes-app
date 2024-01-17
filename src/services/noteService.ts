import { note, notes } from "../types.ts";
import axios from "axios";
const url = "http://localhost:3001/notes";

const getNotes = async (): Promise<notes> => {
  const res = await axios.get(url);
  return res.data;
};

const createNote = async (note: note): Promise<note> => {
  const res = await axios.post(url, note);
  return res.data;
};

const updateNote = async (note: note): Promise<note> => {
  const res = await axios.put(`${url}/${note.id}`, note);
  return res.data;
};

export default {
  getNotes,
  createNote,
  updateNote,
};
