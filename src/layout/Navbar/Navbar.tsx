import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Ul,Li, Header, Text, CartPage, IconCart, Notific, ButtonFinish, Logo} from './style'
import { useState } from "react"
import InputSearch from "../../components/Search/InputSearch"
import Cart from "../../pages/Cart/Cart"
import { useContext } from "react"
import { Context } from "../../Contexts/UseContext"
import Swal from 'sweetalert2'
import LogoImg from '../../img/tenis.png'

export default function Navbar(){
    const [openCart, setOpenCart] = useState(false);
    const { cartProducts, RemoverTudo} = useContext(Context);

    const Alert = () => {
        Swal.fire({
            title: 'Deseja Finalizar sua Compra?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Compra Finalizada!', '', 'success')
              RemoverTudo()
            }
          })
    }

    const total = cartProducts.reduce((total, values: ProductType) => total + Number( values.valor), 0)
    const format = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency:'BRL'
    }).format(total);

    return(
        <Header>
            <Ul>
                <Li>
                    <Logo src={LogoImg}/>
                </Li>
                <Li>
                   <InputSearch/>
                </Li>
                <Li>
                    <IconCart
                    icon={faCartShopping} size="xl" 
                    onClick={() => setOpenCart(!openCart)} 
                    />
                    { cartProducts.length == 0 ? <Notific show="none">{cartProducts.length}</Notific>
                    : <Notific show="flex">{cartProducts.length}</Notific> }
                </Li>    
            </Ul>
                    <CartPage open={openCart}>
                        <Text>Seu Carrinho</Text>
                        
                        <Cart/>
                        <Text style={{fontSize:"20px"}}>Total: {format}</Text>
                        <ButtonFinish onClick={Alert}>Finalizar Compra</ButtonFinish>
                    </CartPage>
        </Header>
    )
}