import { useEffect, useState } from "react";
import { useParams, createPath } from "react-router-dom";
import { View } from "../../components/View";
import { CharacterHeadline } from "../../components/CharacterHeadline";

import { useFetchApi } from "../../hooks/useFetchApi";

import { Resource } from "../../types";

type Params = {
  id: string;
};

export const CharacterViewContainer = () => {
  const params = useParams<Params>();

  console.log("id", `/characters/${params.id}`);

  const { data, startFetch } = useFetchApi(`/characters/${params.id}`);
  const [character, setCharacter] = useState<Resource>();

  useEffect(() => {
    startFetch();
  }, []);

  useEffect(() => {
    if (data?.results) {
      setCharacter(data.results[0]);
    }
    console.log(data);
  }, [data]);

  return (
    <View>
      <CharacterHeadline {...character} />
    </View>
  );
};
