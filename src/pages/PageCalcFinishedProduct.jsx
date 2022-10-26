import React, {useEffect, useState} from 'react';
import '../components/Form/Form.css'
import {Popup} from '../components/Popup/Popup';
import Union from '../images/Union.svg';
export const PageCalcFinishedProduct = () => {
  const [form, setForm] = useState({
    Carbohydrates: '',
    Weight: ''
  });
  const [ins, setIns] = useState(0);
  const [popupOpened, setPopupOpened] = useState(false);
  const closePopup = (e) => {
    e.preventDefault();
    setPopupOpened(false);
  }
  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e = null) => {

    const {Carbohydrates, Weight} = form;
    const xe = Carbohydrates / 100 * Weight / 12;
    setIns(Math.round(xe * 1.5 *100)/ 100);
    if (e !== null) {
      e.preventDefault();
      e
        .target
        .querySelectorAll('.form__input')
        .forEach( item => item.value = '');
      setPopupOpened(true)
    }
  }
  useEffect(() => {
  handleSubmit();
}, [form])

  return <>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-conteiner">
        <input
          type="number"
          className="form__input"
          placeholder="Угливодов на 100г"
          name="Carbohydrates"
          onChange={changeForm}
        />
        <input
          type="number"
          className="form__input"
          placeholder="Вес продукта"
          name="Weight"
          onChange={changeForm}
        />
        <input type="submit" className="form__button" value="Расчитать"/>
      </div>
      <span className="form__result">{ins} ед</span>
      <div
        className="form__image-bottom"
        style={{
          backgroundImage: `url(${Union})`
        }}
      />
    </form>
    <Popup ins={ins} opened={popupOpened} handleClose={closePopup}/>
  </>
}
