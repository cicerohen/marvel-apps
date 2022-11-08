import clsx from "clsx";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import { RCProps } from "../types";

type Props = RCProps;

export const Loading = ({ className }: Props) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
      <p className="text-sm">Loading...</p>
    </div>
  );
};
