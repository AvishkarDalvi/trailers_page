import { urls } from "../urls/urls";

export const getTrailerData = (setMovies) => {
  fetch(urls.GET_TRAILERS_DATA_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      setMovies(responseData.moviesData);
    });
};
