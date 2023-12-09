import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { APIKEY } from "../config/key";
import { Container } from "./style";

function Details() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    const { id } = useParams();
    
    console.log(id);

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`) // fetch determina da onde vai retirar a API
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const movie = {
                id,
                title: data.title,
                overview: data.overview,
                releaseDate: data.release_date,
                poster_path: `${img_path}${data.poster_path}`,
                vote_average: data.vote_average,
                vote_count: data.vote_count,
            }

            setMovie(movie) // data= todos os itens; results= uma listagem específica
        })
    }, [id])

    return (
       
        <Container>

        <div className="header">
            <h1>NETFLIX</h1>
        </div>

        <div className="details">

            <img src={movie.poster_path} alt={movie.title}/>

            <div className="info">
                <h1> {movie.title} </h1>
                <span className="sinopse">Sinopse: {movie.overview} </span>
                <span className="release"> Data de Lançamento: {movie.releaseDate} </span>

                <span>Avaliação:{movie.vote_average}</span>
                <span>Quantidade de Votos: {movie.vote_count}</span>

                <Link to="/"> <button> Retornar </button> </Link>
            </div>

        </div>

        </Container>
    )
}

export default Details;