import { H1 } from "../../style"
import { Cards, Section } from "./style"
import Card from "../../components/Card/Card"
import { useContext } from "react"
import { Context } from "../../Contexts/UseContext"
import Loader from "../../components/Loader/Loader"
import Catalogo from "../../components/Catalogo/Catalogo"

export default function Home(){

    const { product } = useContext(Context)
    return(
        <>
            <Section>     
                <H1>
                    Mais Comprados
                </H1>
                <Catalogo/>
            </Section>

            <H1>Em Destaque</H1>
            <Cards>
                {
                     
                    product.length > 1? product.map((product) => (
                            <Card key={product.name} url={product.image} produto={product.name} valor={product.value}/>
                        ))
                    : 
                        (<>
                            <Loader/>
                            <Loader/>
                            <Loader/>
                        </>
                        )
                }
            </Cards>
       
        </>
    )
}