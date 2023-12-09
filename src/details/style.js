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
        background: red;
        color: white;
        border: none;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        border-radius: 0.8rem;
        padding: 0.4rem 0.6rem; // cordenada Y / cordenada X
        margin-top: 2rem;

        transition: all 0.3s;
    }

    button: hover {
        background: #B40000;
        color: white;
    }

    .header h1 {
        color: red;
        margin-left: 70px;
        padding-top: 20px;
        font-weight: bold ;
    }
`