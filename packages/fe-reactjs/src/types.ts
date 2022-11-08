export type RCProps<T = {}> = T & {
  children?: React.ReactNode;
  className?: string;
};

export type Resource = {
  id: number;
  name: string;
  description: string;
  attributionText: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  favorite: boolean;
};

export type Response = {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Resource[];
  };
};
