import styled from 'styled-components';

export const Container = styled.div`

    padding: 0px;

    h1 {
        color: white;
        margin: 3rem 0;
    }

    .details {
        display: flex; // Deixa flexível
        justify-content: center; // Foca em centralizar pensando na horizontal / centralizar div's
        align-items: center; // Foca em centralizar pensando na vertical / centralizar div's
        margin-top: 75px;
    }

    img {
        width: 390px;
        border-radius: 1rem; // 1rem = 16px
        margin-top: -90px
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start; // Alinha todos os itens no começo
        max-width: 50%; // Tamanho máximo de ocupação da tela
        margin-left: 3rem;
    }

    .sinopse {
        line-height: 130%;
        font-size: 120%;
        margin-bottom: 1rem;
    }

    .release {
        opacity: 0.8;
        color: #6E6E6E;
    }

    button {
        background: black;
        border: none;
        cursor: pointer;
        margin-top: 15px;
        margin-left: 25px;
    }


    .header h1 {
        color: red;
        margin-left: -10px;
        padding-top: -19px;
        font-weight: bold ;
    }

    .trailer {
        margin-top: 5rem;
        text-align: center;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`