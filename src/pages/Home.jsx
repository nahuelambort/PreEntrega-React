import { useEffect, useState } from "react";
import { getSneakers } from "../lib/sneakers.requests";
import { ItemListContainer } from "../components";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        getSneakers()
        .then(res => {
            setIsLoading(false);
            setProducts(res)})
    },[]);


    return (
        <div>
            <div className="container">
                <h5>{isLoading ? "Cargando . . ." : "Listo"}</h5>
                <ItemListContainer products={products}/>
            </div>
        </div>
    );
};