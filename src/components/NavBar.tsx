import { FiMenu } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

function MenuIcon() {
  return (
    <span>
      <div className="text-2xl text-neutral-500 bg-transparent p-3 hover:bg-neutral-200 hover:rounded-full">
        <FiMenu />
      </div>
    </span>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="object-contain w-[28px]"
        src="images/Google_Keep_icon_(2020).svg.png"
        alt=""
      />
      <span className="text-[22px] font-medium text-neutral-500">Keep</span>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-3 border-neutral-300 border-b-[1.5px]">
      <div className="flex gap-2 items-center">
        <MenuIcon />
        <Logo />
      </div>
      <div className="flex gap-4 text-neutral-500">
        <span className="text-2xl p-3 hover:bg-neutral-200 hover:rounded-full">
          <IoApps />
        </span>
        <span className="text-2xl p-3 hover:bg-neutral-200 hover:rounded-full">
          <MdSettings />
        </span>
      </div>
    </div>
  );
}
