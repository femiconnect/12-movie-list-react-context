import React from 'react';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
   return (
      <MovieProvider>
         <div className='App'>
            <Nav />
            <AddMovie />
            <MovieList />
         </div>
      </MovieProvider>
   );
}

export default App;

/*
The Nav and MovieList components are 2 independent components and we cannot pass data from one to another. 

Question:
Since both components are independent, how can the Nav component have access to the number of movies in the MovieList component?

Ans:
React context comes in handy here....



*/
