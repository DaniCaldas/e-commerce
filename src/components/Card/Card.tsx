import { CardHandle, CardImg, Title, CardTable, Price, Button, Icon, IconContainer, Text } from "./style"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Context } from "../../Contexts/UseContext"

export default function Card({url, produto, valor, id}: ProductType){

    const { Comprar } = useContext(Context)

    return(
        <CardHandle id={id}>
                <CardImg src={url}></CardImg>
                
            <Title>{produto}</Title>
            <CardTable>
                <Price>R$ {valor}</Price>
                <Button onClick={() => { Comprar(url, produto, valor) }}>
                    <Text>Comprar</Text>
                    <IconContainer>
                        <Icon icon={faCartPlus} size="xl"></Icon>
                    </IconContainer>
                </Button>
            </CardTable>
        </CardHandle>
    )
}