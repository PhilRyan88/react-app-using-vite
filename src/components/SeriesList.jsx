import React from "react";
import data from "../api/data.json";
import { Card } from "./Card";
const SeriesList = () => {
  return (
    <div className="grid">
      {data.map((elem) => {
        return <Card elem={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default SeriesList;
