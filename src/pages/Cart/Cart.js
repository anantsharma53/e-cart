import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector} from "../../reducers/cartReducer";
import { getTotal } from "../../reducers/cartReducer";
import { useEffect } from "react";
function Cart(props) {
  const carts=useSelector(cartSelector);
  console.log(carts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getTotal());
  },[carts,dispatch])
  
  
  console.log(carts.length);
  return (
    <div>
      <Header />

      <div>
        {/* {items.length} */}
        {carts.map((i) => (
          <CartItem  item={i} />
        ))}
        <span> Subtotal</span>

        <span>{carts.totalAmount}</span>
        
      </div>
    </div>
  );
}

export default Cart;


