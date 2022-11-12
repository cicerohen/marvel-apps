import clsx from "clsx";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Link } from "react-router-dom";
import { RCProps } from "../types";

import { routes } from "../routes";

type Props = RCProps<
  Partial<{
    onOpenSidebar: () => void;
  }>
>;

export const Header = ({ onOpenSidebar, className }: Props) => {
  return (
    <header className={clsx("bg-red-700 fixed w-full z-10", className)}>
      <div className="px-8 flex h-full items-center xl:container xl:mx-auto">
        <h1 className="text-white uppercase font-bold">
          <a href={routes.home}>Marvel App</a>
        </h1>
        <button className="ml-auto" onClick={onOpenSidebar}>
          <Bars3Icon className="text-white h-8 w-8 lg:hidden" />
        </button>
        <nav className="hidden text-white ml-auto lg:flex list-none">
          <Link
            to={routes.characters}
            className="text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
          >
            Characters
          </Link>
          <Link
            to={routes.comics}
            className={
              "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
            }
          >
            Comics
          </Link>
          <Link
            to={routes.signin}
            className={
              "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
            }
          >
            Sign In
          </Link>
          <Link
            to={routes.signup}
            className={
              "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
            }
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};
