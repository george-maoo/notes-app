import { note } from "../types.ts";
import axios from "axios";
const url = "http://localhost:3001/notes";

const getNotes = async (): Promise<[note]> => {
  const res = await axios.get(url);
  return res.data;
};

export default {
  getNotes,
};
