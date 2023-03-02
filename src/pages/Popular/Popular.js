import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Pagination } from "../../components/Pagination/Pagination";

export const Popular = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("movieData")) || {
      isFetched: false,
      data: [],
      page: totalPage,
    }
  );

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "0431834c535ecb8b718ac720e46307f3",
          page: totalPage,
        },
      })
      .then((res) => {
        setData({
          isFetched: true,
          data: res.data.results,
          page: res.data.total_pages,
        });
      })
      .catch((err) => ({
        isFetched: false,
        data: [],
        page: 1,
      }));
  }, []);
  localStorage.setItem("movieData", JSON.stringify(data));
  return (
    <div className="container mx-auto mb-3 mt-[100px]">
      <div className="flex justify-between flex-wrap mx-5 gap-4 font-bold text-[35px] text-center my-5">
        {data.isFetched &&
          data.data.map((item) => <MovieCard key={item.id} obj={item} />)}
      </div>
      <Pagination
        data={data}
        setData={setData}
        totalPage={data?.page}
        setTotalPage={setTotalPage}
      />
    </div>
  );
};
