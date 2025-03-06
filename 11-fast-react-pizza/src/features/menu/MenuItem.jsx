import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getEachItemQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";


function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector((getEachItemQuantityById(id)));

  const isInCart = currentQuantity > 0;


  function addCart(){
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?`opacity-70 grayscale`:``}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

          {isInCart && 
          <div className="flex gap-3 items-center md:gap-8">
            <UpdateCartQuantity pizzaId={id} quantity={currentQuantity}/>
            <DeleteItem pizzaId={id}/>
          </div>}

          {!soldOut && !isInCart && <Button onClick={addCart} type="small">Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
