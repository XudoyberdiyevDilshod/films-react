import axios from "axios";
import React, { useState } from "react";

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
  return (
    <div className="text-center relative">
      <input
        onChange={handleChange}
        className="border border-slate-300 p-3 rounded-full w-[400px]"
        type="search"
        placeholder="Search..."
      />
      <ul className="absolute bg-transparent max-h-[450px] overflow-auto p-2 left-0 right-0">
        {search?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
