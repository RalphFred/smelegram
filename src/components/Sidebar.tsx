import Menu from "./Menu";
import { Input } from "./ui/input";

export default function Sidebar() {
  return (
    <div className="sidebar bg-dark-2 px-4 py-8">
      <div className="flex-center">
        <Menu/>
          <Input
            placeholder="Search..."
            className="rounded-full bg-dark-3 border-none focus:outline-none ml-4 w-full focus-visible:ring-0 text-white px-4 placeholder:text-[#D4FFD2] placeholder:opacity-40"
          />
      </div>
    </div>
  );
}
