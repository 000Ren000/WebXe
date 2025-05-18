export const Foods = [
  {
    name: 'Грека',
    carbohydrates: 73.8,
  },
  {
    name: 'Перловка',
    carbohydrates: 65.95,
  },
  {
    name: 'Бурый рис',
    carbohydrates: 69.65,
  },
  {
    name: 'Макароны',
    carbohydrates: 70.4,
  },
];

export const getFoodsLocal = () => {
  if (window) {
    return JSON.parse(localStorage.getItem('Foods') || []);
  } else {
    return Foods;
  }
};

export const setFoodsLocal = (products) => {
  if (window) localStorage.setItem('Foods', JSON.stringify(products));
};

export const getProducts = (setFoods) => {
  //  fetch('https://food-api-8cgu.onrender.com/getall')
  // fetch('http://localhost:5877/getall')
  fetch('https://food-api-8cgu.onrender.com/getall')
    .then((resp) => {
      resp.json().then((data) => {
        setFoods(data.foods);
        setFoodsLocal(data.foods);
      });
    })
    .catch((e) => {
      console.log('Ошибка получения продуктов:', e);
    });
};

export const addProduct = (productData = {}, changeElement) => {
  //  fetch('https://food-api-8cgu.onrender.com/create');
  // fetch('http://localhost:5877/create', {
  fetch('https://food-api-8cgu.onrender.com/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
    .then((resp) => {
      resp.json().then((data) => {
        changeElement(data.food.name);
      });
    })
    .catch((e) => {
      console.log('Ошибка при добавлении продукта:', e);
    });
};
