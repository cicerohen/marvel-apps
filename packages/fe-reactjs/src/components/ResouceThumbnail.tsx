import clsx from "clsx";
import HeartIconOutline from "@heroicons/react/24/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/24/solid/HeartIcon";

import { CSSProperties } from "react";
import { Resource, RCProps } from "../types";

type Props = RCProps<
  Partial<{
    thumbnail: Resource["thumbnail"];
    favorite: Resource["favorite"];
    onToggleFavorite?: () => void;
  }>
>;

export const ResourceThumbnail = ({
  thumbnail,
  favorite = true,
  onToggleFavorite,
  className,
}: Props) => {
  const bgUrl = `${thumbnail?.path}.${thumbnail?.extension}`;

  return (
    <div
      className={clsx(
        "flex w-56 h-56 rounded-full relative bg-gray-200",
        className
      )}
    >
      <div
        style={{ "--bg-url": `url(${bgUrl})` } as CSSProperties}
        className="border border-gray-200 mb-4 w-56 h-56 relative rounded-full bg-[image:var(--bg-url)] bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0"
      />

      {favorite ? (
        <button
          className="text-red-500 bg-white shadow-lg rounded-full p-2 absolute top-5 right-0"
          onClick={onToggleFavorite}
        >
          <HeartIconSolid className="h-5 w-5" />
        </button>
      ) : (
        <button
          className="text-gray-500 bg-white shadow-lg rounded-full p-2 absolute top-5 right-0"
          onClick={onToggleFavorite}
        >
          <HeartIconOutline className="stroke-1 h-6 w-6 " />
        </button>
      )}
    </div>
  );
};
