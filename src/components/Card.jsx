export const Card = (props) => {
  return (
    <div className="series" key={props.elem.id}>
      <div className="poster">
        <img src={props.elem.img_url} alt="" width="50%" />
      </div>
      <h1>Name : {props.elem.name} </h1>
      <h1>Rating: {props.elem.rating}</h1>
      <h1>Genre : {props.elem.genre}</h1>
      <h1>Summary :</h1>
      <p>{props.elem.description}</p>
      <a href={props.elem.watch_url}>
        <button>Watch Now </button>
      </a>
    </div>
  );
};
