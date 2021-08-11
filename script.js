const numberOfFilm = prompt('Сколько фильмов вы поссмотрели,');
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из просмотренных фмльмов:'),
    b = prompt('На сколько оцениваете его?'),
    c = prompt('Один из просмотренных фмльмов:'),
    d = prompt('На сколько оцениваете его?');

personalMovieDB.count = +numberOfFilm;
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);