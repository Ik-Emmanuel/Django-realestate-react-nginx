import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import propertyAPIService from "./propertyAPIService";

// define initail state
const initialState = {
    properties: [],
    property: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


// define you axios api service here or in a new file and then import just like 
// import propertyAPIService from "./propertyAPIService";



// Use Asyncthunk to define actions to get all properties
export const getProperties = createAsyncThunk(
	"properties/getAll",
	async (_, thunkAPI) => {
		try {
			return await propertyAPIService.getProperties();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);



export const propertySlice = createSlice({
    name: "property",
    initialState,

    reducers: {
        reset: (state) => initialState,
    },

    // add cases for deifferent responses
	extraReducers: (builder) => {
		builder
			.addCase(getProperties.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProperties.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.properties = action.payload.results;
			})
			.addCase(getProperties.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = propertySlice.actions;
export default propertySlice.reducer;