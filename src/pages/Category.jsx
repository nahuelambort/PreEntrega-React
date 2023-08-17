import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer, Loader } from "../components";
import { getSneakers } from "../lib/sneakers.requests";

export const Category = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setProducts([])
        setIsLoading(true);
        getSneakers(id).then(res => {
            setIsLoading(false);
            setProducts(res)
        });
    }, [id]);
    
    
    return (
        <div>
            <div className="container">
            {isLoading && <Loader />}
                <ItemListContainer products={products}/>
            </div>
        </div>
    );
    
};