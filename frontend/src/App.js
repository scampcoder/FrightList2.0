import './App.scss';
import Navbar from './components/NavbarComponent';
import Banner from './components/BannerComponent';
import WeeklyMovies from './components/WeeklyMoviesComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <WeeklyMovies />
    </div>
  );
}

export default App;
