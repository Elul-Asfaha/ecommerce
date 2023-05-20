import { useContext } from "react";
import { ContextProvider } from "../App";

const Favorites = () => {
    const providedData = useContext(ContextProvider);
    const dispFavs = providedData.favs;
    return <div>{dispFavs.length}</div>;
};
export default Favorites;
