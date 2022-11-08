import { View } from "../../components/View";

import { ResourceGridContainer } from "../ResourceGridContainer";

export const HomeViewContainer = () => {
  return (
    <View>
      <ResourceGridContainer title="Marvel Characters" resource="/characters" />
    </View>
  );
};
