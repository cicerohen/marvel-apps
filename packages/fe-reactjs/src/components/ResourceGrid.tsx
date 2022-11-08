import { Resource } from "../types";
import { ResourceGridItem } from "./ResourceGridItem";
import { Loading } from "./Loading";

type Props = Partial<{
  resources: Resource[];
  title: React.ReactNode;
  loading: boolean;
}>;

export const ResourceGrid = ({
  loading = false,
  title,
  resources = [],
}: Props) => {
  return (
    <div>
      <div className="mb-8">
        {title && <h3 className="text-lg text-center lg:text-2xl">{title}</h3>}
      </div>
      <div className="min-h-[300px]">
        {loading && <Loading className="mb-8" />}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resources.map((resource) => {
            return <ResourceGridItem {...resource} />;
          })}
        </div>
      </div>
    </div>
  );
};
