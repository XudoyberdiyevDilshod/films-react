import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import BackICon from "../../assets/images/back-arrow.svg";
import axios from "axios";
export const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("movieData")).data.find(
    (item) => item.id === id - 0
  );
  const [film, setFilm] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: {
          api_key: "0431834c535ecb8b718ac720e46307f3",
        },
      })
      .then((res) => {
        setFilm(res.data.cast);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        params: {
          api_key: "0431834c535ecb8b718ac720e46307f3",
        },
      })
      .then((res) => {
        setVideos(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(film);
  return (
    <div className="relative flex justify-evenly items-start mt-[100px]">
      <button onClick={() => navigate(-1)} className="m-5 absolute left-0 ">
        <img src={BackICon} width={35} height={30} alt="go back" />
      </button>
      <div className="w-[300px] h-[100vh] overflow-y-auto">
        <ul>
          {film.length > 0 &&
            film.map((item) => (
              <li key={item.id} className="px-2 bg-slate-300 p-2">
                <div className="text-center">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
                    width={"100%"}
                    height={100}
                    alt="Card Img"
                  />
                  <h2>{item.name}</h2>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="w-[500px]">
        <ul>
          <li
            key={data.id}
            className="text-center p-4 bg-slate-400 text-white rounded-md"
          >
            <img
              src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
              width={"100%"}
              height={180}
              alt="Card Img"
            />
            <h2 className="text-[20px]">{data.title}</h2>
            <p className="text-[18px]">{data.overview}</p>
          </li>
        </ul>
      </div>
      <div className="w-[400px] h-[100vh] overflow-y-auto">
        <ul className="">
          {videos.length > 0 &&
            videos.map((item) => (
              <li key={item.id} className="px-2 my-2">
                <iframe
                  className="rounded-md"
                  width={"100%"}
                  height="315"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="Youtube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                  allowFullScreen
                ></iframe>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
