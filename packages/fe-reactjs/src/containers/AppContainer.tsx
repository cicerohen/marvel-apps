import { Routes, Route, BrowserRouter } from "react-router-dom";

import { HomeViewContainer } from "./views/HomeViewContainer";
import { CharactersViewContainer } from "./views/CharactersViewContainer";
import { CharacterViewContainer } from "./views/CharacterViewContainer";

import { routes } from "../routes";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomeViewContainer />} />
        <Route path={routes.characters} element={<CharactersViewContainer />} />
        <Route path={routes.character} element={<CharacterViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
