import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, Rate, Divider } from "antd";

const { Meta } = Card;

export const Home = () => {
  const [listMovie, setlistMovie] = useState([]);
  const [fetchStatsMovie, setfetchStatsMovie] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      let resultMovie = await axios.get(
        "https://backendexample.sanbersy.com/api/data-movie"
      );
      let { data } = resultMovie;

      setlistMovie(
        data.map((dataMovie) => {
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
          } = dataMovie;

          return {
            description,
            duration,
            genre,
            id,
            image_url,
            rating,
            review,
            title,
            year,
          };
        })
      );
    };

    if (fetchStatsMovie) {
      getMovie();
      setfetchStatsMovie(false);
    }
  }, [listMovie, setlistMovie, fetchStatsMovie, setfetchStatsMovie]);

  const [listGame, setlistGame] = useState([]);
  const [fetchStatsGame, setfetchStatsGame] = useState(true);

  useEffect(() => {
    const getGame = async () => {
      let resultGame = await axios.get(
        "https://backendexample.sanbersy.com/api/data-game"
      );
      let { data } = resultGame;

      setlistGame(
        data.map((dataGame) => {
          let {
            id,
            genre,
            image_url,
            singlePlayer,
            multiplayer,
            name,
            platform,
            release,
          } = dataGame;

          return {
            id,
            genre,
            image_url,
            singlePlayer,
            multiplayer,
            name,
            platform,
            release,
          };
        })
      );
    };

    if (fetchStatsGame) {
      getGame();
      setfetchStatsGame(false);
    }
  }, [listGame, setlistGame, fetchStatsGame, setfetchStatsGame]);

  const viewMore = (text) => {
    if (text === undefined) {
      return " ";
    } else {
      return text?.slice(0, 100) + "...";
    }
  };

  return (
    <>
      <div className="movie-container">
      
        {listMovie !== null && (
          <> 
          <Divider>Movie</Divider>
            {listMovie.map((e) => {
              return (
                <div key={e.id}>
                  <Link to={`/detail/${e.id}`}>
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={<img alt={e.title} src={e.image_url} />}
                    >
                      <Rate
                        style={{ margin: "10px" }}
                        disabled
                        allowHalf
                        defaultValue={e.rating / 2}
                      />{" "}
                      {e.rating}/10
                      <Meta
                        style={{ textAlign: "justify" }}
                        title={e.title}
                        description={viewMore(e.description)}
                      />
                    </Card>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="game-container">
        {listGame !== null && (
          <>
          <Divider>Game</Divider>
            {listGame.map((e) => {
              return (
                <div key={e.id}>
                  <Link to={`/detail/${e.id}`}>
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={<img alt={e.name} src={e.image_url} />}
                    >
                      <p>{e.release}</p>
                      <Meta
                        style={{ textAlign: "justify" }}
                        title={e.name}
                        description={e.platform}
                      />
                    </Card>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
