import clsx from "clsx";
import { useEffect } from "react";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { RCProps } from "../types";

import { routes } from "../routes";

type Props = RCProps<
  Partial<{
    onClose: () => void;
    isOpen: boolean;
  }>
>;

export const Sidebar = ({ isOpen = false, onClose }: Props) => {
  const applyBodyStyles = () => {
    const scrolWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.marginRight = `${scrolWidth}px`;
    document.body.style.overflow = (isOpen && "hidden") || "";
  };

  const removeBodyStyles = () => {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";
  };

  useEffect(() => {
    if (isOpen) {
      applyBodyStyles();
      return;
    }
    removeBodyStyles();
    return () => {
      removeBodyStyles();
    };
  }, [isOpen]);

  return (
    <aside
      className={clsx(
        "bg-gray-800 fixed right-0  transition duration-200 ease-in-out w-64 top-0 z-20  bottom-0",
        (isOpen && "translate-x-0 lg:translate-x-full") || "translate-x-full"
      )}
    >
      <div className="flex  h-24 px-4 items-center justify-between">
        <button className="ml-auto" onClick={onClose}>
          <XMarkIcon className="text-gray-500 h-10 w-10" />
        </button>
      </div>
      <div className="flex flex-col min-w-max">
        <nav className="flex flex-col text-white list-none">
          <a
            href={routes.characters}
            className="text-sm  uppercase rounded-md inline-flex items-center py-4 px-8"
          >
            Characters
          </a>
          <a
            href={routes.comics}
            className={
              "text-sm uppercase rounded-md inline-flex items-center py-4 px-8"
            }
          >
            Comics
          </a>
        </nav>
      </div>
    </aside>
  );
};
