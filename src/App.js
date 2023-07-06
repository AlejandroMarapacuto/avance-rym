import Cards from "./components/component Cards/Cards";
import { useState, useEffect } from "react";
import { MainDiv } from "./styledComponents";
import Nav from "./components/component Nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/view About/About";
import Detail from "./components/component Detail/Detail";
import Form from "./components/component Form/Form";
import Favorites from "./components/component Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const email = "ale.jacobmp@gmail.com";
  const password = "reptile1912199014r";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch((err) => window.alert("No characters with this ID!"));
  };

  const onClose = (id) => {
    const array1 = characters.filter((element) => element.id !== id);
    setCharacters(array1);
  };
  const location = useLocation();

  return (
    <MainDiv>
      {location.pathname !== "/" && <Nav onSearch={onSearch}></Nav>}
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MainDiv>
  );
}

export default App;
