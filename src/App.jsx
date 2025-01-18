import "./App.css";

function App() {
  let age = 19;
  if (age < 18) {
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
          <button>Not Available</button>
        </div>
        <div className="series">
          <div className="poster">
            <img src="netflix-kingdom.jpg" alt="" width="50%" />
          </div>
          <h1>Name : Kingdom</h1>
          <h1>Language : Korean</h1>
          <h1>Summary :</h1>
          <p>
            While strange rumors about their ill King grip a kingdom, the crown
            prince becomes their only hope against a mysterious plague
            overtaking the land.
          </p>
          <button>Not Available</button>
        </div>

        <div className="series">
          <div className="poster">
            <img src="chb.jpg" alt="" width="50%" />
          </div>
          <h1>Name : Chernobyl</h1>
          <h1>Language : English</h1>
          <h1>Summary :</h1>
          <p>
            In April 1986, the city of Chernobyl in the Soviet Union suffers one
            of the worst nuclear disasters in the history of mankind.
            Consequently, many heroes put their lives on the line in the
            following days, weeks and months.
          </p>
          <button>Not Available</button>
        </div>
        <div className="series">
          <div className="poster">
            <img src="rnm.webp" alt="" width="50%" />
          </div>
          <h1>Name : Rick and Morty</h1>
          <h1>Language : English</h1>
          <h1>Summary :</h1>
          <p>
            The fractured domestic lives of a nihilistic mad scientist and his
            anxious grandson are further complicated by their inter-dimensional
            misadventures.
          </p>
          <button>Not Available</button>
        </div>
        <div className="series">
          <div className="poster">
            <img src="12.jpg" alt="" width="50%" />
          </div>
          <h1>Name : 12 Monkeys</h1>
          <h1>Language : English</h1>
          <h1>Summary :</h1>
          <p>
            Follows the journey of a time traveler from the post-apocalyptic
            future who appears in present day on a mission to locate and
            eradicate the source of a deadly plague that will nearly destroy the
            human race.
          </p>
          <button>Not Available</button>
        </div>
      </>
    );
  }
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
      <div className="series">
        <div className="poster">
          <img src="netflix-kingdom.jpg" alt="" width="50%" />
        </div>
        <h1>Name : Kingdom</h1>
        <h1>Language : Korean</h1>
        <h1>Summary :</h1>
        <p>
          While strange rumors about their ill King grip a kingdom, the crown
          prince becomes their only hope against a mysterious plague overtaking
          the land.
        </p>
        <button>{age < 18 ? "Not Avaialble" : "Watch Now"}</button>
      </div>

      <div className="series">
        <div className="poster">
          <img src="chb.jpg" alt="" width="50%" />
        </div>
        <h1>Name : Chernobyl</h1>
        <h1>Language : English</h1>
        <h1>Summary :</h1>
        <p>
          In April 1986, the city of Chernobyl in the Soviet Union suffers one
          of the worst nuclear disasters in the history of mankind.
          Consequently, many heroes put their lives on the line in the following
          days, weeks and months.
        </p>
        <button>{age < 18 ? "Not Available" : "Watch Now"}</button>
      </div>
      <div className="series">
        <div className="poster">
          <img src="rnm.webp" alt="" width="50%" />
        </div>
        <h1>Name : Rick and Morty</h1>
        <h1>Language : English</h1>
        <h1>Summary :</h1>
        <p>
          The fractured domestic lives of a nihilistic mad scientist and his
          anxious grandson are further complicated by their inter-dimensional
          misadventures.
        </p>
        <button>{age < 18 ? "Not Available" : "Watch Now"} </button>
      </div>
      <div className="series">
        <div className="poster">
          <img src="12.jpg" alt="" width="50%" />
        </div>
        <h1>Name : 12 Monkeys</h1>
        <h1>Language : English</h1>
        <h1>Summary :</h1>
        <p>
          Follows the journey of a time traveler from the post-apocalyptic
          future who appears in present day on a mission to locate and eradicate
          the source of a deadly plague that will nearly destroy the human race.
        </p>
        <button>{age < 18 ? "Not Available" : "Watch Now"}</button>
      </div>
    </>
  );
}
export default App;
