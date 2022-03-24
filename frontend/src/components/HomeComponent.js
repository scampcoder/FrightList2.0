import Navbar from '../components/NavbarComponent';
import Banner from '../components/BannerComponent';
import WeeklyMovies from '../components/WeeklyMoviesComponent';
import Footer from '../components/FooterComponent';

export default function Home() {
    return (
      <div className="Home">
        <Navbar />
        <Banner />
        <WeeklyMovies />
        <Footer />
      </div>
    );
  }