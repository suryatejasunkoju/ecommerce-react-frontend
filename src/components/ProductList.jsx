import { useEffect, useState } from "react";
import Product from "./product";
import ScrollButton from "./ScrollButton"
import { useNavigate } from "react-router-dom";

function ProductList({ heading }) {
    const navigate = useNavigate();
    // const [stateVariable, setState] = useState(initialStateValue)
    const [allProducts, setAllProducts] = useState([]);
    const endpoint = "products";
    const url = import.meta.env.VITE_BACKEND_API_BASE_URL;
    // console.log("url=", url);
    const completeUrl = url + endpoint;
    console.log("completeUrl=", completeUrl);
    const fetchAllProducts = async () => {
        const res = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,images");
        console.log("fetchAllProducts::res=", res);
        const json = await res.json();
        console.log("fetchAllProducts::json=", json);
        const productList = json.products.map(item => {
            return { "id": item.id, "title": item.name, "image": item.images[0], "price": item.price }
        });
        setAllProducts(productList);
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
            <h2>{heading}</h2>
            <ScrollButton direction={'left'} />
            <ul>
                {allProds}
            </ul>
            <ScrollButton direction={'right'} />
            <button onClick={() => { navigate("/products/all") }} className="add-to-cart-btn">View All</button>
        </div>
    )
}
export default ProductList;