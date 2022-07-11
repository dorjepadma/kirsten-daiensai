import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context'

import './CheckoutItem.styles.scss';



const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemOnClick = () => clearItemFromCart(cartItem)
  const addItemOnClick = () => addItemToCart(cartItem)
  const removeItemOnClick = () => removeItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={removeItemOnClick}>
            <span>
              &#8592;
            </span>
          </div> 
            <span className="value">
            {quantity}
            </span>
          <div className='arrow'  onClick={addItemOnClick}>
            <span>
              &#8594;
            </span>
          </div>
        </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemOnClick}>
        <span onClick={() => {}}>&#10005;</span>
      </div>
    </div>
  )
}

export default CheckoutItem;
