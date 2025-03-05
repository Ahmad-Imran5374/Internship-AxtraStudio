import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartTotalQuantity);
  const totalCartPrice = useSelector(getCartTotalPrice);

  if(!totalCartQuantity){
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 sm:space-x-6 md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
