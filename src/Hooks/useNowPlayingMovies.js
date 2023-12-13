import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    //This custom hook (useNowPlayingMovies) will Fetch data from IMDB API and update store 

    const dispatch = useDispatch(); //to dispatch an action addNowPlayingMovies()
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies); 
    
    const getNowPlayingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovie();
    }, []);
}

export default useNowPlayingMovies;