import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const handleNavigation=(e, path)=>{
        e.preventDefault();
        navigate(path);
    };
    return (
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>View Collections</li>
                <li>
                    <a href="" className="" onClick={()=>handleNavigation(e, "/products/all")}>Shop All</a>
                </li>
                <li>FAQ</li>
                <li>Track Your Order</li>
                <li>Contact Us</li>
                <li>
                    <a href="" className="add-to-cart-btn" onClick={()=>navigate("/auth")}>Login/SignUp</a>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;