export const Card = (props) => {
  var { id, img_url, name, rating, genre, description, watch_url } = props.elem;

  return (
    <div className="series" key={id}>
      <div className="poster">
        <img src={img_url} alt="" width="50%" />
      </div>
      <h1>Name : {name} </h1>
      <h1>Rating: {rating}</h1>
      <h1>Genre : {genre}</h1>
      <h1>Summary :</h1>
      <p>{description}</p>
      <a href={watch_url}>
        <button>Watch Now </button>
      </a>
    </div>
  );
};
