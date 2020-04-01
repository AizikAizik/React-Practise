import React from "react";

function Demo({ gameProps }) {
  const l = gameProps.map(i => {
    return <h3 key = {i.id}>Game is : {i.game}</h3>;
  });

  return <div>{l}</div>;
}

export default Demo;
