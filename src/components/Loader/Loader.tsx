import { LoaderButton, LoaderContainer, LoaderImg, LoaderTable, LoaderText, LoaderWraper } from "./style";

export default function Loader(){
    return(
        <>
        <LoaderContainer>
            <LoaderWraper>
                <LoaderImg></LoaderImg>
                <LoaderText></LoaderText>

                <LoaderTable>
                    <LoaderText></LoaderText>
                    <LoaderButton></LoaderButton>
                </LoaderTable>
            </LoaderWraper>
        </LoaderContainer>
        </>    
    )
    
}