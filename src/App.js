import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routers } from "./endpoints";

import ListeArticles from "./Pages/Moderateur/ListeArticles";
import SignInPage from "./Pages/Client/SignInPage";
import SignUpPage from "./Pages/Client/SignUpPage";
import FilterArticlesPage from "./Pages/Client/filterArticlesPage";
import FavoriteArticlesPage from "./Pages/Client/favoriteArticlesPage";
import AddModeratorPage from "./Pages/Admin/addModeratorPage";
import GererModerateursPage from "./Pages/Admin/GererModerateursPage";
import UploadArticle from "./Pages/Admin/UploadArticle";
import Welcome from "./Pages/Client/Welcome";
import UpdateModeratorPage from "./Pages/Admin/updateModeratorPage"

function App() {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path={routers.HOME} Component={Welcome} exact />
          <Route path={routers.SIGNIN} Component={SignInPage} exact />
          <Route path={routers.SIGNUP} Component={SignUpPage} exact />
          <Route
            path={routers.ADD_MODERATOR}
            Component={AddModeratorPage}
            exact
          />

          <Route
            path={routers.FAVORITE_ARTICLES}
            Component={FavoriteArticlesPage}
            exact
          />

          <Route
            path={routers.FILTER_ARTICLES}
            Component={FilterArticlesPage}
            exact
          />
          <Route
            path={routers.GERER_MODERATOR}
            Component={GererModerateursPage}
            exact
          />

          <Route
            path={routers.UPLOAD_ARTICLE}
            Component={UploadArticle}
            exact
          />
          <Route
            path={routers.LISTE_ARTICLES}
            Component={ListeArticles}
            exact
          />
          <Route
            path={routers.UPDATE_MODERATOR}
            Component={UpdateModeratorPage}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
