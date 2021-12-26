import React, { useEffect, useState } from "react";
import { Table, Space, Image, Tag } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const ListGame = () => {
  let history = useHistory();
  const [listGame, setlistGame] = useState([]);
  const [fetchStatsGame, setfetchStatsGame] = useState(true);

  const [inputSearch, setInputSearch] = useState("");
  const [inputFilter, setInputfilter] = useState({
    release: "",
    genre:""
  });

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

  const handleEdit = (event) => {
    let idGameList = parseInt(event.currentTarget.value);
    history.push(`/list-game/edit/${idGameList}`);
  };

  const handleChange = (e) => {
    let { value } = e.target;

    setInputSearch(value);
  };

  const handleSearch = (search) => {
    search.preventDefault();

    const getGame = async () => {
      try {
        let resultGame = await axios.get(
          "https://backendexample.sanbersy.com/api/data-game"
        );
        let { data } = resultGame;

        let dataFilter = data.filter((search) => {
          return Object.values(search)
            .join(" ")
            .toLowerCase()
            .includes(inputSearch.toLowerCase());
        });

        setlistGame(
          dataFilter.map((dataGame) => {
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
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
    setInputSearch("");
  };

  // const handleFilter = (e) => {
  //   let { value, name } = e.target;

  //   setInputfilter({ ...inputFilter, [name]: value });
  // };

  // const handleFilterData = (filter) => {
  //   filter.preventDefault();
  //   let { release} = inputFilter;
  //   const getGame = async () => {
  //     try {
  //       let resultGame = await axios.get(
  //         "https://backendexample.sanbersy.com/api/data-game"
  //       );
  //       let { data } = resultGame;
  //       if (release === "" && "") {
  //         setlistGame(
  //           data.map((dataGame) => {
  //             let {
  //               id,
  //               genre,
  //               image_url,
  //               singlePlayer,
  //               multiplayer,
  //               name,
  //               platform,
  //               release,
  //             } = dataGame;

  //             return {
  //               id,
  //               genre,
  //               image_url,
  //               singlePlayer,
  //               multiplayer,
  //               name,
  //               platform,
  //               release,
  //             };
  //           })
  //         );
  //       } else {
  //         let dataFilter = data.filter((e) => {
  //           return( e.release === parseInt(release))
  //         });
  //         setlistGame(
  //           dataFilter.map((dataGame) => {
  //             let {
  //               id,
  //               genre,
  //               image_url,
  //               singlePlayer,
  //               multiplayer,
  //               name,
  //               platform,
  //               release,
  //             } = dataGame;

  //             return {
  //               id,
  //               genre,
  //               image_url,
  //               singlePlayer,
  //               multiplayer,
  //               name,
  //               platform,
  //               release,
  //             };
  //           })
  //         );
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getGame();
  //   setInputfilter({
  //     release: "",
  //     genre:""
  //   });
  // };

  const columns = [
    {
      title: "Image",
      dataIndex: "image_url",
      key: "image_url",
      render: (img) => <Image width={75} src={img} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      sorter: (a, b) => a.genre - b.genre,
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
      sorter: (a, b) => a.platform - b.platform,
      render: (platform) => {
        const tags = platform.split(",");
        return (
          <>
            {tags.map((tag) => (
              <Tag style={{ margin: "5px" }} color="red" key={tag}>
                {tag.toUpperCase()}
              </Tag>
            ))}
          </>
        );
      },
    },
    {
      title: "Release",
      dataIndex: "release",
      key: "release",
      sorter: (a, b) => a.release - b.release,
    },
    {
      title: "Single player",
      dataIndex: "singlePlayer",
      key: "singlePlayer",
      sorter: (a, b) => a.singlePlayer - b.singlePlayer,
      render: (single) => {
        return single == 1 ? "1 player" : "false";
      },
    },
    {
      title: "Multi Player",
      dataIndex: "multiplayer",
      key: "multiplayer",
      sorter: (a, b) => a.multiplayer - b.multiplayer,
      render: (multi) => {
        return multi == 1 ? "up to 2+ player" : "-";
      },
    },

    {
      title: "Action",
      key: "action",
      render: (e) => (
        <Space>
          <button
            style={{ backgroundColor: "#d9d9d9", cursor: "pointer" }}
            value={e.id}
            onClick={handleEdit}
          >
            <EditOutlined />
          </button>
          <button
            style={{ backgroundColor: "#ff9696", cursor: "pointer" }}
            value={e.id}
            onClick={handleEdit}
          >
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];

  const data = listGame;

  return (
    <>
      {/* <form onSubmit={handleFilterData}>
        <input
          onChange={handleFilter}
          value={inputFilter.release}
          type="text"
          name="release"
        />
        <input type="submit" value="Filter" />
      </form>
      <button
        onClick={() => {
          setfetchStatsGame(true);
        }}
      >
        Reset Filter
      </button> */}

      <form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={inputSearch}
          type="text"
          name="name"
        />
        <input type="submit" value="Search" />
      </form>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </>
  );
};
