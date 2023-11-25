import { APIKEY } from "../config/key";
import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [movies, setMovies] = useState([]) 

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`) /* fetch determina da onde vai retirar a API*/
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
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
            <h2>Catálogo
            <div className="retangulo"></div>
            <h3 className="title"> Filmes populares </h3>
            </h2>

            
            <MovieList> 

                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                                <Link to = {`/details/${movie.id}`}>
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }

            </MovieList>
        </Container>
    )
}       