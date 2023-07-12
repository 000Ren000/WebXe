import React, {useState} from 'react';
import '../components/Form/Form.css'
import {Popup} from '../components/Popup/Popup';
import {Foods} from '../utils/utils';


export const PageCalcProduct = () => {
  const [form, setForm] = useState({
    carbohydrates: '73.8', // Угливоды
    dryWeight: '', // Вес сухого продукта
    finishedProductWeight: '' // Вес готового продукта
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
  const changeInputValue = (e, valueInInput) => {
    e.preventDefault();
    const input = e.target.parentElement.parentElement.querySelector('.form__input');
    input.value = valueInInput;
    setForm({ ...form, dryWeight: valueInInput });
  }
  const changeSelectValue = (e) => {
    const carbohydrates = e.target.parentElement.parentElement.querySelector('#carbohydrates');
    carbohydrates.value = e.target.value;
    setForm({ ...form, carbohydrates: carbohydrates.value });
  }
  const handleSubmit = (e, edIns) => {

    const { carbohydrates, dryWeight, finishedProductWeight } = form;
    const xe = carbohydrates / 100 * dryWeight / 12;
    const result = Math.round(finishedProductWeight / xe * edIns / 1.5);
    console.log(xe);
    setIns(result)
    if (e !== null) {
      e.preventDefault();
      e
        .target
        .querySelectorAll('.form__input')
        .forEach(item => item.value = '');
      setPopupOpened(true);
    }
  }

  return <>
    <form className="form">
      <div className="form__input-conteiner">
        <input
          type="text"
          className="form__input"
          placeholder="Вес сухого продукта"
          name="dryWeight"
          onChange={changeForm}
        />
        <div className="form__button-container">
          <button className="form__button_mini" onClick={(e) => changeInputValue(e, 200)}>200</button>
          <button className="form__button_mini" onClick={(e) => changeInputValue(e, 300)}>300</button>
          <button className="form__button_mini" onClick={(e) => changeInputValue(e, 400)}>400</button>
        </div>
        <input
          id="weight"
          type="text"
          className="form__input"
          placeholder="Вес готового продукта"
          name="finishedProductWeight"
          onChange={changeForm}
        />
        <div className="form__input_m">
        <input
          id="carbohydrates"
          type="text"
          className="form__input"
          placeholder="Углеводы в 100г"
          onChange={changeForm}
          name="carbohydrates"
          value={form.carbohydrates}
        />
        <select id="foodsList" className="form__list" onChangeCapture={changeSelectValue}>
          {
            Foods.map((food, id) => (
                <option key={id} value={food.carbohydrates}>{food.name}</option>
              )
            )
          }
        </select>
        </div>

        <div className="form__button-container_m">
          <input type="submit" className="form__button_mini" value="2 ед" onClick={(e) => handleSubmit(e, 1)}/>
          <input type="submit" className="form__button_mini" value="3 ед" onClick={(e) => handleSubmit(e, 2)}/>
          <input type="submit" className="form__button_mini" value="4 ед" onClick={(e) => handleSubmit(e, 3)}/>
          <input type="submit" className="form__button_mini" value="5 ед" onClick={(e) => handleSubmit(e, 4)}/>
        </div>
      </div>
      <span className="form__result">{ins} гр</span>


    </form>
    <Popup ins={ins} opened={popupOpened} handleClose={closePopup}/>
  </>
}
