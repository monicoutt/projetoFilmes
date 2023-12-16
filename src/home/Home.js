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


    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://s2-techtudo.glbimg.com/PHWR4IpnXdwfzsE1Pnpx4a-I1Rg=/0x0:1152x642/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Q/B/jsII7RTcinvxCpSjcrRg/divulgacao-warner-bros.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://s2-techtudo.glbimg.com/PHWR4IpnXdwfzsE1Pnpx4a-I1Rg=/0x0:1152x642/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Q/B/jsII7RTcinvxCpSjcrRg/divulgacao-warner-bros.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s2-techtudo.glbimg.com/PHWR4IpnXdwfzsE1Pnpx4a-I1Rg=/0x0:1152x642/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Q/B/jsII7RTcinvxCpSjcrRg/divulgacao-warner-bros.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    


            <Container>

                <MovieList>

                    {
                        movies.map(movie => {
                            return (
                                <Movie key={movie.id}>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                    </Link>
                                    <span>{movie.title}</span>
                                </Movie>
                            )
                        })
                    }

                </MovieList>
            </Container>
        </div>
    )
}       