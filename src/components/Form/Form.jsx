import './Form.css'
import Union from '../../images/Union.svg';
let ins = 0;
export const Form = (props) => (
  <>
  <form className="form">
    <div className="form__input-conteiner">
      <input
        type="number"
        className="form__input"
        placeholder="Угливодов на 100г"
        name="Carbohydrates"
      />
      <input
        type="number"
        className="form__input"
        placeholder="Вес продукта"
        name="Weight"
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
    </>
)
