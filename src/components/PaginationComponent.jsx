import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { ContextProvider } from "../App";
const PaginationComponent = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='flex justify-center'>
            <Stack spacing={5} style={{ fontSize: "40px" }}>
                <Pagination
                    count={
                        providedData.ecommerce &&
                        providedData.ecommerce.length / 50
                    }
                    variant='outlined'
                    shape='rounded'
                    onChange={(e, pageNumber) =>
                        providedData.setPaginationNumber(pageNumber)
                    }
                />
            </Stack>
        </div>
    );
};
export default PaginationComponent;
