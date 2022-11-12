import { Routes, Route, BrowserRouter } from "react-router-dom";

import { HomeViewContainer } from "./containers/views/HomeViewContainer";
import { CharactersViewContainer } from "./containers/views/CharactersViewContainer";
import { CharacterViewContainer } from "./containers/views/CharacterViewContainer";
import { SignInViewContainer } from "./containers/views/SignInViewContainer";
import { SignUpViewContainer } from "./containers/views/SignUpViewContainer";

import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomeViewContainer />} />
        <Route path={routes.characters} element={<CharactersViewContainer />} />
        <Route path={routes.character} element={<CharacterViewContainer />} />
        <Route path={routes.signin} element={<SignInViewContainer />} />
        <Route path={routes.signup} element={<SignUpViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
