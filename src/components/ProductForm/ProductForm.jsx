import { useState } from 'react';
import { addProduct } from '../../utils/utils';

export const ProductForm = ({
  formData,
  setFormData,
  handleClose,
  changeElement,
}) => {
  const changeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='bg-gray-900/30 ring-0 top-0 right-0
    left-0 bottom-0 absolute text-sky-950
    flex flex-col justify-center items-center'
    >
      <div
        className='bg-white rounded-3xl w-4/6 items-center flex flex-col
        pl-8 pr-8 pt-7 pb-15 gap-4'
      >
        <h1 className='w-full text-2xl font-bold mb-1'>Добавление продукта </h1>
        <input
          placeholder='Название'
          className='w-full h-10 border-1 rounded-xl pl-5 pr-5'
          name='name'
          onChange={changeForm}
        />
        <input
          placeholder='Углеводы'
          className='w-full h-10 border-1 rounded-xl pl-5 pr-5'
          name='carbohydrates'
          onChange={changeForm}
        />
        <div className='flex gap-3 mt-3'>
          <button
            onClick={() => {
              addProduct(formData, changeElement);
              handleClose();
            }}
            className='bg-orange-400 hover:border-orange-600 border-1  border-orange-400 rounded-xl p-1 pl-2 pr-2'
          >
            Добавить
          </button>
          <button
            className='hover:border-orange-600  border-1  border-orange-400 rounded-xl p-1 pl-2 pr-2'
            onClick={handleClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
