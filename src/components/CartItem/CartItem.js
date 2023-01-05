import "./CartItem.css";
import { useDispatch} from 'react-redux';
import {add,removeFromCart} from "../../reducers/cartReducer";

function CartItem(props) {
  const items=props.item;
  console.log(items);
  
  const dispatch = useDispatch()
  const handelRemoveFromCart=(item)=>{
    console.log("Ready to delete")
    // using dispatch to send remove action and payload.

    dispatch(removeFromCart(items.id));
  }
  const handelAddItemQuantity=()=>{
    console.log("item++")
    dispatch(add(items))
  }
  
  return (
    <div className="cartItem">
      
      <img src={props.item.image}></img>
      <p>{props.item.title}</p>
      <div>
        <button onClick={handelRemoveFromCart} className="btn btn-success">Remove from Cart</button>
      </div>
      <p>{props.item.price}</p>
      <div>
        <button onClick={handelAddItemQuantity} className="btn btn-success">+</button>
      </div>
      <p>{props.item.quantity}X{props.item.price}={props.item.quantity * props.item.price}</p>
    </div>
  );
}

export default CartItem;
