import { Resource } from "../types";
import { ResourceThumbnail } from "./ResouceThumbnail";

type Props = Partial<Resource>;

export const CharacterHeadline = ({ name, description, thumbnail }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <ResourceThumbnail thumbnail={thumbnail} />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="max-w-xl">{description}</p>
    </div>
  );
};
