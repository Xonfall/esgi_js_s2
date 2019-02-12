const Movie = require('./models/movie');

const movie1 = new Movie();
movie1.title = "Test movie";
movie1.year = 1900;
movie1.released = Date.now();

movie1.save(function (error, result) {
    console.log('save');
    console.log(error);
    console.log(result)
});

const fetchMovies = Movie.find({title: 'Wild Wild West'}, function (error, result) {
    console.log('find');
    console.log(result);
    console.log(error);
});