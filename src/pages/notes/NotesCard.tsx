import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  title: string;
  text: string;
  id: string;
}

function handleDelete(id: string) {
  axios
    .delete(`https://keepcloneapp.onrender.com/${id}`)
    .then(() => console.log("Deleted data"))
    .catch((err) => console.log("Error deleting data", err));
}

function NotesCard(props: Props) {
  return (
    <div className="flex flex-col gap-4 py-2 px-3 max-w-[200px] min-h-[100px] border-[1px] border-[#e0e0e0] rounded-xl">
      <h2 className="text-xl text-neutral-700 font-semibold">{props.title}</h2>
      <p className="text-base font-medium text-neutral-700">{props.text}</p>
      <button className="self-end" onClick={() => handleDelete(props.id)}>
        <div className="text-neutral-500 text-2xl p-3 hover:bg-neutral-300 rounded-full">
          <MdDeleteOutline />
        </div>
      </button>
    </div>
  );
}
export default NotesCard;
