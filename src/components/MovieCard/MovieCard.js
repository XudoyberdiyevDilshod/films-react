import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ obj }) => {
  const { id, poster_path, title, overview } = obj;
  return (
    <Link to={`${id}`} className="w-[350px] p-4 bg-slate-400 text-white rounded-md">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        width={"100%"}
        height={180}
        alt="Card Img"
      />
      <h2 className="text-[20px]">{title}</h2>
      <p className="text-[18px]">{overview}</p>
    </Link>
  );
};
