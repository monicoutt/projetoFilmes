import styled from 'styled-components';

export const Container = styled.div`
    h2 {
        text-align: center;
        margin: 4rem 0;
    }


    img {
        width: 180px;
        border-radius: 1rem; // 1rem = 16px
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold; // peso sobre a fonte = negrito
        font-size: 120%;
    }

    a {
        transition: all 0.4s;
    }

    a:hover {
        transform: scale(1.1); // saltada para a frente
    }
`

export const MovieList = styled.ul`

    list-style: none;
    display: grid;   // flex: uma dimensão "uma linha";  grid: duas dimensões "várias colunas diferentes"
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
`