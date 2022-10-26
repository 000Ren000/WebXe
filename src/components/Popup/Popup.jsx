import './Popup.css';
import React from 'react';

export const Popup = ({ ins, opened, handleClose }) => {
  return (
    <div className={ `popup ${ opened ? 'popup__opened' : ''}`}>
      <form className="popup__form" onSubmit={handleClose}>
        <button className="popup__btn-close" onClick={handleClose}/>
        <h1 className="popup__title">Результат:</h1>
        <p className="popup__text">{ins}</p>
        <input type="submit" className="popup__btn-accept" value="Закрыть"/>
      </form>
    </div>
  )
};
