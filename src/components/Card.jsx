export const Card = (props) => {
  var { id, img_url, name, rating, genre, description, watch_url } = props.elem;

  return (
    <div className="card" key={id}>
      <section className="des">
        <h1>Name : {name} </h1>
        <h4 className="rating">
          Rating:{" "}
          <span className={`rating ${rating > 7 ? "hit" : "avg"}`}>
            {" "}
            {rating}{" "}
          </span>
        </h4>
        <h4>Genre : {genre}</h4>
        <h4>Summary :</h4>
        <p>{description}</p>
      </section>
      <a href={watch_url}>
        <button>Watch Now </button>
      </a>
    </div>
  );
};
