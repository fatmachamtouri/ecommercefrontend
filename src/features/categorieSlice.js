import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategorie } from "../Service/CategorieService";

export const getCategorie = createAsyncThunk(
    'categorie/getCategorie',
    async (_, thunkAPI) => {
        const { rejectedWithValue } = thunkAPI();
        try {
            const res = await fetchCategorie();
            return res.data;
        } catch (error) {
            return rejectedWithValue(error.message)
        }
    }
)

export const categorieSlice = createSlice({
    name: 'categorie',
    initialState: {
        categories: [],
        categorie: {},
        isLoading: false,
        success: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategorie.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getCategorie.fulfilled, (state, action) => {
                state.sucess = action.payload;
            })
            .addCase(getCategorie.rejected, (state, action) => {
                state.error=action.payload;
            })
    }
})

export default categorieSlice.reducer;