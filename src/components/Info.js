import React from "react";

function Info({ moreInfo }) {
  console.log("moreInfo:", moreInfo);

  return (
    <div className="infocard">
      <ul className="detailedinfo">
        <li>Actors: {moreInfo.Actors}</li>
        <li>Genre: {moreInfo.Genre}</li>
        <li>Director: {moreInfo.Director}</li>
        <li>Plot: {moreInfo.Plot}</li>
        <li>Released: {moreInfo.Released}</li>
        <li>Runtime: {moreInfo.Runtime}</li>
      </ul>
    </div>
  );
}

export default Info;
