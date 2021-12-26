import { message } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom";

export const FormGame = () => {
  let history = useHistory();
  const [listGame, setlistGame] = useState([]);
  const [fetchStatsGame, setfetchStatsGame] = useState(true);
  const [currentId, setCurrentId] = useState(-1)
  const [input, setInput] = useState({
    genre: '',
    image_url: '',
    singlePlayer: '',
    multiplayer: '',
    name: '',
    platform: '',
    release: '',
  });

  let { value } = useParams();

  useEffect(() => {
    if (value !== undefined) {
      fetchById(value);
    }
  }, []);

  const fetchById = async (idMahasiswa) => {
    let res = await axios.get(
      `https://backendexample.sanbersy.com/api/data-game/${idMahasiswa}`
    );
    let data = res.data;
    setInput({
        genre:data.genre,
        image_url:data.image_url,
        singlePlayer:data.singlePlayer,
        multiplayer:data.multiplayer,
        name:data.name,
        platform:data.platform,
        release:data.release,
    });
    setCurrentId(data.id);
  };

  const functionSubmit = () => {
    axios
      .post(`https://backendexample.sanbersy.com/api/data-game`, {
        genre:input.genre,
        image_url:input.image_url,
        singlePlayer:input.singlePlayer,
        multiplayer:input.multiplayer,
        name:input.name,
        platform:input.platform,
        release:input.release,
      })
      .then((res) => {
        let data = res.data;
        setlistGame([
          ...listGame,
          {
            genre:data.genre,
            image_url:data.image_url,
            singlePlayer:data.singlePlayer,
            multiplayer:data.multiplayer,
            name:data.name,
            platform:data.platform,
            release:data.release,
          },
        ]);
        history.push("/dashboard");
        message.success("Berhasil menambahkan data");
      });
  };

  const functionUpdate = (currentId) => {
    axios.put(`https://backendexample.sanbersy.com/api/data-Game/${currentId}`, {
        genre:input.genre,
        image_url:input.image_url,
        singlePlayer:input.singlePlayer,
        multiplayer:input.multiplayer,
        name:input.name,
        platform:input.platform,
        release:input.release,
    }).then(() => {
        let newData = listGame.find((e) => e.id === currentId)
        newData.genre = input.genre
        newData.image_url = input.image_url
        newData.singlePlayer = input.singlePlayer
        newData.multiplayer = input.multiplayer
        newData.name = input.name
        newData.platform = input.platform
        newData.release = input.release
        setlistGame([...listGame])
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
        genre: '',
        image_url: '',
        singlePlayer: '',
        multiplayer: '',
        name: '',
        platform: '',
        release: '',
    });
    setCurrentId(-1);
  };

  return (
    <div className="list">
      <h1>Add Game</h1>
      <form method="post" onSubmit={handleSubmit} className="form-input">
        <label>Nama</label>
        <input
          value={input.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Masukan.."
          required
        />

        <label>Genre</label>
        <input
          value={input.genre}
          onChange={handleChange}
          type="text"
          name="genre"
          placeholder="Masukan.."
          required
        />

        <label>Release</label>
        <input
          value={input.release}
          onChange={handleChange}
          min={0}
          max={100}
          type="text"
          name="release"
          placeholder="Masukan.."
          required
        />

        <input type="submit" />
      </form>
      <Link to="/list-Game">
        <button className="btn-back">Kembali</button>
      </Link>
    </div>
  );
};
