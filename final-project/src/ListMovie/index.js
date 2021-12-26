import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Table, Space, Image, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export const ListMovie = () => {
  let history = useHistory();
  const [listMovie, setlistMovie] = useState([]);
  const [fetchStatsMovie, setfetchStatsMovie] = useState(true);


  const [inputMovie, setInputMovie] = useState({
    description: "",
    duration: "",
    genre: "",
    image_url: "",
    rating: "",
    review: "",
    title: "",
    year: "",
})
  const [currentId, setCurrentId] = useState(-1)


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

      setlistMovie(
        resultMovie.data.map((dataMovie) => {
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
  }, [fetchStatsMovie, setfetchStatsMovie]);
  
  const handleDelete = (e) => {
    let dataId = parseInt(e.target.value)
    axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${dataId}`)
    .then((e) => {
      setfetchStatsMovie(true)
    })
    setCurrentId(-1)
}


  const handleEdit = (event) => {
    let idMovieList = parseInt(event.currentTarget.value);
    history.push(`/list-movie/edit/${idMovieList}`);
    axios.get(
      `https://backendexample.sanbersy.com/api/data-movie/${idMovieList}`
    ).then((res) =>{
      let data = res.data
      setInputMovie(data)
      setCurrentId(data.id)
    })
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
          return text.slice(0, 50) + "...";
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
            onClick={handleDelete}
          >
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];

  const data = listMovie;

  const handleChangeSearch = (e) => {
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
      <form onSubmit={handleFilterData}>
        <input
          onChange={handleFilter}
          value={inputFilter.rating}
          type="text"
          name="rating"
        />
        <input
          onChange={handleFilter}
          value={inputFilter.year}
          type="text"
          name="year"
        />
        <input
          onChange={handleFilter}
          value={inputFilter.duration}
          type="text"
          name="duration"
        />
        <input type="submit" value="Filter" />
      </form>
      <button
        onClick={() => {
          setfetchStatsMovie(true);
        }}
      >
        Reset Filter
      </button>

      <form onSubmit={handleSearch}>
        <input
          onChange={handleChangeSearch}
          value={inputSearch}
          type="text"
          name="title"
        />
        <input type="submit" value="Search" />
      </form>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </>
  );
};
