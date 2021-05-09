import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

function AddMovie() {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');

   const [movies, setMovies] = useContext(MovieContext);

   const updateName = (e) => {
      setName(e.target.value);
   };

   const updatePrice = (e) => {
      setPrice(e.target.value);
   };

   const addMovie = (e) => {
      e.preventDefault();
      setMovies((prevMovies) => [
         ...prevMovies,
         { name: name, price: price, id: new Date().getTime().toString() },
      ]);
   };

   return (
      <form className='movieForm' onSubmit={addMovie}>
         <input type='text' name='name' value={name} onChange={updateName} />
         <input type='text' name='price' value={price} onChange={updatePrice} />
         <button className='btn'>submit</button>
      </form>
   );
}

export default AddMovie;
