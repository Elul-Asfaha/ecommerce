import { Rating } from "@mui/material";
const RatingComponent = ({ rating }) => {
    return <Rating name='read-only' value={rating} readOnly />;
};
export default RatingComponent;
