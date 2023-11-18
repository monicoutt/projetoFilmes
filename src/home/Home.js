import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";

export default function Home() {

    const [movies, setMovies] = useState([]) /* */

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=677460a1d2286d10f9322818a0a995c8&language=pt-BR&page=5`) /* fetch determina da onde vai retirar a API*/
        .then(response => response.json())
        .then(data => {
            setMovies(data.results) /* data= todos os itens; results= uma listagem específica */
        })
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
                                <a href="#">
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
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