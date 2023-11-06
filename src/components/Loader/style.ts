import styled from "styled-components";

const LoaderContainer = styled.div`
    margin:0 auto;
    width: 350px;
    height: 400px;
    position: relative;
    border: 1px solid #d3d3d3;
    border-radius: 7px;
    padding: 10px 0px;
    background-color: #e3e3e3;
    overflow: hidden;

    &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(110deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
    animation: gradient-animation_2 1.2s linear infinite;
    }

    @keyframes gradient-animation_2 {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(100%);
        }
    }
`;

const LoaderWraper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div{
        background-color: #cacaca;
        border-radius: 7px;
    }
`;

const LoaderImg = styled.div`
    border-radius: 7px;
    width: 300px;
    height: 300px;
`;

const LoaderText= styled.div`
    width: 100px;
    height: 30px;
    
`;

const LoaderButton = styled.div`
    height: 40px;
    width: 140px;
`;

const LoaderTable = styled.span`
    display: flex;
    gap: 40px;
    align-items: center;
`;

export{
    LoaderContainer,
    LoaderWraper,
    LoaderImg,
    LoaderText,
    LoaderButton,
    LoaderTable
}