import MoviePosters from "./../assets/s-l1200.jpg";
import "./Home.css";

const home_text =
  "Welcome to Movie Surfer, your ultimate destination for discovering movies and TV series! Dive into a world of entertainment with our sleek and user-friendly interface, designed to make exploring your favorite titles effortless. Browse through trending releases, timeless classics, and hidden gems tailored to your interests. Stay updated with the latest trailers, reviews, and recommendations to help you decide what to watch next. Whether you're in the mood for a binge-worthy series or a blockbuster movie, Movie Surfer has something for everyone. Start your journey now and uncover endless entertainment possibilities at your fingertips!";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
        <img src={MoviePosters} alt="Posters"></img>
      </div>
      <div>
        <p className="home-header-txt">Welcome to Movie Surfer</p>
        <p className="home-txt">{home_text}</p>
        <div className="home-btns">
          <a href="/movies">Browse Movies</a>
          <a href="/tvseries">Browse TV Series</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
