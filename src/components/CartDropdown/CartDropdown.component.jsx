import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.component'
import CartItem from '../CartItem/CartItem.component';
import { CartContext } from '../../Context/cart.context';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }
return (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
   {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>  
)
}

export default CartDropdown;
