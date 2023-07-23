import { useState } from "react";
import {
  MdOutlineArchive,
  MdOutlineCheckBox,
  MdOutlinePushPin,
  MdRedo,
  MdUndo,
} from "react-icons/md";
import { Form } from "react-router-dom";

function TaskListIcon() {
  return (
    <div>
      <span className="text-2xl text-neutral-500">
        <MdOutlineCheckBox />
      </span>
    </div>
  );
}

interface Props {
  handleClick: () => void;
}

function NoteInputExpanded(props: Props) {
  const [inputRows, setInputRows] = useState<number>(1);
  return (
    <div
      className="flex flex-col gap-6 p-3 px-5 max-w-lg rounded-lg"
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Form className="flex flex-col gap-6" method="POST">
        <div className="flex justify-between">
          <input
            type="text"
            name="noteTitle"
            placeholder="Title"
            className="outline-none placeholder:text-base placeholder:font-medium placeholder:text-neutral-600"
          />
          <button
            type="submit"
            className="text-2xl text-neutral-500 hover:bg-neutral-200 p-2 rounded-full hover:text-neutral-700"
          >
            <MdOutlinePushPin />
          </button>
        </div>
        <textarea
          name="noteText"
          placeholder="Take a note..."
          rows={inputRows}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setInputRows((prev) => prev + 1);
            }
          }}
          className="overflow-hidden resize-none outline-none placeholder:text-sm placeholder:font-medium placeholder:text-neutral-600"
        ></textarea>
      </Form>
      <div className="flex justify-between">
        <div className="flex gap-5 text-xl">
          <span className="text-neutral-500">
            <MdUndo />
          </span>
          <span className="text-neutral-500">
            <MdRedo />
          </span>
          <span className="text-neutral-600">
            <MdOutlineArchive />
          </span>
        </div>
        <button
          className="px-4 py-2 rounded-md font-medium text-neutral-700 hover:bg-neutral-100"
          onClick={() => props.handleClick()}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function NoteInput() {
  const [inputCardDisplayed, setInputCardDisplayed] = useState<boolean>(true);

  function handleClick() {
    setInputCardDisplayed(true);
  }
  return inputCardDisplayed ? (
    <div
      className="rounded-lg flex justify-between max-w-lg overflow-hidden"
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* <span className="text-neutral-700 font-medium">Take a note...</span> */}
      <input
        type="text"
        name="noteText"
        placeholder="Take a note..."
        className="outline-none placeholder:text-neutral-700 placeholder:font-medium p-3 px-5"
        onFocus={() => setInputCardDisplayed(false)}
      />
      <div className="p-3 px-5">
        <TaskListIcon />
      </div>
    </div>
  ) : (
    <NoteInputExpanded handleClick={handleClick} />
  );
}
export default NoteInput;
