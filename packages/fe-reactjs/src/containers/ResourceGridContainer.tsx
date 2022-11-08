import React, { useEffect, useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

import { ResourceGrid } from "../components/ResourceGrid";

import { Resource } from "../types";

type Props = Partial<{
  title: React.ReactNode;
  resource: string;
}>;

export const ResourceGridContainer = ({ title, resource }: Props) => {
  const { data, isFetching, startFetch } = useFetchApi(resource);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    startFetch();
  }, []);

  useEffect(() => {
    if (data?.results) {
      setResources(
        data.results.map((result) => ({ ...result, favorite: false }))
      );
    }
  }, [data]);

  return (
    <ResourceGrid loading={isFetching} title={title} resources={resources} />
  );
};
