import styled from "styled-components"

const FooterTemplate = styled.footer`
    align-items: center;
    justify-content: center;
    background-color:#201F1B;
    height: 200px;
    width: 100%;
    margin-top: 140px;
`; 

const FooterCards = styled.div`
   display: flex;
   flex-direction: row;
    justify-content: space-evenly;
`;

const FooterCard = styled.div`
    margin-top: 37px;
`;

const Social = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    cursor: pointer;
`; 

const Text =  styled.p`
    font-size: 18px;
    color: #fff;
`;

const SubText = styled.p`
    font-size: 14px;
    margin-top: 7px;
    color: #fff;
`;

const Hr = styled.hr`
    margin: 25px 20px 15px 20px;
`;

const Description = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
`;

export{
    FooterTemplate,
    Text,
    SubText,
    FooterCard,
    Social,
    Hr,
    FooterCards,
    Description
}