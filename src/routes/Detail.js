import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  //const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetails(json.data.movie);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <MovieDetail
            key={details.id}
            id={details.id}
            date_uploaded={details.date_uploaded}
            description_full={details.description_full}
            rating={details.rating}
            runtime={details.runtime}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
