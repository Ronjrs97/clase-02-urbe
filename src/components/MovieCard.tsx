import type { Movie } from '../interfaces/movie.interface';

interface CardMovieProp{
    movie: Movie
}

const MovieCard = ({movie} : CardMovieProp ) => {
  return (
    <div className="card bg-base-300  shadow-xl movie-card group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="relative">
        <img
        src={`${movie.posterImg}`}
        className="w-full h-96 object-cover"
        />

    
        <div className="absolute top-2 right-2">
        <span className="badge badge-soft badge-primary">
            {movie.rating }
            {/* {{ movie().rating | number:'1.1-1'}}/10 */}
        </span>
        </div>
    </div>

    {/* <!-- Información de la película --> */}
    <div className="p-4">
        {/* <!-- Título de la película --> */}
        <h3 className="font-semibold text-primary text-lg mb-2 truncate">{movie.name}</h3>

        {/* <!-- Contenedor de géneros --> */}
        <div className="flex flex-wrap gap-2">
        {/* <!-- Itera sobre los géneros de la película -->
        <!-- @for (genre of getGenres(movie().genres); track genre.id) { */}
            <span className="badge badge-soft badge-primary">{movie.genres}</span>
        {/* } --> */}
        </div>

    </div>
    </div>
  )
}

export default MovieCard
