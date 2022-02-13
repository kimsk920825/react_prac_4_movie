import PropTypes from "prop-types";

function MovieDetail({ id, date_uploaded, description_full, rating, runtime }) {
  return (
    <div>
      <div>{id}</div>
      <div>{date_uploaded}</div>
      <div>{description_full}</div>
      <div>{rating}</div>
      <div>{runtime}</div>
    </div>
  );
}

export default MovieDetail;
