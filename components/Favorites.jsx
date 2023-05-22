import { useContext } from "react";
import { ContextProvider } from "../App";

const Favorites = () => {
    const providedData = useContext(ContextProvider);
    return <div>favs: {providedData.favs.length}</div>;
};
export default Favorites;
