import React from "react";

const SeriesList = () => {
  let age = 18;
  return (
    <>
      <div className="series">
        <div className="poster">
          <img src="bb.webp" alt="" width="50%" />
        </div>
        <h1>Name : Breaking Bad </h1>
        <h1>Language :English</h1>
        <h1>Summary :</h1>
        <p>
          A chemistry teacher diagnosed with inoperable lung cancer turns to
          manufacturing and selling methamphetamine with a former student to
          secure his family's future.
        </p>
        <button>{age < 18 ? "Not Available" : "Watch Now"} </button>
      </div>
    </>
  );
};

export default SeriesList;
