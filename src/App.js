import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routers } from "./endpoints";

import ListeArticles from "./Pages/Moderateur/ListeArticles";

import SignInPage from "./Pages/Client/SignInPage";
import SignUpPage from "./Pages/Client/SignUpPage";
import FilterArticlesPage from "./Pages/Client/filterArticlesPage";
import FavoriteArticlesPage from "./Pages/Client/favoriteArticlesPage";
import AddModeratorPage from "./Pages/Admin/addModeratorPage";

function App() {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path={routers.HOME} Component={ListeArticles} exact />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
