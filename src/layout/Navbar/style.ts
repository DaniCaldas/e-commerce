import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface StyleType{
  open?: boolean | number;
  show?: string;
}

interface CartType{
  open: boolean | number;
}

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  transition: 200ms;
  &:hover{
    color: #AEB4A9;
  }
  z-index: 100;
`;

const Logo = styled.img`
  width: 100px;

  @media screen and (max-width: 640px) {
    width: 50px;
  }
`;

const Notific = styled.span`
    position: absolute;
    ${({show}: StyleType) => `display:${show}` };
    border-radius: 50%;
    top: 20px;
    margin-left:15px;
    content: '2'; 
    color: #fff;
    background-color: red;
    width: 17px;
    height: 17px;
    color: #fff;
    text-align: center;
    font-size:13px;
    font-weight:bold;
    align-items: center;
    justify-content: center;
`;

const IconCart = styled(FontAwesomeIcon)`
  position: relative;
  border: 0;
  color: #fff;
  display: flex;
  transition: 200ms;
  &::before{
    position: absolute;
    display: flex;
    top: -0.90em;
    content: '2';
    right: -0.7em;
    background-color: red;
    width: 40px;
    height: 40px;
  }
  &:hover{
    color: #AEB4A9;
  }
`;

const Ul = styled.ul`
    list-style: none;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    `;

const Li = styled.li`
  margin-top: -10px;
  z-index: 100;

  @media screen and (max-width: 640px){
      margin-top:10px ;
  }
`;

const CartPage = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    position: fixed;
    row-gap: 1.5rem;
    top: -5px;
    right: 0;
    height: 100vh;
    width:30vw;
    padding-top: 9rem;
    background-color: #201F1B;
    transition:  300ms;
    transform: ${({open}: CartType) => open ? 'translateX(0)' : 'translateX(100%)'}; 
    

    @media screen  and (max-width: 960px){
        width: 50vw;
    }
    @media screen  and (max-width: 400px){
        width: 60vw;
    }
`;  


const ButtonFinish = styled.button`
  width: 200px;
  height: 100px;
  background-color: #29bf12;
  border:none ;
  border-radius: 7px;
  color: #ffff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 13px;
  transition: 200ms;

  &:hover{
    background-color: #24A810;
  }

  @media screen and (max-width:520px){
    width: 160px;
    font-size: 13px;
    height: 80px;
  }
`;

const Text = styled.h1`
  color:#fff ;
  @media screen and (max-width: 550px){
    font-size: 25px;
  }
`;

const Header = styled.header`
    background-color: #201F1B;
    height: 5em;
    top: 0;
    position: sticky;
    z-index: 100;
`;


export{
  Header,
  Text,
  Ul,
  Li,
  CartPage,
  Icon,
  IconCart,
  Notific,
  ButtonFinish,
  Logo
}