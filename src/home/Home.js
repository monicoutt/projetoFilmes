import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";

export default function Home() {

    const [movies, setMovies] = useState([]) /* */



    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=677460a1d2286d10f9322818a0a995c8&language=en-US&page=1`) /* fetch determina da onde vai retirar a API*/

    }, [])

    /*const movies = [
        {
            title: "Sobrenatural",
            Image_url: "https://upload.wikimedia.org/wikipedia/pt/4/43/Supernatural-Temporada7_%28Blu-ray%29.jpg"
        },

        {
            title: "Sobrenatural 2",
            Image_url: "https://upload.wikimedia.org/wikipedia/pt/4/43/Supernatural-Temporada7_%28Blu-ray%29.jpg"
        },

        {
            title: "Sobrenatural 3",
            Image_url: "https://upload.wikimedia.org/wikipedia/pt/4/43/Supernatural-Temporada7_%28Blu-ray%29.jpg"
        }
    ]*/






    return (
        <Container>
            <h2>Catálogo</h2>
            <MovieList> 

                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://www.google.com">
                                    <img src={movie.Image_url} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }

            </MovieList>
        </Container>
    )
}       