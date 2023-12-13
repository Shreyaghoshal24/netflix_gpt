import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./videotitlebackground/VideoTitle";
import VideoBackground from "./videotitlebackground/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

 //if there is no movie in the store, we will not load the container
  if (!movies) {
    return;
  } //also known as early return
  
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;