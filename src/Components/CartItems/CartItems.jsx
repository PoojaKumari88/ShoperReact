import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import cart_cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContex } from "../../Context/ShopContext";

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFormCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {  all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return(
                        <div>
                            <div className="cartitem-format   cartitem-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img src={cart_cross_icon} alt="" onClick={() => { removeFormCart(e.id) }} className='carticon-remove-icon'/>
                            </div>
                            <hr />
                        </div>
                )}
                return null;
                }) }
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                    <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                        <div className="cartitems-promocode">
                            <p>If you have a promo code, Enter it here</p>
                            <div className="cartitems-promobox">
                                <input type="text" placeholder='Promo Code' />
                                <button>Submit</button>
                            </div>
                        </div>
                </div>

        </div>
    )
}

export default CartItems