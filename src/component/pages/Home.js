import React from "react";

function Home() {
  const style = {
    display: "flex",
    justifyContant: "center",
    flexDirection: "column",
    alinItem: "center",
    border: "1px solid red",
  };
  return (
    <div>
      <h1>Home Page</h1>
      <figure style={style}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKFyigXv05w_PaSKdJzVcBW32G3dr2i92aY4OIiz0tNbyllhtUY0VbtfFsf3czr1hTAM&usqp=CAU"
          alt=""
        />
        <figcaption>This is a Taj mehal</figcaption>
      </figure>
    </div>
  );
}

export default Home;
