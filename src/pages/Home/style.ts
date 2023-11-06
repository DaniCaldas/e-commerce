import styled from "styled-components";

const Section =  styled.section`
    background-color: #bbd0ff;
    height: 30rem;
    margin-top: 0px;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media screen and (max-width:640px){
        height: 25rem;
    }
`;

const Cards = styled.section`
    display: grid;
    width: 100%;
    margin: auto;
    align-items: center;
    text-align: center;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 100px;

@media screen and (max-width:1000px){
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 640px){
    grid-template-columns: repeat(1, auto);
    grid-row-gap: 40px;
}


`;

export{
    Section,
    Cards,
}