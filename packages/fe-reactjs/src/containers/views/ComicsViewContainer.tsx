import { useMemo } from "react";
import { View } from "../../components/View";
import { ResourceGrid } from "../../components/ResourceGrid";

export const ComicsViewContainer = () => {
  const resources = useMemo(() => [], []);

  return (
    <View>
      <ResourceGrid resources={resources} />
    </View>
  );
};
