import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { APIKEY } from "../config/key";
import { Container } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';

function Details() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'
    const trailer_path = "https://youtube.com/embed/"

    const { id } = useParams();
    
    console.log(id);

    const [movie, setMovie] = useState([]);

    const [trailer, setTrailer] = useState([]); // nome definido por trailer e quando ela é atualizada = setTrailer

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

            setMovie(movie) 
        })
    }, [id])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=pt-BR&page=1`) // fetch determina da onde vai retirar a API
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0])

            if (data.results.length > 0) {  // data= pegar todos os dados; results= a lista; length= "comprimento" da lista, (se for maior que 0 executa "trailer")

            const trailer = {
                name: data.results[0].name,
                key: `${trailer_path}${data.results[0].key}`,
            }

            setTrailer(trailer) 
        }
        })
    }, [id])

    return (
       
        <Container>

        <div className="header">
            <h1>NETFLIX</h1>
        </div>

        <Link to="/"> <button> <FontAwesomeIcon icon={faReplyAll} style={{color: "#ac0c0c", width: 70, height: 30}} /> </button> </Link>

        <div className="details">

            <img src={movie.poster_path} alt={movie.title}/>

            <div className="info">
                <h1 > {movie.title} </h1>
                <span className="sinopse">Sinopse: {movie.overview} </span>
                <span className="release"> Data de Lançamento: {movie.releaseDate} </span>

                <span>Avaliação:{movie.vote_average}</span>
                <span>Quantidade de Votos: {movie.vote_count}</span>

            </div>

        </div>

        <div className="trailer">
            <iframe width="790" height="415" src={trailer.key} title={trailer.name} class="embed hide" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture" /> 
        </div>

        </Container>
    )
}

export default Details;