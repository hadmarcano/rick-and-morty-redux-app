import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Modal";
import { setFavorite, deleteFavorite } from "../actions/index";

const Character = (props) => {
  const [modal, setModal] = useState(false);
  const [favorite, setfavorite] = useState(false);

  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setFavorite(false);
  };

  const isFavorite = () => {
    const result = favoriteCharacters.filter(
      (favoriteCharacter) => favoriteCharacter.data.id === id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
  });

  return (
    <div className="character">
      <img className="character__img" src={image} alt="character" />
      <div className="character__details">
        <h2 className="character__details-name">{name}</h2>
        {favorite ? (
          <SVGStar
            onClick={() => handleDeleteFavorite(id)}
            className="character__details-star favorite"
          />
        ) : (
          <SVGStar
            onClick={() => handleSetFavorite}
            className="character__details-star noFavorite"
          />
        )}
        <p className="character__datails__item">
          <span className="character__details__item-type">Status:</span>{" "}
          {status}
        </p>
        <p className="character__datails__item">
          <span className="character__details__item-type">Species:</span>{" "}
          {species}
        </p>
        <p className="character__datails__item">
          <span className="character__details__item-type">Gender:</span>{" "}
          {gender}
        </p>
        <p onClick={handleOpenModal} className="character__details__item-more">
          Mode datails...
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>
    </div>
  );
};
Character.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = () => {
  return {
    setFavorite,
    deleteFavorite,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
