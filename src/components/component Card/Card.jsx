import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Card({
  key,
  id,
  name,
  gender,
  species,
  image,
  onClose,
  status,
  origin,
}) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const allCharacters = useSelector((state) => state.allCharacters);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(id));
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(
        addFav(key, id, name, gender, species, image, onClose, status, origin)
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, allCharacters]);

  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
        <img className={style.image} src={image} alt="" />
      </Link>
      <h2 className={style.name}>{name}</h2>
      <div className={style.divSG}>
        {isFav ? (
          <button className={style.closeButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.closeButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={style.closeButton} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      {/* <div className={style.divSG}>
        <h2 className={style.species}>{species}</h2>
        <h2 className={style.gender}>{gender}</h2>
      </div> */}
      {/* <h2 className={style.status}>{props.status}</h2> */}
      {/* <h2>{props.origin.name}</h2> */}
    </div>
  );
}
