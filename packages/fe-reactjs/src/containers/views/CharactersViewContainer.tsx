import { View } from "../../components/View";
import { ResourceGridContainer } from "../ResourceGridContainer";

export const CharactersViewContainer = () => {
  return (
    <View>
      <ResourceGridContainer title="Marvel Characters" resource="/characters" />
    </View>
  );
};
