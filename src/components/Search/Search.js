import axios from "axios";
import React, { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";

export const Search = () => {
  const [search, setSearch] = useState([]);
  const handleChange = (evt) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${evt.target.value}`,
        {
          params: {
            api_key: "0431834c535ecb8b718ac720e46307f3",
          },
        }
      )
      .then((res) => {
        setSearch(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(search);
  return (
    <div className="text-center relative">
      <input
        onChange={handleChange}
        className="border border-slate-300 p-3 rounded-full w-[400px]"
        type="search"
        placeholder="Search..."
      />
      <div className="container mx-auto mb-3 mt-[100px]">
        <div className="flex justify-between flex-wrap mx-5 gap-4 font-bold text-[35px] text-center my-5">
          {search?.map((item) => (
            <MovieCard key={item.id} obj={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
