import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
function Cart(props) {
  const items=useSelector(cartSelector);
  console.log(items.length);
  return (
    <div>
      <Header />

      <div>
        {/* {items.length} */}
        {items.map((i) => (
          <CartItem  item={i} />
        ))}
      </div>
    </div>
  );
}

export default Cart;


