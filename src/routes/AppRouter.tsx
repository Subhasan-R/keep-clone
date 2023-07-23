import axios from "axios";
import {
  ActionFunctionArgs,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import NotesPage from "../pages/notes/NotesPage";

export interface NoteData {
  title: string;
  text: string;
  id: string;
}

async function uploadNotes(args: ActionFunctionArgs) {
  const formRequest = args.request;
  const data = await formRequest.formData();
  const noteToBeSent = {
    heading: data.get("noteTitle"),
    description: data.get("noteText"),
  };
  const noteResponse = await axios.post(
    "https://keepcloneapp.onrender.com/",
    noteToBeSent,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(noteResponse);

  return null;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="notes" element={<NotesPage />} action={uploadNotes} />
      <Route path="archives" element={<p>Archive page</p>}></Route>
    </Route>
  )
);
