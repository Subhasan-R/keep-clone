import { ReactNode, useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineArchive } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface Props {
  icon: ReactNode;
  path: string;
  labelText: string;
}

function SideBarLabel(props: Props) {
  const [labelTextShown, setLabelTextShown] = useState<boolean>(false);
  return (
    <div
      className="flex flex-grow"
      onMouseEnter={() => setLabelTextShown(true)}
      onMouseLeave={() => setLabelTextShown(false)}
    >
      <NavLink
        to={props.path}
        className={(navState) => {
          return navState.isActive
            ? "bg-[#feefc3] rounded-full p-3 text-neutral-900"
            : "bg-transparent hover:bg-neutral-200 p-3 rounded-full text-neutral-600";
        }}
      >
        {() => (
          <div className="flex flex-wrap gap-6">
            <span className="text-2xl ">{props.icon}</span>
            {labelTextShown && (
              <span className="text-neutral-900">{props.labelText}</span>
            )}
          </div>
        )}
      </NavLink>
    </div>
  );
}

function SideBar() {
  return (
    <div className="flex flex-col gap-4">
      <SideBarLabel labelText="Notes" path="/notes" icon={<AiOutlineBulb />} />
      <SideBarLabel
        labelText="Archive"
        path="/archives"
        icon={<MdOutlineArchive />}
      />
      {/* <SideBarLabel labelText="Trash" path="/trash" icon={<FaRegTrashAlt />} /> */}
    </div>
  );
}
export default SideBar;
