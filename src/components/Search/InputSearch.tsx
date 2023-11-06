import { useEffect, useState } from "react"
import { Input, Div, Icon, Box, BoxProduct, BoxText, BoxInfo, Price } from "./style"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Context } from "../../Contexts/UseContext"

export default function InputSearch(){  
    const { product } = useContext(Context);
    const [value, setValue] = useState<string>("");
    const [viewProduct, setViewProduct] = useState<{name: string, value: string, image: string}[] | undefined>(product);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setViewProduct(product)
    };

    useEffect(() => {
        const findProduct = () => viewProduct && viewProduct.length > 0
        ? viewProduct.filter((p) => p?.name.toLowerCase().includes(value.toLowerCase()))
        : undefined
        setViewProduct(findProduct);

        if(value.length === 0 || value.length > 2) findProduct();
    }, [value])

    return(
        <>
        <Div>
            <Icon icon={faMagnifyingGlass} size="lg"/>
            <Input value={value} onChange={handleChange} placeholder="Digite algo...">
            </Input>
        </Div>
        {
            value.length > 0 ? 
                    <Box showModal="flex">
                            {
                                viewProduct?.map((product) => (                                    
                                    <BoxProduct>
                                    <img style={{width:"70px", borderRadius:"7px"} } src={product.image}></img>
                                    <BoxInfo>
                                        <BoxText>{product.name}</BoxText>
                                        <Price>R${product.value}</Price>
                                    </BoxInfo>
                                    </BoxProduct>
                                ))
                            }
                    </Box>
            : <Box showModal="none"></Box>
        }
        </>
    )
}