import { useContext } from "react";
import { ContextProvider } from "../App";

const Cart = () => {
    const providedData = useContext(ContextProvider);
    return <div>cart page placeholder</div>;
};
export default Cart;
