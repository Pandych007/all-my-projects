import React from 'react';
//Эта строка импортирует библиотеку React, которая необходима для написания компонентов React.
import { Link, useParams } from 'react-router-dom';
//Эта строка импортирует компонент Link и хук useParams из пакета 'react-router-dom'. 
//Компонент Link используется для создания ссылок для навигации в приложении, 
//а useParams — это хук, который позволяет получить доступ к параметрам из URL.
import StarRating from './StarRating';
// Эта строка импортирует компонент StarRating из локального файла с именем 'StarRating.js'. 
// Это пользовательский компонент для отображения рейтинга звезд.

const ProductPage = ({ products }) => {
  // Это объявляет функциональный компонент с именем ProductPage,
  //  который принимает объект с свойством products в качестве своих props.
  const { id } = useParams();

  // Эта строка использует хук useParams для извлечения параметра id из URL. 
  // Этот id используется для идентификации товара, который нужно отобразить на этой странице.
  const product = products.find(product => product.id === parseInt(id));
  // Эта строка ищет товар в массиве products, 
  // который имеет тот же id, что и извлеченный из URL.
  // Она преобразует id в целое число с помощью parseInt(), 
  // потому что параметры URL обычно передаются как строки.


  
  

  if (!product) {
    return <div>Loading...</div>;
  }
  // Этот условный блок проверяет, был ли найден товар с заданным id. 
  // Если товар не найден (т.е. product является ложным значением), возвращается 
  // простое сообщение о загрузке, обернутое в div. Это распространенный шаблон, 
  // используемый для асинхронных операций, таких как получение данных.

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <StarRating rating={Math.round(product.rating.rate)} />
      <Link to="/products">Back</Link>
    </div> );
//  Если товар был найден, выполняется этот блок кода. Он возвращает JSX (JavaScript XML), 
// представляющий детали товара. Он отображает заголовок товара, изображение, описание, цену 
// и компонент рейтинга звезд на основе рейтинга товара.
//  Также включается компонент Link для перехода обратно на страницу с товарами.
};
// Эта фигурная скобка закрывает компонент ProductPage.

export default ProductPage;
//Эта строка экспортирует компонент ProductPage как экспорт по умолчанию, 
//делая его доступным для использования в других файлах.