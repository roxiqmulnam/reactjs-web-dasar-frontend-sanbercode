import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Table, Space, Image, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export const ListMovie = () => {
  let history = useHistory();
  const [listMovie, setlistMovie] = useState([]);
  const [fetchStatsMovie, setfetchStatsMovie] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [inputFilter, setInputfilter] = useState({
    rating: "",
    duration: "",
    year: "",
  });

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

  const handleEdit = (event) => {
    let idMovieList = parseInt(event.currentTarget.value);
    history.push(`/list-movie/edit/${idMovieList}`);

  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image_url",
      key: "image_url",
      render: (img) => <Image width={75} src={img} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        if (text === undefined) {
          return " ";
        } else {
          return text?.slice(0, 50) + "...";
        }
      },
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      sorter: (a, b) => a.duration - b.duration,
      render: (minutes) => (
        <>
          <ClockCircleOutlined /> {minutes} min
        </>
      ),
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      render: (genre) => {
        const tags = genre.split(",");
        return (
          <>
            {tags.map((tag) => (
              <Tag style={{margin: "5px"}} color="blue" key={tag}>
                {tag.toUpperCase()}
              </Tag>
            ))}
          </>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      sorter: (a, b) => a.rating - b.rating,
      render: (rate) => <>{rate}/10</>,
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
      sorter: (a, b) => a.review - b.review,
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

  const data = listMovie;

  const handleChange = (e) => {
    let { value } = e.target;

    setInputSearch(value);
  };

  const handleSearch = (search) => {
    search.preventDefault();

    const getMovie = async () => {
      try {
        let resultMovie = await axios.get(
          "https://backendexample.sanbersy.com/api/data-movie"
        );
        let { data } = resultMovie;

        let dataFilter = data.filter((search) => {
          return Object.values(search)
            .join(" ")
            .toLowerCase()
            .includes(inputSearch.toLowerCase());
        });

        setlistMovie(
          dataFilter.map((dataMovie) => {
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
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
    setInputSearch("");
  };

  const handleFilter = (e) => {
    let { value, name } = e.target;

    setInputfilter({ ...inputFilter, [name]: value });
  };

  const handleFilterData = (filter) => {
    filter.preventDefault();
    let {rating, year, duration} = inputFilter
    const getMovie = async () => {
      try {
        let resultMovie = await axios.get(
          "https://backendexample.sanbersy.com/api/data-movie"
        );
        let { data } = resultMovie;
        if (rating === "" && year === "" && duration === "") {
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
        } else {
          let dataFilter = data.filter((e) =>{
            return (
            e.rating === parseInt(rating) ||
            e.year === parseInt(year) ||
            e.duration === parseInt(duration)
            )
          })
          setlistMovie(dataFilter.map((dataMovie) =>{
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
          }))
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
    setInputfilter({
      rating: "",
      year: "",
      duration:""
    });
  };

  return (
    <>
      <form className="form-filter" onSubmit={handleFilterData}>
        <input className="input-filter"
          onChange={handleFilter}
          value={inputFilter.rating}
          type="text"
          name="rating"
          placeholder="rating..."
        />
        <input
          onChange={handleFilter}
          value={inputFilter.year}
          type="text"
          name="year"
          placeholder="year..."
        />
        <input
          onChange={handleFilter}
          value={inputFilter.duration}
          type="text"
          name="duration"
          placeholder="duration..."
        />
        <input type="submit" value="Filter" />

      </form>

      <form className="form-search" onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={inputSearch}
          type="text"
          name="title"
          placeholder="search..."
        />
        <input type="submit" value="Search" />
      </form>
      <button style={{marginLeft:10, padding:'0 10px 0 10px', marginBottom: 10}}
        onClick={() => {
          setfetchStatsMovie(true);
        }}
      >
        Reset
      </button>
      <button style={{border:'none', borderRadius:'6px', backgroundColor: '#3db2ff', float:"right", padding:'5px 15px 5px 15px', marginBottom: 10}}
      >
        <Link style={{color:'white'}} to={'/list-movie/create'}><PlusOutlined /> Create New List</Link>
      </button>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </>
  );
};
