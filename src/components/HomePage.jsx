import Banner from './Banner'
import ProductList from './ProductList'
import Usp from './Usp'
import NavBar from './NavBar'

function HomePage(params) {
    return (
        <div>
            <NavBar />
            <Banner />
            <ProductList />
            <Usp />
        </div>
    );
}
export default HomePage;