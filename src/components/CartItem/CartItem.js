import "./CartItem.css";
import { useDispatch} from 'react-redux';
import {removeFromCart} from "../../reducers/cartReducer";

function CartItem(props) {
  const items=props;
  console.log(items);
  
  const dispatch = useDispatch()
  const handelRemoveFromCart=(item)=>{
    console.log("Ready to delete")
    // using dispatch to send remove action and payload.

    dispatch(removeFromCart(items));
  }
  
  return (
    <div className="cartItem">
      
      <img src={props.item.image}></img>
      <p>{props.item.title}</p>
      <div>
        <button onClick={handelRemoveFromCart} className="btn btn-success">Remove from Cart</button>
      </div>
      
      <p>{props.item.price}</p>
    </div>
  );
}

export default CartItem;
