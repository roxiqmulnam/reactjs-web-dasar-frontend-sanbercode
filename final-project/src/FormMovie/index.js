import { message } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom";

export const FormMovie = () => {
  let history = useHistory();
  const [listMovie, setlistMovie] = useState([]);
  const [fetchStatsMovie, setfetchStatsMovie] = useState(true);
  const [currentId, setCurrentId] = useState(-1)
  const [input, setInput] = useState({
    description: "",
    duration: "",
    genre: "",
    image_url: "",
    rating: "",
    review: "",
    title: "",
    year: "",
  });

  let { value } = useParams();

  useEffect(() => {
    if (value !== undefined) {
      fetchById(value);
    }
  }, []);

  const fetchById = async (idMahasiswa) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-movie/${idMahasiswa}`
    );
    let data = res.data;
    setInput({
      description: data.description,
      duration: data.duration,
      genre: data.genre,
      image_url: data.image_url,
      rating: data.rating,
      review: data.review,
      title: data.title,
      year: data.year,
    });
    setCurrentId(data.id);
  };

  const functionSubmit = () => {
    axios
      .post(`https://backendexample.sanbersy.com/api/data-movie`, {
        description:input.description,
        duration:input.duration,
        genre:input.genre,
        image_url:input.image_url,
        rating:input.rating,
        review:input.review,
        title:input.title,
        year:input.year,
      })
      .then((res) => {
        let data = res.data;
        setlistMovie([
          ...listMovie,
          {
            description: data.description,
            duration: data.duration,
            genre: data.genre,
            image_url: data.image_url,
            rating: data.rating,
            review: data.review,
            title: data.title,
            year: data.year,
          },
        ]);
        history.push("/dashboard");
        message.success("Berhasil menambahkan data");
      });
  };

  const functionUpdate = (currentId) => {
    axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentId}`, {
        description:input.description,
        duration:input.duration,
        genre:input.genre,
        image_url:input.image_url,
        rating:input.rating,
        review:input.review,
        title:input.title,
        year:input.year,
    }).then(() => {
        let newData = listMovie.find((e) => e.id === currentId)
        newData.description = input.description
        newData.duration = input.duration
        newData.genre = input.genre
        newData.image_url = input.image_url
        newData.rating = input.rating
        newData.review = input.review
        newData.title = input.title
        newData.year = input.year
        setlistMovie([...listMovie])
        history.push(`/dashboard`)
        message.success('Berhasil mengupdate data')
    })
}

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: typeOfValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);

    if (currentId === -1) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }

    setInput({
      description: "",
      duration: "",
      genre: "",
      image_url: "",
      rating: "",
      review: "",
      title: "",
      year: "",
    });
    setCurrentId(-1);
  };

  return (
    <div className="list">
      <h1>Add Movie</h1>
      <form method="post" onSubmit={handleSubmit} className="form-input">
        <label>Nama</label>
        <input
          value={input.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Masukan.."
          required
        />

        <label>Description</label>
        <input
          value={input.description}
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Masukan.."
          required
        />

        <label>year</label>
        <input
          value={input.year}
          onChange={handleChange}
          min={0}
          max={100}
          type="text"
          name="year"
          placeholder="Masukan.."
          required
        />

        <input type="submit" />
      </form>
      <Link to="/list-movie">
        <button className="btn-back">Kembali</button>
      </Link>
    </div>
  );
};
