import Banner from './Banner'
import ProductList from './ProductList'
import Usp from './Usp'
import NavBar from './NavBar'
import CategoryList from './CategoryList';

function HomePage(params) {
    return (
        <div>
            <NavBar />
            <Banner />
            <ProductList heading={"Shop Our Customers Favorite"}/>
            {/* <CategoryList heading={"Shop Our Category"}/> */}
            <ProductList heading={"Authentic Pickles & Oils"}/>
            <Usp />
        </div>
    );
}
export default HomePage;