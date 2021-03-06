import React from "react";
import { useHistory } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    };
    const handleProceedToShipping = () => {
        // import { clearTheCart } from "../../utilities/fakedb";
        // setCart([]);
        // clearTheCart();
        history.push("/shipping");
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map((product) => (
                    <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        className="btn-regular"
                        onClick={handleProceedToShipping}
                    >
                        Proceed to shipping
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;
