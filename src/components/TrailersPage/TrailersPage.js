import { getTrailerData } from "../../api/getTrailerData/getTrailerData";
import { useEffect, useState } from "react";
import Movies from "./Movies/Movies";

export default function TrailersPage() {
  const [language, setLanguage] = useState("English");
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrailerData(setMovies);
  }, []);

  return (
    <div className="TrailersPage">
      <header></header>
      <section>{movies && Object.keys(movies).length}</section>
      <section>{movies && <Movies movies={movies} />}</section>
    </div>
  );
}
