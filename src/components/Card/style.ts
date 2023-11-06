import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const CardHandle = styled.div`
    width: 80%;
    min-width: 300px;
    height: 400px;
    padding: 0px 0px;
    border: 2px solid #191919;
    background-color: #191919 ;
    margin:0 auto;  
    border-radius: 7px;
    box-shadow: 0 14px 26px rgba(0,0,0,0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width:1000px){
        width: 70%;
    }

    @media screen and (max-width:640px){
        width: 60%;
    }
`;

const CardItem = styled.div`
    background-color: #fefae0;
    justify-content: center;
    align-items: center;
    margin:10px auto 0px auto ;
    display: flex;
    width: 280px;
    border-radius: 7px;
`;

const CardImg = styled.img`
    border-radius: 7px;
    width: 80%;
`;

const Title = styled.p`
    padding: 15px 25px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    
`;

const CardTable = styled.div`
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    display: flex;
`;

const Price = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

const Button = styled.button`
    position: relative;
    height: 40px;
    width: 140px;
    display: flex;
    border: none;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    background-color: #598392;
    overflow: hidden;
    &:hover{
        p{
            color: transparent;
        }

        span{
            width: 148px;
            transform: translateX(0);
        }
    }
`;

const Text = styled.p`
    transform: translateX(30px);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    transition: 400ms;
`;

const Icon = styled(FontAwesomeIcon)`
`;

const IconContainer = styled.span`
    position: absolute;
    transform: translateX(100px);
    background-color: #4E717E;
    height: 100%;
    width: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: .4s;
    color: #fff;
`;

export{
    CardHandle,
    CardImg,
    CardItem,
    Title,
    CardTable,
    Price,
    Button,
    Icon,
    IconContainer,
    Text
}