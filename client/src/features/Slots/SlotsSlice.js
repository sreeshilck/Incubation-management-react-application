import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const getSlotsData = createAsyncThunk(
    "slots/getslotsData",
    async (arg, {isRejectedWithValue}) => {

    try {
       // console.log("in slotslice");
        const {data} = await axios.get("http://localhost:5000/bookingslots")
        console.log(data,"axiosndataaaaaaaaaaaa");
        return data;

    } catch (error) {
        isRejectedWithValue(error.response.data)
    }
});






// Slots Slice

const SlotsSlice = createSlice({
    name: "slots",
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading:false,
    },
    reducers: {},
    extraReducers: {
        [getSlotsData.pending]: (state) => {
            state.loading = true;
        },
        [getSlotsData.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
            console.log(payload,"payloaddd");
            state.isSuccess = true;
        },
        [getSlotsData.rejected]: (state, {payload}) => {
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },
    },

});


export default SlotsSlice;