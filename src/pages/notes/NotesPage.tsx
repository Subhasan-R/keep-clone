import { useEffect, useState } from "react";
import NoteInput from "./NoteInput";
import NotesCard from "./NotesCard";
import { NoteData } from "../../routes/AppRouter";
import axios from "axios";

interface ServerResponse {
  id: string;
  heading: string;
  description: string;
}

function NotesPage() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    const resData: NoteData[] = [];
    const data = axios
      .get<ServerResponse[]>("https://keepcloneapp.onrender.com/")
      .then((res) =>
        res.data.forEach((note) =>
          resData.push({
            text: note.description,
            title: note.heading,
            id: note.id,
          })
        )
      )
      .catch(() => console.log("Error"));
    data.then(() => setNotes(resData)).catch((err) => console.log(err));
  });

  return (
    <div className="flex flex-col gap-20">
      <NoteInput />
      <div className="grid grid-cols-4 gap-5">
        {notes.map((note, index) => (
          <NotesCard {...note} key={index} />
        ))}
      </div>
    </div>
  );
}
export default NotesPage;
