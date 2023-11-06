import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface DefaultTypes{
    children: JSX.Element
}

interface ProductApiType{
    id?:string;
    image:string;
    name:string;
    value:string;
}

interface ContextTypes{
    product: ProductApiType[];
    cartProducts: never[];
    Comprar: (url: string, produto: string, valor: string) => void;
    Remover: (id: string | undefined) => void;
    RemoverTudo: () => void;
}

export const Context = createContext({} as ContextTypes)
const api = "https://e-commerce-api-dri9.onrender.com"

export default function UseContext({children}: DefaultTypes){

    const [product, setProduct] = useState<ProductApiType[]>([])
    const [cartProducts, setCartProducts] = useState([])
    
    function Comprar(url: string, produto: string, valor: string){
        axios.post(api + "/carrinho", {
            url,
            produto,
            valor
        })

        .then(() => console.log)
        .catch(() => console.log("vish deu erro!"))
    }

    const Remover = (id: string| undefined) => {
        axios.delete(api + `/carrinho/${id}`)
        .then(() => console.log("Produto apagado!"))
        .catch(() => console.log("vish deu erro!"))
    }

    const RemoverTudo = () => {
        axios.delete(api + "/deleteAll")
        .then(() => console.log("Todos produtos apagados!"))
        .catch(() => console.log("Erro ao tentar apagar os produtos!"))
    }
    
    axios.get(api + "/produtos")
    .then((response) => setProduct(response.data))
    .catch((err) => console.log(err))

    
    useEffect(() => {
        axios.get(api + "/carrinho")
        .then((response) => setCartProducts(response.data))
        .catch(() => console.log("vish deu erro!"))
    },[Comprar, Remover, RemoverTudo])

    return(
        <Context.Provider value={{product, Comprar, Remover, RemoverTudo, cartProducts}}>
            {children}
        </Context.Provider>
    )
}