import {fetchWithTimeout, fetchMovies, fetchBooks} from './services';

function getBooksAndMovies(){
    return Promise.all([fetchBooks(), fetchMovies()])
                  .then(([books, movies]) => ({
                        books,
                        movies
                  }))
                  .catch(error => console.log("Error fetching books and movies", error));
};

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(function resolve(results){
    console.log('getBooksAndMoviesPromise', results);
});

function getBooksOrMovies(){
    return Promise.race([fetchBooks(), fetchMovies()])
                  .then(results => results)
                  .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(function resolve(results){
    console.log('getBooksOrMoviesPromise', results);
});