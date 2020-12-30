import React, { useEffect, useState } from 'react';
import { PopUp } from './PopUp';

const food = [
  {
    id: '50f918c8-27e8-11eb-adc1-0242ac120002',
    name: 'Lasagna',
    price: '12$',
  },
  {
    id: '57a5f4b6-27e8-11eb-adc1-0242ac120002',
    name: 'Noodles',
    price: '8$',
  },
  {
    id: '5ce5449a-27e8-11eb-adc1-0242ac120002',
    name: 'Chicken Tikka',
    price: '16$',
  },
  {
    id: '61dfe4be-27e8-11eb-adc1-0242ac120002',
    name: 'Soup',
    price: '6$',
  },
];

export const SearchBox = () => {
  const [errors, setErrors] = useState([]);
  const [isError, setIsError] = useState(false);
  const [elements, setElements] = useState([]);
  const [foundFoods, setFoundFoods] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setElements(food);
  }, []);

  const setError = (msg) => {
    return setErrors((prevState) => [...prevState.errors, msg]);
  };

  const clearAllErrors = () => {
    setErrors([]);
  };

  function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  const searchFood = async (keyword) => {
    keyword = escapeRegex(keyword.toLowerCase());
    const pattern = `[A-Za-z.\s]*${keyword}[A-Za-z.\s]*`;
    const matchRegex = new RegExp(pattern);
    const foundFoods = food.filter((item, idx) => {
      console.log('Match: ', matchRegex, pattern, item.name);
      return matchRegex.test(item.name.toLowerCase());
    });
    console.log('Found Foods: ', foundFoods);
    setFoundFoods(foundFoods);
  };

  const onInputChange = (e) => {
    const keyword = e.target.value;
    searchFood(keyword);
  };

  const showPopup = () => {
    setShowResult(true);
  };

  const hidePopup = () => {
    setShowResult(false);
  };

  const onInput = (e) => {
    if (e.target.value !== '') showPopup();
    else hidePopup();
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="title">Type Food Name</div>
        <div className="content">
          <input
            type="text"
            placeholder="Food"
            onChange={onInputChange}
            onInput={onInput}
          />
          <PopUp isOpen={showResult} items={foundFoods} />
        </div>
      </div>
    </div>
  );
};
