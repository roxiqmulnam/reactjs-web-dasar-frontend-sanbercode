import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Descriptions, Image, Tag, } from "antd";
import { ClockCircleOutlined, } from "@ant-design/icons";

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

  
  const [listGame, setlistGame] = useState([]);

  useEffect(() => {
    const getGameDetail = async () => {
      let resultGame = await axios.get(
        `https://backendexample.sanbersy.com/api/data-game/${value}`
      );
      let { data } = resultGame;
      let {
        id,
        genre,
        image_url,
        singlePlayer,
        multiplayer,
        name,
        platform,
        release,
      } = data;

      setlistGame({
        id,
        genre,
        image_url,
        singlePlayer,
        multiplayer,
        name,
        platform,
        release,
      });
    };

    if (value !== undefined) {
      if (fetchStatsMovie) {
        getGameDetail();
        setfetchStatsMovie(false);
      }
    }
  }, []);
  

  return (
    <>
      <Descriptions title={`Title: ${listMovie.title || listGame.name}`} layout="vertical">
        <Descriptions.Item ><Image width={250} src={listMovie.image_url || listGame.image_url} /></Descriptions.Item>
        <Descriptions.Item label="Description">{listMovie.description || listGame.platform}</Descriptions.Item>
        <Descriptions.Item label="Year"><Tag>{listMovie.year || listGame.release}</Tag></Descriptions.Item>
        <Descriptions.Item label="Duration"><ClockCircleOutlined /> {listMovie.duration} Minutes</Descriptions.Item>
        <Descriptions.Item label="Genre" ><Tag>{listMovie.genre || listGame.genre}</Tag></Descriptions.Item>
        <Descriptions.Item label="Rating">{listMovie.rating} / 10</Descriptions.Item>
      </Descriptions>



      <Link to="/">Go Home</Link>
    </>
  );
};
