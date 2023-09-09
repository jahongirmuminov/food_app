import React, { useState } from 'react';
import { data } from '../data/data';
const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterCategory = (category) => {
    setFoods(
      data.filter((item) => {
        if (category !== '') {
          return item.category === category;
        } else {
          return item;
        }
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      <div className='flex flex-col lg:flex-col justify-between'>
        <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
          <button
            onClick={() => filterCategory('')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            All
          </button>
          <button
            onClick={() => filterCategory('burger')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            Burgers
          </button>
          <button
            onClick={() => filterCategory('pizza')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            Pizza
          </button>
          <button
            onClick={() => filterCategory('salad')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            Salads
          </button>
          <button
            onClick={() => filterCategory('chicken')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            Chicken
          </button>
        </div>
      </div>

      <div>
        <p className='font-bold text-gray-700'>Filter Price</p>

        <div className='flex  justify-between max-w-[390px] w-full'>
          <button
            onClick={() => filterPrice('$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            $
          </button>
          <button
            onClick={() => filterPrice('$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            $$
          </button>
          <button
            onClick={() => filterPrice('$$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            $$$
          </button>
          <button
            onClick={() => filterPrice('$$$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
          >
            $$$$
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
        {foods.map((food, index) => (
          <div
            key={index}
            className='border shadow-sm  hover:scale-105 duration-300'
          >
            <img
              src={food.image}
              alt={food.nam}
              className='w-full h-[200px] object-cover rounded-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{food.name}</p>
              <p className='bg-orange-600 text-white  rounded-full p-1'>
                {food.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
