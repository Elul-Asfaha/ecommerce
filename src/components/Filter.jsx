import { useContext } from "react";
import { ContextProvider } from "../App";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Filter = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='flex flex-col md:flex-row justify-between py-5 px-[5%] gap-1'>
            <div className='flex flex-wrap gap-2'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                    <InputLabel id='demo-simple-select-label'>Type</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Type'
                        value={providedData.filter.type}
                        onChange={providedData.handleSelectChange}
                    >
                        <MenuItem value=' '>All</MenuItem>
                        <MenuItem value='0'>Over-ear headphones</MenuItem>
                        <MenuItem value='1'>On-Ear headphones</MenuItem>
                        <MenuItem value='2'>EarBuds</MenuItem>
                        <MenuItem value='3'>Wired</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                    <InputLabel id='demo-simple-select-label'>Price</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Price'
                        value={providedData.filter.price}
                        onChange={providedData.handleSelectChange}
                    >
                        <MenuItem value=' '>All</MenuItem>
                        <MenuItem value='100'>$100</MenuItem>
                        <MenuItem value='200'>$200</MenuItem>
                        <MenuItem value='500'>$500</MenuItem>
                        <MenuItem value='1000'>$1000+</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                    <InputLabel id='demo-simple-select-label'>Color</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Color'
                        value={providedData.filter.color}
                        onChange={providedData.handleSelectChange}
                    >
                        <MenuItem value=' '>All</MenuItem>
                        <MenuItem value='Blue'>Blue</MenuItem>
                        <MenuItem value='Green'>Green</MenuItem>
                        <MenuItem value='Red'>Red</MenuItem>
                        <MenuItem value='Maroon'>Maroon</MenuItem>
                        <MenuItem value='Yellow'>Yellow</MenuItem>
                        <MenuItem value='Aquamarine'>Aquamarine</MenuItem>
                        <MenuItem value='Turquoise'>Turquoise</MenuItem>
                        <MenuItem value='Khaki'>Khaki</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='flex items-center gap-2'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                    <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Sort'
                        value={providedData.sort.sortBy}
                        onChange={providedData.handleSortChange}
                    >
                        <MenuItem value=' '>All</MenuItem>
                        <MenuItem value='0'>price asc</MenuItem>
                        <MenuItem value='1'>price dec</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
export default Filter;
