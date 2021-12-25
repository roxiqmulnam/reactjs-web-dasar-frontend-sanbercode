import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ListDetail = () => {
  let { value } = useParams();
  const [listMovie, setlistMovie] = useState([]);
  const [fetchStatsMovie, setfetchStatsMovie] = useState(true);

  useEffect(() => {
    const getMovieDetail = async () => {
      let resultMovie = await axios.get(
        `https://backendexample.sanbersy.com/api/data-movie/${value}`
      );
      let { data } = resultMovie;
      let {
        description,
        duration,
        genre,
        id,
        image_url,
        rating,
        review,
        title,
        year,
      } = data;

      setlistMovie({
        description,
        duration,
        genre,
        id,
        image_url,
        rating,
        review,
        title,
        year,
      });
    };

    if (value !== undefined) {
      if (fetchStatsMovie) {
        getMovieDetail();
        setfetchStatsMovie(false);
      }
    }
  }, []);

  return <>
  {listMovie.description}
  <br/>
  {listMovie.title}
  </>;
};
