import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { RCProps } from "../types";

import { routes } from "../routes";

type Props = RCProps<
  Partial<{
    onOpenSidebar: () => void;
  }>
>;

export const Header = ({ onOpenSidebar }: Props) => {
  return (
    <header className="bg-red-700 fixed h-20 w-full z-10">
      <div className="px-8 flex h-full items-center xl:container xl:mx-auto">
        <h1 className="text-white uppercase font-bold">
          <a href={routes.home}>Marvel App</a>
        </h1>
        <button className="ml-auto" onClick={onOpenSidebar}>
          <Bars3Icon className="text-white h-8 w-8 lg:hidden" />
        </button>
        <nav className="hidden text-white ml-auto lg:flex list-none">
          <a
            href={routes.characters}
            className="text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
          >
            Characters
          </a>
          <a
            href={routes.comics}
            className={
              "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
            }
          >
            Comics
          </a>
        </nav>
      </div>
    </header>
  );
};
