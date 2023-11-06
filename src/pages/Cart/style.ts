import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CartContainer = styled.div`
    display: flex;
    transition: 100ms all;
    flex-direction: column;
    row-gap: 20px;
    height: 100vh;
    width: 100%;
    align-items: center;
    margin-left: 20px;
    overflow-x: hidden;
`;

const CartTemplate = styled.div`
    background-color: #191919;
    width: 90%; 
    height: 130px;
    border-radius: 7px;
    align-items: center;
    text-align: center;
    justify-content:space-around;
    margin-right: 20px;
    display: flex;
    flex-direction: row;

    @media screen  and (max-width: 560px){
        height: 100px;
    }
`;

const Img = styled.img`
    background-color: #252627;
    border-radius: 7px;
    width: 40%;
    max-width:100px ;
`;

const TextContainer = styled.div`
    margin-top:15px ;
    height: 10vh;
    flex-direction: column;

    @media screen  and (max-width: 560px){
        font-size: 13px;
        font-weight: bolder;
    }
`;

const Text = styled.p`
    padding-bottom: 20px;
    color: #fff;
    font-weight: bold;
`; 

const Price = styled.p`
    font-weight: 560;
    color: #fff;
`;

const ButtonDelete = styled(FontAwesomeIcon)`
    color: #F50000;
    cursor: pointer;
    &:hover{
        color: #E00000;
    }
`;

export{
    CartTemplate,
    CartContainer,
    Text,
    Price,
    TextContainer,
    Img,
    ButtonDelete
}