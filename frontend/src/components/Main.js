import React from "react"
import editPen from "../images/Editpen.svg"
import buttonEdit from "../images/Edit.svg"
import profileButton from "../images/plus.svg"
import Card from "./Card"
import Loader from "./Loader"

import CurrentUserContext from "../contexts/CurrentUserContext"

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="main">
      {props.isLoading && <Loader />}

      <section
        className={`profile ${props.isLoading && "page__profile_hidden"}`}
      >
        <div className="profile__cover">
          <div className="profile__wrapper-relative">
            <img
              className="profile__avatar-photo"
              src={currentUser.avatar}
              alt="аватарка"
            />
            <button
              className="profile__edit-avatar"
              type="button"
              onClick={() => {
                props.onEditAvatar(true)
              }}
            >
              <img
                className="profile__edit-pen"
                src={editPen}
                alt="изображение письменной ручки"
              />
            </button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__position">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={() => {
                props.onEditProfile(true)
              }}
            >
              <img
                src={buttonEdit}
                alt="кнопка"
                className="profile__button-image"
              />
            </button>
          </div>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-plus"
          type="button"
          onClick={() => {
            props.onAddPlace(true)
          }}
        >
          <img className="profile__button-img" src={profileButton} alt="Плюс" />
        </button>
      </section>
      <section className="cards">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardDelete={props.onDeletedCard}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onConfirmationPopup={props.onConfirmationPopup}
          />
        ))}
      </section>
    </main>
  )
}

export default Main
