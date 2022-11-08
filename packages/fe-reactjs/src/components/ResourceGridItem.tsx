import HeartIconOutline from "@heroicons/react/24/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/24/solid/HeartIcon";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { ResourceThumbnail } from "./ResouceThumbnail";

import { Resource } from "../types";

type Props = Resource;

export const ResourceGridItem = ({
  id,
  name,
  thumbnail,
  description,
  attributionText,
  favorite = true,
}: Props) => {
  return (
    <section className="p-4 border border-gray-200 rounded-lg flex flex-col relative z-0 justify-between">
      <div className="mb-4 flex flex-col items-center">
        <ResourceThumbnail thumbnail={thumbnail} className="mb-4" />
        <h2 className="text-lg font-semibold mb-2">
          <Link
            to={`/characters/${id}`}
            title={`Click to navigate to ${name}'s page`}
          >
            {name}
          </Link>
        </h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div>
        <Link
          to={`/characters/${id}`}
          className="text-sm flex-0 bg-gray-100 inline-block border border-gray-200 px-4 py-2 rounded-md"
        >
          Details
        </Link>
      </div>
    </section>
  );
};
