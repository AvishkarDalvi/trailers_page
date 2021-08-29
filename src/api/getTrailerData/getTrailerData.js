import { urls } from "../urls/urls";

export const getTrailerData = (setMovies, setLanguages) => {
  fetch(urls.GET_TRAILERS_DATA_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      console.log(responseData.moviesData["ET00093903"].EventImageUrl);
      setMovies(responseData.moviesData);
      setLanguages(responseData.languageList);
    });
};
