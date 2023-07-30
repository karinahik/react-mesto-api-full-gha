import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import buttonClose from "../images/Trash.svg";
import cardLike from "../images/Group.svg";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = props.card.likes.some((user) => user === currentUser._id);
  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;
  
  const isOwner = (props.card.owner?._id || props.card.owner) === currentUser._id
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
    props.onConfirmationPopup(true);
  }

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      {isOwner && (
        <button className="card__delete" type="button">
          <img
            className="card__delete-img"
            src={buttonClose}
            alt="Удалить"
            onClick={handleDeleteClick}
          />
        </button>
      )}
      <img
        className="card__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="card__group">
        <div className="card__description">
          <h2 className="card__text">{props.card.name}</h2>
          <div className="card__container-like">
            <button
              className={likeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            >
              <img className="card__like" src={cardLike} alt="Изображение" />
            </button>
            <p className="card__count-like">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
