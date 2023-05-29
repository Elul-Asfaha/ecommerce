import ReactIcons from "./ReactIconsImport";
const RatingComponent = ({ rating }) => {
    return (
        <div className='flex'>
            {rating >= 1 ? (
                <ReactIcons.AiFillStar className='text-yellow-500' />
            ) : (
                <ReactIcons.AiOutlineStar className='bg-white' />
            )}
            {rating >= 2 ? (
                <ReactIcons.AiFillStar className='text-yellow-500' />
            ) : (
                <ReactIcons.AiOutlineStar className='bg-white' />
            )}
            {rating >= 3 ? (
                <ReactIcons.AiFillStar className='text-yellow-500' />
            ) : (
                <ReactIcons.AiOutlineStar className='bg-white' />
            )}
            {rating >= 4 ? (
                <ReactIcons.AiFillStar className='text-yellow-500' />
            ) : (
                <ReactIcons.AiOutlineStar className='bg-white' />
            )}
            {rating == 5 ? (
                <ReactIcons.AiFillStar className='text-yellow-500' />
            ) : (
                <ReactIcons.AiOutlineStar className='bg-white' />
            )}
        </div>
    );
};
export default RatingComponent;
