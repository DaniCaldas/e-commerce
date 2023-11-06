import { ButtonDelete, CartContainer, CartTemplate, Img, Price, Text, TextContainer } from "./style"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Context } from "../../Contexts/UseContext"

export default function Cart(){
    const { cartProducts, Remover } = useContext(Context)
    return(
        <CartContainer>
            {
                cartProducts.map((product: ProductType) => (        
                    <CartTemplate key={product.id}>
                            <Img src={product.url}/>
                            <TextContainer>
                                <Text>{product.produto}</Text>
                                <Price>R${product.valor}</Price>
                            </TextContainer>
                            <ButtonDelete onClick={() => Remover(product.id)} icon={faTrash} size="lg"></ButtonDelete>
                        
                    </CartTemplate>
                ))
            }
        </CartContainer>
    )
}