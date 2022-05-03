import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import SearchPage from "./routes/SearchPage";
import Profile from "./routes/ProfileComponent";
import MyLists from "./routes/MyListsComponent";
import MoviePage from "./routes/MoviePage";
import AddMovieForm from "./routes/AddMovieForm";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
      <Route path="lists" element={<MyLists />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="search?search=:navSearch" element={<SearchPage />}/>
      <Route path=":title" element={<MoviePage />}/>
      <Route path="addmovie" element={<AddMovieForm />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

