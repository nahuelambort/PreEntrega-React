import { useEffect, useState } from "react";
import { getSneakers } from "../lib/sneakers.requests";
import { ItemListContainer, Loader } from "../components";

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
            {isLoading && <Loader />}
            <div className="container">
                <ItemListContainer products={products}/>
            </div>
        </div>
    );
};