import './App.scss';
import Navbar from './components/NavbarComponent';
import Banner from './components/BannerComponent';
import WeeklyMovies from './components/WeeklyMoviesComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <WeeklyMovies />
      <Footer />
    </div>
  );
}

export default App;
