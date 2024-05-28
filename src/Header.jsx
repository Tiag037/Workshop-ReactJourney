import { Button } from "./Boutton";
import { ShoppingBasket, User } from "lucide-react";
import { ReactSvg } from "./ReactSvg";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size={32} />
        <span>ReactJourney</span>
      </h1>
      <div className="flex items-center ml-auto gap-2">
        <Button variant="ghost">
          <ShoppingBasket size={24} />
        </Button>
        <Button variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
