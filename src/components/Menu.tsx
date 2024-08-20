import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Menu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img src="/icons/menu-icon.svg" alt="menu icon" className="w-10"/>
        </SheetTrigger>
        <SheetContent side="left" className="w-[348px]">
          
        </SheetContent>
      </Sheet>
    </div>
  );
}
