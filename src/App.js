import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Navbar, Cart, Checkout, Home, Footer} from './components/controller';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    
    //fetches product data from commerceJS api
    const fetchProducts = async () =>{
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    //fetches cart data from commerceJS api
    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve());
    }

     //////CRUD Operations//////

    //handles adding items to cart
    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity);
        setCart(response.cart);
    }

    //handles updates to items cart
    const handleUpdateCartQty = async(productId, quantity) => {
        const response = await commerce.cart.update(productId, {quantity});
        setCart(response.cart);
    }

    //handles deleting items in cart
    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);
        setCart(response.cart);
    }

    //Delete all items in cart
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try{
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        }catch(error){
            console.log(error.data.error.message);
        }
    }

    //renders data from commerceJS once on inital load
    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[])

    return (
    <Router>
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                    {products.map(product => {

                        const productCategory = product.categories;
                       
                        for(let i = 0; i<productCategory.length; i++){
                            if(productCategory[i].name === 'New'){
                                return(
                                    <> 
                                        <p>{product.name}</p>
                                        <p>{product.price.formatted_with_symbol}</p>
                                        <p>{product.description}</p>
                                        <img src={product.media.source} width="100px"/>
                                    </>
                                    )
                            };
                        }
                     
                    })}
                </Route>
                <Route exact path="/shop">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/cart">
                    <Cart 
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />
                </Route>
                <Route exact path="/checkout">
                    <Checkout 
                    cart={cart}
                    order={order}
                    onCaptureCheckout={handleCaptureCheckout}
                    error={errorMessage}
                    />
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    </Router>    
    );
}

export default App
