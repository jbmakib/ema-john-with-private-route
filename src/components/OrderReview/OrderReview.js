import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="product-container">This is order review</div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;
