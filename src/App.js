import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routers } from "./endpoints";

import RectifierArc from "./Pages/Moderateur/RectifierArc";
import ListeArticles from "./Pages/Moderateur/ListeArticles";
import MdetailsAr from "./Pages/Moderateur/MdetailsAr";
import GererModerateursPage from "./Pages/Admin/GererModerateursPage";
import Welcome from "./Pages/Client/Welcome";
import UpdateModeratorPage from "./Pages/Admin/updateModeratorPage";
import Recherche from "./Pages/Client/Recherche";
import UploadArticle from "./Pages/Admin/UploadArticle";
import UploadArticlePopUp from "./Components/UploadArticlePopUp";

import SignInPage from "./Pages/Client/SignInPage";
import SignUpPage from "./Pages/Client/SignUpPage";
import FilterArticlesPage from "./Pages/Client/filterArticlesPage";
import FavoriteArticlesPage from "./Pages/Client/favoriteArticlesPage";
import AddModeratorPage from "./Pages/Admin/addModeratorPage";
import DetailsArClient from "./Pages/Client/DetailsArticle";

function App() {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path={routers.HOME} Component={Welcome} exact />
          <Route path={routers.SIGNIN} Component={SignInPage} />
          <Route path={routers.SIGNUP} Component={SignUpPage} />
          <Route
            path={routers.LISTE_ARTICLES}
            Component={ListeArticles}
          />

          <Route
            path={routers.ADD_MODERATOR}
            Component={AddModeratorPage}
            exact
          />

          <Route
            path={`${routers.MDETAILS}/:id`}
            // element={<MdetailsAr />}
            Component={MdetailsAr}
            exact
          />

          <Route
            path={`${routers.RECTIFY}/:id`}
            element={<RectifierArc />}
            exact
          />

          <Route
            path={routers.UPLOAD_ARTICLE}
            element={<UploadArticle />}
            exact
          />

          <Route
            path={routers.UPLOADPOPUP}
            element={<UploadArticlePopUp />}
            exact
          />

          <Route
            path={routers.FAVORITE_ARTICLES}
            Component={FavoriteArticlesPage}
            exact
          />

          <Route path={routers.SEARCH} Component={Recherche} exact />
          {/* <Route path={routers.RECHERCHE} Component={Recherche} exact/> */}


          <Route
            path={`${routers.FILTER_ARTICLES}/:mot`}
            element={<FilterArticlesPage />}
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
            path={routers.UPDATE_MODERATOR}
            Component={UpdateModeratorPage}
            exact
          />

          <Route
            path={routers.UPDATE_MODERATOR}
            Component={UpdateModeratorPage}
            exact
          />
          <Route
            path={routers.DETAILSARCLIENT}
            Component={DetailsArClient}
            exact
          />
          <Route path={routers.RECHERCHE} Component={Recherche} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
