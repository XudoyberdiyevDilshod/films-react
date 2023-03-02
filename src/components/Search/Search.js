import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/popular/${item.id}`} className="w-[350px] p-4 bg-slate-400 text-white rounded-md">
              <ul>
                <li
                  key={item.id}
                  className="text-center p-4 bg-slate-400 text-white rounded-md"
                >
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                    width={"100%"}
                    height={180}
                    alt="Card Img"
                  />
                  <h2 className="text-[20px]">{item.title}</h2>
                  <p className="text-[18px]">{item.overview}</p>
                </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
