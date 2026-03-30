import { useEffect, useState } from "react";
import Product from "./Product";
import ScrollButton from "./ScrollButton"

function ProductList() {
    // const [stateVariable, setState] = useState(initialStateValue)
    const [allProducts, setAllProducts] = useState([]);
    const endpoint = "products";
    const url = import.meta.env.VITE_BACKEND_API_BASE_URL;
    // console.log("url=", url);
    const completeUrl = url + endpoint;
    console.log("completeUrl=", completeUrl);
    const fetchAllProducts = async () => {
        const res = await fetch(completeUrl);
        const json = await res.json();
        // console.log("fetchAllProducts::json=", json);
        setAllProducts(json);
        // console.log("fetchAllProducts::allProducts=", allProducts);
    }
    useEffect(
        () => {
            fetchAllProducts();
        }, []
    );
    useEffect(() => {
        // if(allProducts!=undefined)
        // console.log("allProducts:", allProducts);
    }, [allProducts]);

    const allProds = allProducts.map(product =>
        <li>
            <Product key={product.id} product={product} />
        </li>
    );
    return (
        <div className="product-list-container">
            <ScrollButton direction={'left'} />
            <ul>
                {allProds}
            </ul>
            <ScrollButton direction={'right'} />
        </div>
    )
}
export default ProductList;