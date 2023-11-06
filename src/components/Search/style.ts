import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface StyleType{
    showModal: string
}

const Div = styled.div`
    background-color: #fff;
    height: 35px;
    min-height: 27px;
    min-width: 180px;
    //width: 180px ;
    padding: 5px 9px 5px 9px;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
    color: #323232;
    padding-right:4px ;
`

const Input = styled.input`
    background: transparent;
    border: none;
    height: 30px;
    font-size: 16px;
    cursor: pointer;
    padding-left:9px;
    color:#000000 ;
    text-align: start;
    align-items: center;
    &:focus{
        outline: none;
    }
`;

const Box = styled.div`
    ${({showModal}: StyleType) => `display:${showModal}` };
    width: 25%;
    height: 50vh;
    background-color: #201F1B;
    position: absolute;
    flex-direction: column;
    align-items: center;
    overflow-x:hidden ;
    border-radius:7px;
    gap: 7px;
    
    @media screen and (max-width: 730px) {
        width: 250px;
        min-width:200px;
    }
`;

const BoxProduct = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #191919;
    border-radius: 5px;
    padding: 35px 8px;
    width: 80%;
    height: 80px;
    margin-top: 20px;
`;
const BoxText = styled.p`
    margin-top: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
`;

const Price = styled.p`
    color: #fff;
    font-weight: 600;
    font-size: 15px;
`;

const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-left: 20px;
`;

const img = styled.image`
`;

export{
    Input,
    Div,
    Icon,
    Box,
    BoxProduct,
    img,
    BoxText,
    Price,
    BoxInfo
}