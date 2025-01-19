import React from "react";
import data from "../api/data.json";
import { Card } from "./Card";
const SeriesList = () => {
  return (
    <>
      {data.map((elem) => {
        return <Card elem={elem} key={elem.id} />;
      })}
    </>
  );
};

export default SeriesList;
